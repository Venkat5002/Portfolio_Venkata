import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, Trophy, BookOpen, ExternalLink } from "lucide-react";
import { siteConfig, certificationsConfig, achievementsConfig } from "@/config/portfolio";

const ExperienceSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Education & Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey, certifications, and achievements
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card hover-lift overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))]" />
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {siteConfig.education.institution}
                      </CardTitle>
                      <p className="text-primary font-semibold mt-1">
                        {siteConfig.education.degree}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {siteConfig.education.year}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {siteConfig.education.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground text-base px-4 py-1.5 font-bold self-start">
                    CGPA: {siteConfig.education.cgpa}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <BookOpen className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Currently in 4th year, maintaining strong academic performance</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <Award className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-sm text-foreground">Active learner in AI, Web Development, and Database Management</span>
                  </div>
                </div>
                
                {/* Key Courses */}
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures & Algorithms", "Database Management", "Operating Systems", "Computer Networks", "Object-Oriented Programming"].map((course) => (
                      <Badge key={course} variant="secondary" className="font-normal">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Previous Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {siteConfig.previousEducation.map((edu, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.degree} {edu.specialization && `- ${edu.specialization}`}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">{edu.year}</span>
                        <Badge variant="outline" className="text-xs">{edu.score}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {certificationsConfig.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs">{cert.issuer}</Badge>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <ul className="space-y-1">
                        {cert.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                            <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-foreground flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-3">
                  {achievementsConfig.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary"
                    >
                      <span className="text-sm text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
