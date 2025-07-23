"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/testimonials";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconBriefcase, IconSchool, IconCode, IconRocket } from "@tabler/icons-react";

export default function About() {
  const refs = {
    avatar: useRef(null),
    aboutText: useRef(null),
    experience: useRef(null),
    technologies: useRef(null),
    education: useRef(null),
    cta: useRef(null),
  };

  const inView = Object.fromEntries(
    Object.entries(refs).map(([key, ref]) => [
      key,
      useInView(ref, { once: true, margin: "-20% 0px" }),
    ])
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          ref={refs.avatar}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView.avatar ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-20"
        >
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse" />
            <Image
              src="/profile_picture.png"
              alt="Rahul Sharma"
              fill
              className="object-cover z-10"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView.avatar ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mt-8 text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            Rahul Sharma
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView.avatar ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-4 flex items-center gap-2"
          >
            <IconRocket className="text-purple-400 h-6 w-6" />
            <p className="text-xl text-gray-300 font-medium">
              Full Stack Developer & Tech Community Leader
            </p>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          ref={refs.aboutText}
          initial="hidden"
          animate={inView.aboutText ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-3xl mx-auto text-center"
        >
          <p className="text-xl leading-relaxed text-gray-300">
            Bridging the gap between <span className="text-blue-400">cutting-edge technology</span> and 
            <span className="text-purple-400"> community leadership</span>. Full-stack developer specializing 
            in modern web ecosystems, passionate about building scalable solutions and fostering 
            developer communities through hands-on leadership.
          </p>
        </motion.section>

        {/* Experience Section */}
        {/* <motion.section
          ref={refs.experience}
          initial="hidden"
          animate={inView.experience ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-100 mb-16 justify-center">
            <IconBriefcase className="text-blue-400 h-8 w-8" />
            Professional Journey
          </h2>
          
          <div className="grid gap-12 max-w-4xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView.experience ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <exp.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">{exp.title}</h3>
                      <p className="text-sm text-purple-400/90">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Tech Stack Section */}
        <motion.section
          ref={refs.technologies}
          initial="hidden"
          animate={inView.technologies ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-100 mb-16 justify-center">
            <IconCode className="text-purple-400 h-8 w-8" />
            Technical Arsenal
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView.technologies ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: idx * 0.05 }}
                className="p-4 bg-gray-800 rounded-xl border border-gray-700/50 hover:border-blue-400/30 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          ref={refs.education}
          initial="hidden"
          animate={inView.education ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-100 mb-16 justify-center">
            <IconSchool className="text-purple-400 h-8 w-8" />
            Academic Foundation
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-700/50 rounded-lg">
                <IconSchool className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  B.Tech in Electronics and Communication Engineering
                </h3>
                <p className="text-purple-400/90 mt-1">IIIT Kota · 2022 – 2026</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          ref={refs.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={inView.cta ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/contact">
            <Button className="px-12 py-6 text-lg bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-blue-400/20 mb-12">
              Launch Your Next Project →
            </Button>
          </Link>
        </motion.div>

        {/* <Testimonials /> */}
      </div>
    </div>
  );
}

// const experiences = [
//   {
//     title: "Frontend Developer Intern - DhagaKart",
//     duration: "Feb - April 2025",
//     description: "Built a mobile-first e-commerce frontend with React.js and Tailwind CSS, boosting conversions, SEO traffic, and sales while delivering features ahead of schedule.",
//     icon: IconRocket
//   },
//   {
//     title: "Backend Developer Intern - GoodGutProject",
//     duration: "Dec 2024 - Feb 2025",
//     description: "Developed and deployed 20+ secure RESTful APIs with OAuth 2.0, role-based access control, and Swagger documentation for GGP’s mobile app.",
//     icon: IconCode
//   },
//   {
//     title: "President | IIITians Network",
//     duration: "May 2024 – Present",
//     description: "Spearheading a 14,500+ member network across 31 IIITs, driving cross-institutional collaborations and technical initiatives.",
//     icon: IconBriefcase
//   },
//   {
//     title: "Placement Cell Core Member",
//     duration: "2024 - 2026 (present)",
//     description: "Orchestrated campus recruitment programs resulting in 85% placement rate through strategic industry partnerships.",
//     icon: IconSchool
//   },
//   {
//     title: "Founding Lead - Alumni Cell",
//     duration: "2024-2025",
//     description: "Established alumni relations framework connecting 1000+ graduates with current student body through mentorship programs.",
//     icon: IconCode
//   },
//   {
//     title: "GDSC Core Team Member",
//     duration: "2023 - 2024",
//     description: "Led developer engagement initiatives reaching 500+ participants with Google Cloud & AI workshops.",
//     icon: IconRocket
//   },
// ];

const technologies = [
  "Python",
  "JavaScript (ES6+)",
  "React Ecosystem",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
  "Google Cloud",
  "Git & Github",
  "REST APIs",
  "C++"
  
 
];