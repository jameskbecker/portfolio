import { Variants } from "framer-motion"

export const appearVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
}
