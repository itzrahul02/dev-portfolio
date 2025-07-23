"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Partik Malasi",
    role: "SWE Intern, Cyble (YC 21)",
    content:
      "Hiteshwar is a great developer with a zeal to excel in latest technologies, an amiable fellow and a quick learner",
  },
  {
    name: "Rohan Saini",
    role: "Technical Secretary, CACS IIIT Kota",
    content:
      "Hiteshwar is a nice guy and he is always ready to help others. He never says no to help, and he is very kind and reliable",
  },
  {
    name: "Lakshay Dhall",
    role: "General Secretary, E-Cell IIIT Una",
    content:
      "Working with Hiteshwar has been a game-changer for our me. His attention to detail and creativity are unmatched.  I've never met a web developer who truly cares about their clients' success like he does.",
  },
  {
    name: "Anushka Chauhan",
    role: "Student, IIT BHU",
    content:
      "He is an exemplary developer, always eager to learn new skills. He is very hardworking and always committed to continuous improvement. He is dedicated to his work and is a quick learner.",
  },
  {
    name: "Himanshu Rautela",
    role: "Student, IIIT Kota",
    content:
      "Hiteshwar is an amazing guy, always keen to learn",
  },
  {
    name: "Yogit Nainani",
    role: "Business Analyst Intern, Meesho",
    content:
      "I've known Hiteshwar since before he started college, and his dedication and work ethic have always been impressive. He's not only highly organized and punctual, but also possesses exceptional leadership qualities. Throughout his academic career, he's consistently demonstrated a drive to excel, placing him at the forefront of his peers.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-primary">
        What People Say
      </h2>
      <Card className="shadow-lg">
        <CardContent className="pt-8">
          <div className="relative h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full"
              >
                <p className="text-xl mb-6 text-center italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <p className="text-lg font-semibold text-center">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-muted-foreground text-center">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}