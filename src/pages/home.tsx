import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Code,
  Layout,
  Database,
  Terminal,
  Zap,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const CONTACT_EMAIL = "genat.hadrii@gmail.com";
const HIRE_SUBJECT = "Let's work together";
const HIRE_BODY = `Hi Genat Hadri,

I came across your portfolio and would love to discuss a project.

A few details to get us started:
- Project: 
- Timeline: 
- Budget range: 

Looking forward to hearing from you.`;

const project1 = "/projects/project-1.webp";
const project2 = "/projects/project-2.webp";
const project3 = "/projects/project-3.webp";
const project4 = "/projects/project-4.webp";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "projects", "experience", "contact"];
      let current = "hero";

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        current = sections[sections.length - 1];
      } else {
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              current = section;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="text-xl font-bold tracking-tight group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-white font-black">
            G
          </div>
          <span className="hidden sm:inline-block">Genat Hadri</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["about", "projects", "experience", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item);
              }}
              className={`text-sm font-medium capitalize relative py-2 ${
                activeSection === item
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              {item}
              {activeSection === item && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 inline-flex items-center gap-1.5"
            aria-label="Open CV in a new tab"
          >
            Resume
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Button
          asChild
          variant="outline"
          className="gradient-border border-transparent bg-transparent hover:bg-transparent hidden sm:flex"
        >
          <Link
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              HIRE_SUBJECT
            )}&body=${encodeURIComponent(HIRE_BODY)}`}
            aria-label={`Email ${CONTACT_EMAIL} with a project inquiry`}
          >
            Hire Me
          </Link>
        </Button>
      </div>
    </motion.nav>
  );
}

// Hero Component
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Orbs */}
      <div
        className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#FF8000]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 max-w-4xl"
        >
          Interfaces that feel <br className="hidden md:block" />
          <span className="text-gradient">effortless.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed"
        >
          I&apos;m Genat Hadri, a senior frontend developer building fast,
          accessible web apps with React, Next.js, and TypeScript. Based in
          Prishtina, Kosovo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-accent text-white border-0 hover:opacity-90 transition-opacity h-14 px-8 text-base font-semibold group cursor-pointer"
            onClick={() => {
              const el = document.getElementById("projects");
              if (el)
                window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
          >
            View Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base font-semibold border-border hover:bg-secondary cursor-pointer"
            onClick={() => {
              const el = document.getElementById("about");
              if (el)
                window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }}
          >
            Read Bio
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const skills = [
    { name: "React & Next.js", icon: Code },
    { name: "TypeScript", icon: Terminal },
    { name: "Design Systems", icon: Layout },
    { name: "Performance & Core Web Vitals", icon: Zap },
    { name: "Accessibility", icon: Globe },
    { name: "API Integration & State", icon: Database },
  ];

  const yearsOfExperience = new Date().getFullYear() - 2020;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-gradient-accent inline-block"></span>
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                I&apos;m a senior frontend developer focused on turning complex
                product requirements into fast, accessible, and maintainable
                user interfaces. My stack of choice is React, Next.js, and
                TypeScript.
              </p>
              <p>
                Over the past {yearsOfExperience}+ years I&apos;ve shipped
                production apps with startup founders and engineering teams
                across Europe — building design systems, component libraries,
                and performance-critical UI. I care deeply about code quality,
                DX, and the details users actually feel.
              </p>
              <p>
                When I&apos;m not refactoring a render tree or fine-tuning a
                Lighthouse score, I&apos;m usually crafting overly intricate
                pour-over coffee or getting lost in a game of chess.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium border border-border/50 flex items-center gap-2 bg-secondary/50 hover:bg-secondary"
                    >
                      <skill.icon className="w-4 h-4 text-primary" />
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Dealer Assist",
      description:
        "A platform that helps car dealerships manage their websites, keep inventory updated, handle leads, and grow online—without needing extra software or agencies.",
      image: project1,
      tags: ["Next JS", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Healthcare Platform",
      description:
        "A web-based solution that provides fast, real-time collaboration between field medical teams, technicians and radiologists. Easy access to reports, patients’ history and medical team profiles.",
      image: project2,
      tags: ["React JS", "TypeScript", "Tailwind CSS", "Postgres SQL"],
      link: "#",
    },
    {
      title: "RK Container Management System",
      description:
        "A system developed for the Norwegian Red Cross to manage and monitor donation (RK) containers. The platform tracks container locations, maintains records for each unit, and logs collection data to support efficient logistics and resource planning.",
      image: project3,
      tags: ["React JS", "TypeScript", "GraphQL", "SCSS"],
      link: "#",
    },
    {
      title: "Appointment Scheduling Software",
      description:
        "A web-based appointment scheduling system that contains all the information needed for clients to make appointments in just a second. On the other hand, employees have access to internal data such as working hours, availability, hours off, awaiting appointments.",
      image: project4,
      tags: ["React JS", "TypeScript", "Material UI", "GraphQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-4">
                <span className="w-12 h-0.5 bg-gradient-accent inline-block"></span>
                Selected Work
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl font-light">
                A selection of products I&apos;ve architected and engineered on
                the frontend from scratch.
              </p>
            </div>
            <Button
              variant="link"
              className="group text-foreground cursor-pointer"
              onClick={() => {
                window.open("https://github.com/GenatHadri", "_blank");
              }}
            >
              View Github{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="h-full group border-border bg-card overflow-hidden hover:border-primary/50 transition-colors duration-500">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={720}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.12em] text-foreground/70 border border-border/60 bg-background/40 backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const jobs = [
    {
      role: "Frontend Engineer",
      company: "Technexus",
      period: "2024 - Present",
      description:
        "Developing high-performance, user-friendly web applications using Next.js and TypeScript. Working across both client-side and server-side rendering to deliver fast, SEO-optimized experiences. Integrating with APIs, handling client requests, and transforming designs into responsive interfaces while continuously optimizing performance and scalability.",
    },
    {
      role: "Freelance Frontend Developer",
      company: "Freelance",
      period: "2022 - 2024",
      description:
        "Built and delivered modern React-based applications for international clients, including a market network project in Sweden. Designed and implemented key features for an admin dashboard, ensuring seamless functionality tailored to client requirements. Collaborated closely with stakeholders throughout the development process. Contributed to data-driven platforms by enabling real-time data delivery, supporting enterprise resource planning (ERP) systems, and helping businesses optimize operations and decision-making.",
    },
    {
      role: "Frontend Engineer",
      company: "Kutia",
      period: "2021 - 2024",
      description:
        "Developed and maintained multiple large-scale web applications across healthcare, public data, and business domains. Managed data visualization systems for the Norwegian Red Cross using tables, charts, and maps. Built a healthcare platform enabling real-time collaboration between medical teams, radiologists, and technicians, improving access to patient data and reports. Contributed to OpenData and OpenJustice initiatives in Kosovo, providing structured, accessible data for anti-corruption efforts. Created internal systems including a confidential HR platform and an appointment scheduling solution with real-time chat. Mentored interns and promoted a collaborative, high-productivity development environment.",
    },
    {
      role: "Full Stack Developer",
      company: "PBC",
      period: "2021 - 2021",
      description:
        "Worked as a Full Stack Intern, gaining hands-on experience with JavaScript and modern web technologies. Contributed to both frontend and backend development tasks while building a strong foundation in full stack application development.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-gradient-accent inline-block"></span>
            Experience
          </h2>

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-8 md:pl-0 group"
              >
                <div className="hidden md:block absolute z-10 left-[-38.5px] top-3 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
                <div className="md:border-l md:border-border md:pl-10 md:ml-[-35px] relative">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {job.role}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs"
                    >
                      {job.period}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-4">
                    {job.company}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-0.5 bg-gradient-accent inline-block"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </span>
            <span className="w-12 h-0.5 bg-gradient-accent inline-block"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s build something{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              remarkable
            </span>
            .
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Currently open to senior frontend roles, contract work, and select
            collaborations. The fastest way to reach me is by email.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent text-white border-0 hover:opacity-90 h-14 px-8 text-base font-medium group"
            >
              <Link
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  "Project inquiry"
                )}`}
                aria-label={`Send an email to ${CONTACT_EMAIL}`}
              >
                <Mail className="w-5 h-5 mr-2" />
                {CONTACT_EMAIL}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-accent flex items-center justify-center text-white text-xs font-black">
            G
          </div>
          <span className="font-medium text-sm">Genat Hadri</span>
        </div>
        <p className="text-muted-foreground text-sm font-light">
          © {new Date().getFullYear()} Genat Hadri. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Link
            href="https://github.com/GenatHadri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/genathadri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
