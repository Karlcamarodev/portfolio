/* cspell:disable */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Code2,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
} from "lucide-react";
import { projects, type Project } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30">
                <Image
                  src="/images/karl-photo.jpg"
                  alt="Karl - Developer and Community Manager"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Karl Developer
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              Frontend Developer | Community Manager | Content Moderator
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl mb-12"
            >
              From Peru to Italy, building digital experiences and fostering
              communities. Passionate about creating intuitive interfaces and
              moderating safe online spaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-6"
            >
              <a
                href="https://github.com/Karlcamarodev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/giancarloperupachosalinas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:gianperualta@hotmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-surface/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Journey */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Born in Peru, raised in Venezuela, and now living in Italy.
                  I&apos;ve navigated diverse cultures and languages, shaping my
                  ability to connect with people globally. This journey has
                  fueled my passion for creating accessible digital experiences
                  and building inclusive communities.
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-gray-300">
                      Managed <strong>50+ member</strong> communities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-gray-300">
                      <strong>95% issue resolution</strong> rate
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-gray-300">
                      <strong>300%+ engagement</strong> increase
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of technology to create positive change.
                Whether it&apos;s through clean code, intuitive interfaces, or
                fostering safe online communities, my goal is to make the
                digital world more accessible and welcoming for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of my recent work in web development, from AI-powered
            applications to productivity tools.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
                  <Image
                    src={`/projects/${project.id}.png`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-xs rounded-md text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-surface/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript ES6+",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                ].map((skill: string) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-secondary">
                Tools
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Git & GitHub",
                  "VS Code",
                  "Figma",
                  "Vercel",
                  "npm/yarn",
                  "Chrome DevTools",
                ].map((skill: string) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning */}
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-accent">
                Currently Learning
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "API Development",
                  "Testing",
                  "CI/CD",
                ].map((skill: string) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:gianperualta@hotmail.com"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/50 transition-all group"
            >
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-400">
                  gianperualta@hotmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/giancarloperupachosalinas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-secondary/50 transition-all group"
            >
              <Linkedin className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm text-gray-400">
                  Professional Profile
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Karlcamarodev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent/50 transition-all group"
            >
              <Github className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-gray-400">@Karlcamarodev</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-sm text-gray-400">Milan, Italy 🇮🇹</p>
              </div>
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="mt-12 text-center">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-semibold">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
              Open to Work
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Developer Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Karlcamarodev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/giancarloperupachosalinas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:gianperualta@hotmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}