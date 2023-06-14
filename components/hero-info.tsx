"use client"

import { useEffect } from "react"
import { appearVariants } from "@/animations/appear"
import { liftVariants } from "@/animations/lift"
import { Variants, motion, useAnimationControls } from "framer-motion"

import { siteConfig } from "@/config/site"

import { Typewriter } from "./typewriter/typewriter"
import { buttonVariants } from "./ui/button"

export const HeroInfo = () => {
  const subControls = useAnimationControls()

  const variants: Variants = {
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 2,
      },
    },
    hiddenVertical: {
      flex: "0 0 0",
    },

    revealVertical: {
      flex: "0 0 auto",
      transition: {
        duration: 0.75,
        delay: 1,
        ease: "easeIn",
      },
    },
    typeWriter: {},
  }

  useEffect(() => {
    const sequence = async () => {
      await subControls.start("visible")
    }

    sequence()
  }, [subControls])

  return (
    <div className="container flex h-full select-none flex-col items-center justify-center gap-8 self-center overflow-hidden text-center">
      <motion.p
        {...{ variants }}
        initial="invisible"
        animate="visible"
        className="max-w-[700px] text-base text-muted-foreground"
      >
        A Fullstack Engineer specialising in frontend and
      </motion.p>
      <Typewriter
        content={[
          { text: "crafting " },
          { text: "exceptional", emphasis: true },
          { text: " web experiences" },
          { text: ".", emphasis: true },
        ]}
      />
      <motion.div
        variants={appearVariants}
        initial="hidden"
        animate={subControls}
        className="flex flex-col items-center justify-start gap-8 overflow-hidden"
      >
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hey, my name is James! I’ve been having an awesome experience working
          with web technologies for the past 5 years.
        </p>
        <motion.a
          href={siteConfig.links.heroCta}
          rel="noreferrer"
          draggable={false}
          className={buttonVariants({ size: "lg" })}
          variants={liftVariants}
          initial="dropped"
          whileHover="lifted"
          whileTap="dropped"
        >
          Check out some of my Projects
        </motion.a>
      </motion.div>
    </div>
  )
}
