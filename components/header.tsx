"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Rocket, Home, User, Folder, Mail, Code, Github, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navItems = [
    { name: 'About', href: '/about', icon: User },
    { name: 'Resume', href: '/resume', icon: Folder },
    { name: 'Projects', href: '/projects', icon: Code },
    { 
      name: 'Profiles', 
      icon: Code,
      subItems: [
        { name: 'LeetCode', href: '/leetcode', icon: Cpu },
        { name: 'GitHub', href: '/github', icon: Github }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Mail }
  ]

  return (
    <header className="bg-gray-900 backdrop-blur-md border-b border-gray-800 py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between px-4 md:px-6 lg:px-8 mx-auto">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Rocket className="h-6 w-6 text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rahul
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subItems ? (
                <>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <item.icon className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                    <span>{item.name}</span>
                  </Button>

                  {/* Dropdown for Profiles */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                      >
                        <subItem.icon className="h-5 w-5 text-blue-400" />
                        <span>{subItem.name}</span>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href}>
                  <Button variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <item.icon className="h-5 w-5 text-blue-400 group-hover:text-purple-400 transition-colors" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50">
                <Menu className="h-6 w-6 text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-l border-gray-800">
              <nav className="flex flex-col space-y-2 mt-6">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <>
                        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                          <item.icon className="h-5 w-5 text-blue-400 mr-2" />
                          <span>{item.name}</span>
                        </Button>

                        {/* Mobile Subitems */}
                        <div className="pl-8 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                            >
                              <subItem.icon className="h-5 w-5 text-blue-400" />
                              <span>{subItem.name}</span>
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link href={item.href}>
                        <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                          <item.icon className="h-5 w-5 text-blue-400 mr-2" />
                          <span>{item.name}</span>
                        </Button>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}