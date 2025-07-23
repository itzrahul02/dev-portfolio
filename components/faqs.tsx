"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconHelp, IconQuestionMark } from '@tabler/icons-react';

const faqsData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. I'm also experienced with database systems like MongoDB and PostgreSQL, and cloud platforms such as AWS and Google Cloud.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I'm open to freelance opportunities. I enjoy working on diverse projects that challenge me and allow me to apply my skills in new ways. Feel free to contact me with project details.",
  },
  {
    question: "How do you approach project management and communication?",
    answer:
      "I believe in clear, consistent communication throughout the project lifecycle. I use tools like Trello or Jira for project management, and I provide regular updates via email or video calls, depending on the client's preference.",
  },
  {
    question: "Can you work with existing codebases or teams?",
    answer:
      "Absolutely. I have experience joining existing projects and teams. I'm adept at quickly understanding codebases, following established coding standards, and collaborating effectively with team members.",
  },
  {
    question: "What's your process for ensuring code quality and testing?",
    answer:
      "I'm a strong advocate for clean, maintainable code. I use linters and follow best practices for code style. For testing, I implement unit tests using frameworks like Jest, and I'm experienced with integration and end-to-end testing as well.",
  },
];

export function FAQs() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3">
          <IconHelp className="h-8 w-8 text-blue-400" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="mt-4 text-xl text-gray-300">
          Quick answers to common questions
        </p>
      </motion.div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqsData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              <AccordionItem
                value={`item-${index}`}
                className="relative bg-gray-800 border border-gray-700/50 hover:border-gray-700 rounded-2xl transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <div className="flex items-center gap-3">
                    <IconQuestionMark className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-lg font-medium text-gray-100">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}