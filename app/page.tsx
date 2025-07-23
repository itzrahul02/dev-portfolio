"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconRocket, IconCode, IconMessage } from '@tabler/icons-react';

// Dynamically import the 3D background component to avoid SSR issues
const SpaceBackground = dynamic(() => import("@/components/space-background"), {
  ssr: false,
});

export default function Home() {
  const avatarRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);

  const isAvatarInView = useInView(avatarRef, { once: true });
  const isHeadingInView = useInView(headingRef, { once: true });
  const isDescriptionInView = useInView(descriptionRef, { once: true });
  const isButtonsInView = useInView(buttonsRef, { once: true });

  return (
    <div className="relative flex flex-col bg-slate-900 items-center justify-center min-h-screen overflow-hidden">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <SpaceBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Avatar */}
        <motion.div
          ref={avatarRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isAvatarInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
          <Image
            src="/profile_picture.png"
            alt="Rahul Sharma"
            fill
            className="object-cover z-10"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Rahul Sharma
        </motion.h1>

        {/* Description */}
        <motion.div
          ref={descriptionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isDescriptionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-[90%] sm:max-w-[700px] text-xl text-gray-300"
        >
          <div className="flex items-center justify-center gap-2">
            <IconCode className="h-6 w-6 text-purple-400" />
            <p>
              Full Stack Developer specializing in modern web technologies
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/projects">
            <Button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-gray-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl hover:shadow-blue-400/20">
              <IconRocket className="mr-2 h-5 w-5" />
              Explore Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-8 py-4 text-lg border hover:border-gray-700/50 border-gray-700 hover:text-gray-300 font-bold rounded-2xl transition-all transform hover:scale-[1.02] shadow-sm shadow-gray-700/20"
            >
              <IconMessage className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}