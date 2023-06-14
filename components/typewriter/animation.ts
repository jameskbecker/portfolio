import { Variants } from "framer-motion"

export const revealVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
  },
}

export const typingVariants: Variants = {
  active: {
    borderRight: [
      "4px solid var(--secondary-foreground)",
      "4px solid transparent",
      "4px solid var(--secondary-foreground)",
    ],
    transition: {
      duration: 0.75,
      times: [0, 0.45, 1],
      repeat: Infinity,
    },
  },
}
