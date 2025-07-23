'use client'

import { FAQs } from "@/components/faqs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from 'framer-motion'
import { IconSend, IconMessage, IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

import { FormEvent } from 'react';

export default function Contact() {

  interface EmailFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const sendEmail = (e: FormEvent<EmailForm>) => {
    e.preventDefault();

    emailjs.sendForm('service_vqa9crp', 'template_hk7fdjs', e.currentTarget, 'B1WOWuRA3I5R--Hjn')
      .then((result) => {
          console.log(result.text);
          toast.success('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 py-24">
      <Toaster />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Have a project in mind or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {[
            {
              icon: IconBrandGithub,
              href: "https://github.com/itzrahul02",
              label: "GitHub"
            },
            {
              icon: IconBrandLinkedin,
              href: "https://linkedin.com/in/rahul-sharma-009922250",
              label: "LinkedIn"
            },
            {
              icon: IconMail,
              href: "mailto:sharmarahul02514@gmail.com",
              label: "Email"
            }
          ].map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="group p-4 hover:bg-gray-800/50 transition-colors"
              asChild
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <social.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">{social.label}</span>
              </a>
            </Button>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          
          <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700/50 hover:border-gray-700 transition-colors">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="from_name"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="from_email"
                  type="email"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-gray-100 focus:border-blue-400 focus:ring-blue-400 min-h-[150px] resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold py-3 text-lg rounded-xl transition-all transform hover:scale-[1.02]"
              >
                <IconSend className="mr-2 h-5 w-5" />
                Launch Message
              </Button>
            </form>
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FAQs />
        </motion.div>
      </div>
    </div>
  )
}