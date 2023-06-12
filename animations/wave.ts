import { Variants } from "framer-motion"

export const waveVariants = (delay: number): Variants => ({
  hidden: { opacity: 0.9 },
  visible: {
    opacity: [0.2, 1, 0.9],
    y: 10,
    transition: { duration: 0.75, times: [0, 0.8, 1], delay },
  },
  hover: { opacity: 1 },
  exit: { y: 0 },
})
