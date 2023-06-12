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
      className="absolute right-8 top-8"
      animate={{
        top: 32 + getRandomPosition(),
        right: 32 + getRandomPosition(),
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.pill />
    </motion.div>
    <motion.div
      className="absolute left-8 top-8"
      animate={{
        top: 32 + getRandomPosition(),
        left: 32 + getRandomPosition(),
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.scratch />
    </motion.div>
    <motion.div
      className="absolute bottom-8 right-8"
      animate={{
        bottom: 32 + getRandomPosition(),
        right: 32 + getRandomPosition(),
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.squiggle />
    </motion.div>
    <motion.div
      className="absolute bottom-8 left-8"
      animate={{
        bottom: 32 + getRandomPosition(),
        left: 32 + getRandomPosition(),
      }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <Icons.star />
    </motion.div>
  </>
)
