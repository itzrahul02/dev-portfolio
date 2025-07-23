'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IconRocket, IconCode, IconStars } from '@tabler/icons-react'

const projects = [
  {
    title: 'Burger Site',
    description: 'A full stack burger ordering application based on MERN + Razorpay tech stack!.',
    technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Stripe', 'NodeMailer', 'Material UI', 'TailwindCSS'],
    deployedUrl: 'https://burgers-jlne.vercel.app/',
    icon: IconRocket
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Interactive, Modular and Responsive web portfolio.',
    technologies: ['Next.js', 'Three.js', 'Tailwind', 'ShadCN', 'Email.js', 'TypeScript'],
    deployedUrl: 'https://rahul-portfolio-sooty.vercel.app/',
    icon: IconCode
  },
  {
    title: 'Clutch Gaming Website',
    description: 'A full stack gaming website for the Clutch Gaming community to take registrations for tournaments.',
    technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Material UI', 'TailwindCSS'],
    deployedUrl: 'https://clutchiiitk.vercel.app',
    icon: IconRocket
  },
  
]

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Cosmic Creations
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my interstellar projects that push the boundaries of web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              <Card className="relative bg-gray-800 border border-gray-700/50 hover:border-gray-700 transition-colors h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-700/50 rounded-lg">
                      <project.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-100">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-gray-400">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        className="bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-gray-600/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <a href={project.deployedUrl} target='_blank' className="text-blue-400 hover:text-purple-400 transition-colors">
                    Check it out
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg">
            Ready to launch your next project?{' '}
            <a href="/contact" className="text-blue-400 hover:text-purple-400 transition-colors">
              Let's build something stellar →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
