"use client"

import { motion } from "framer-motion"

import { Icons } from "./icons"

const minPerimeter = 4
const maxPerimeter = 16

const getRandomPosition = () => {
  return Math.random() * (2 * maxPerimeter - 2 * minPerimeter) + minPerimeter
}

export const HeroIcons = () => (
  <>
    <motion.div
      className="absolute right-4 top-4 sm:right-8 sm:top-8"
      // animate={{
      //   top: 32 + getRandomPosition(),
      //   right: 32 + getRandomPosition(),
      // }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.pill className="h-16 md:h-24 lg:h-28" />
    </motion.div>
    <motion.div
      className="absolute left-4 top-4 sm:left-8 sm:top-8"
      // animate={{
      //   top: 32 + getRandomPosition(),
      //   left: 32 + getRandomPosition(),
      // }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.scratch className="h-16 md:h-24 lg:h-28" />
    </motion.div>
    <motion.div
      className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8"
      // animate={{
      //   bottom: 32 + getRandomPosition(),
      //   right: 32 + getRandomPosition(),
      // }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.squiggle className="h-16 md:h-24 lg:h-28" />
    </motion.div>
    <motion.div
      className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8"
      // animate={{
      //   bottom: 32 + getRandomPosition(),
      //   left: 32 + getRandomPosition(),
      // }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.star className="h-11 lg:h-12" />
    </motion.div>
  </>
)
