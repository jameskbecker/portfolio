import { Variants } from "framer-motion"

export const revealVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
  },
}

export const typingVariants: Variants = {
  active: {
    opacity: [0, 100, 0],
    transition: {
      duration: 0.75,
      times: [0, 0.45, 1],
      repeat: Infinity,
    },
  },
}
