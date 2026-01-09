import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  hue: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 15000));
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() * 60 + 200, // Blue to purple range
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction - particles gently move away from cursor
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.x -= (dx / distance) * force * 2;
          particle.y -= (dy / distance) * force * 2;
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(Date.now() * 0.001 + index) * 0.1;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );

        if (isDark) {
          gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, ${pulseOpacity})`);
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 60%, ${pulseOpacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 50%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${particle.hue}, 60%, 50%, ${pulseOpacity * 0.6})`);
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 60%, 40%, ${pulseOpacity * 0.3})`);
          gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 30%, 0)`);
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connecting lines between nearby particles
        particlesRef.current.slice(index + 1).forEach((otherParticle) => {
          const lineDx = particle.x - otherParticle.x;
          const lineDy = particle.y - otherParticle.y;
          const lineDistance = Math.sqrt(lineDx * lineDx + lineDy * lineDy);

          if (lineDistance < 120) {
            const lineOpacity = (1 - lineDistance / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = isDark
              ? `hsla(220, 70%, 70%, ${lineOpacity})`
              : `hsla(220, 50%, 40%, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    // Reduce animation when tab is not visible
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pause animation when not visible
  useEffect(() => {
    if (!isVisible && animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [isVisible]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
