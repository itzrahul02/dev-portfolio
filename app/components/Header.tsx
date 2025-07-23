'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, Rocket, Home, User, Folder, Mail, Code, Github, Cpu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Folder },
    { 
      name: 'Profiles', 
      icon: Code,
      subItems: [
        { name: 'LeetCode', href: 'https://leetcode.com/coderkaushik', icon: Cpu },
        { name: 'GitHub', href: 'https://github.com/coderkaushik', icon: Github }
      ]
    },
    { name: 'Contact', href: '#contact', icon: Mail }
  ]

  return (
    <header className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Rocket className="h-6 w-6 text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              HK
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.a
                  href={item.href || '#'}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                  <span>{item.name}</span>
                </motion.a>

                {/* Dropdown for Profiles */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                      >
                        <subItem.icon className="h-5 w-5 text-blue-400" />
                        <span>{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-gray-800/50"
            >
              <Menu className="h-6 w-6 text-gray-300" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href || '#'}
                  className="flex items-center gap-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-blue-400" />
                  <span>{item.name}</span>
                </a>

                {/* Mobile Subitems */}
                {item.subItems && (
                  <div className="pl-8 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 py-2 px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon className="h-5 w-5 text-blue-400" />
                        <span>{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  )
}