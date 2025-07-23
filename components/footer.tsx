"use client";

import { Github, Linkedin, Twitter, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  // Function to update the current time
  const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0"); // Ensure 2 digits
    const minutes = String(now.getMinutes()).padStart(2, "0"); // Ensure 2 digits
    setCurrentTime(`${hours}:${minutes}`);
  };

  // Update time every second
  useEffect(() => {
    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <footer className="border-t border-gray-800 bg-gray-900 backdrop-blur-md">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6 lg:px-8 mx-auto">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
        >
          <p className="text-center text-sm leading-loose text-gray-300 md:text-left">
            Built by <span className="text-blue-400">Rahul Sharma</span>
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              {
                icon: Github,
                href: "https://github.com/itzrahul02",
                label: "GitHub"
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/rahul-sharma-009922250",
                label: "LinkedIn"
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Current Time */}
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="h-5 w-5" />
            <p className="text-sm">{currentTime}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}