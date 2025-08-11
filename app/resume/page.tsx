'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { IconBriefcase, IconFileDownload, IconUser, IconCertificate } from '@tabler/icons-react'

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Explore my career trajectory and technical expertise
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <Card className="relative bg-gray-800 border border-gray-700/50 hover:border-gray-700 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <IconUser className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Rahul Sharma
                  </h2>
                  <p className="text-purple-400/90">Full Stack Developer & Community Leader</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Passionate Computer Science student at IIIT Kota with expertise in building scalable applications and leading technical communities. Proficient in modern web technologies and passionate about creating impactful solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C++', 'JavaScript', 'React.js', 'TailwindCSS', 'Node.js', 'MongoDB','ExpressJs'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <Card className="relative bg-gray-800 border border-gray-700/50 hover:border-gray-700 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  <IconBriefcase className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-100">
                    Leadership & Experience
                  </h2>
                  <p className="text-purple-400/90">Key positions and responsibilities</p>
                </div>
              </div>
              
              {/* <div className="space-y-6">
                {[
                  {
                    title: "Frontend Developer Intern - DhagaKart",
                    duration: "Feb - April 2025",
                    description: "Built a mobile-first e-commerce frontend with React.js and Tailwind CSS, boosting conversions, SEO traffic, and sales while delivering features ahead of schedule."
                  },
                  {
                    title: "Backend Developer Intern - GoodGutProject",
                    duration: "Dec 2024 - Feb 2025",
                    description: "Developed and deployed 20+ secure RESTful APIs with OAuth 2.0, role-based access control, and Swagger documentation for GGP’s mobile app."
                  },
                  {
                    title: "President — IIITians Network",
                    duration: "2024-2025",
                    description: "Leading 14,500+ students across 31 IIITs, enhancing engagement through inter-college contests and technical initiatives"
                  },
                  {
                    title: "Google Developer Student Clubs — Core Team",
                    duration: "2023-2024",
                    description: "Organized 10+ events including Gen AI Study Jams and Google Cloud Study Jams"
                  },
                  {
                    title: "Placement Coordinator",
                    duration: "2024-present",
                    description: "Managing placement outreach and HR engagement for better opportunities"
                  },
                  {
                    title: "Founding Lead - Alumni Cell",
                    duration: "2024-present",
                    description: "Established Alumni Cell and developed alumni portal for IIIT Kota"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-blue-400/20 pl-4">
                    <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                    <p className="text-sm text-purple-400/90 mb-2">{item.duration}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div> */}
            </CardContent>
          </Card>
        </motion.div>

        {/* PDF Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <Card className="relative bg-gray-800 border border-gray-700/50 hover:border-gray-700 transition-colors">
            <CardContent className="p-0">
              <iframe
                src="https://drive.google.com/file/d/1NWMYgCjMcYFGVUE31WjJZDQFOsX4AbKS/view?usp=drivesdk"
                className="w-full h-[600px] border-none rounded-lg"
                title="Resume Preview"
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <Button
            asChild
            className="px-8 py-4 text-lg bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-blue-400/20"
          >
            <a
              href="https://drive.google.com/file/d/1NWMYgCjMcYFGVUE31WjJZDQFOsX4AbKS/view?usp=drivesdk"
              download
              className="flex items-center gap-2"
            >
              <IconFileDownload className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}