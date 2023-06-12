"use client"

import { useEffect, useRef } from "react"
import {
  Variants,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion"

const swirlPath =
  "M128.805 75.235C116.805 66.335 111.705 53.835 108.705 40.235C107.005 32.635 106.205 24.935 107.205 17.135C107.605 13.835 108.205 10.635 109.605 7.63501C110.505 5.83501 111.505 4.13501 112.905 2.63501C115.505 -0.164989 119.105 -0.664986 122.605 0.935014C124.805 1.93501 126.605 3.63501 128.105 5.43501C130.705 8.63501 132.605 12.235 134.105 16.035C138.105 26.035 139.405 36.535 139.205 47.335C139.005 54.535 138.205 61.735 136.705 68.735C136.605 69.235 136.605 69.635 136.505 70.235C139.305 71.635 142.305 71.935 145.405 72.035C158.305 72.635 170.905 70.735 183.105 66.535C187.105 65.135 191.005 63.535 194.805 61.635C202.205 58.135 208.505 53.035 213.505 46.635C214.405 45.535 215.305 44.435 216.305 43.335C216.405 43.235 216.605 43.235 217.105 43.235C216.905 43.935 216.805 44.435 216.605 44.935C212.705 53.235 207.005 59.935 199.405 65.135C189.905 71.535 179.405 75.535 168.305 77.735C159.205 79.535 150.105 80.335 140.905 79.235C138.905 79.035 136.805 78.535 134.605 78.135C134.405 78.635 134.205 79.235 134.005 79.835C131.305 88.935 128.105 97.735 123.505 106.035C119.805 112.735 115.505 118.935 110.005 124.335C107.005 127.235 103.705 129.835 100.005 131.735C90.505 136.535 81.8049 135.035 74.6049 127.235C74.2049 126.835 73.8049 126.435 73.2049 125.835C72.8049 126.935 72.505 127.735 72.1049 128.635C69.505 135.835 66.6049 142.935 62.905 149.735C59.705 155.535 56.005 161.035 51.205 165.735C48.905 168.035 46.405 169.935 43.505 171.435C36.505 174.935 29.8049 174.435 23.4049 169.835C22.2049 169.035 21.2049 168.035 19.9049 167.035C19.5049 168.135 19.2049 168.935 18.9049 169.835C16.2049 177.835 12.905 185.735 8.80495 193.135C7.80495 195.035 6.60495 196.835 5.30495 198.535C4.70495 199.435 3.70495 200.035 2.80495 200.735C2.00495 201.235 1.10495 201.235 0.40495 200.435C-0.29505 199.635 0.0049507 198.835 0.60495 198.035C1.80495 196.335 2.90495 194.535 3.90495 192.735C8.90495 183.635 12.705 174.035 15.805 164.235C16.1049 163.335 16.305 162.435 15.605 161.535C9.10495 152.335 5.70495 141.935 3.60495 130.935C0.60495 115.635 0.00495064 100.135 1.80495 84.635C2.40495 79.335 3.40495 74.235 5.60495 69.335C6.40495 67.535 7.40495 65.735 8.60495 64.235C11.605 60.535 15.7049 60.335 19.3049 63.535C21.5049 65.535 23.0049 67.935 24.205 70.635C26.705 75.835 28.1049 81.435 29.0049 87.135C30.8049 98.035 30.805 108.935 29.705 119.935C28.405 133.335 25.805 146.535 22.205 159.435C21.805 160.935 21.805 162.035 23.1049 163.035C24.705 164.335 26.2049 165.835 27.9049 166.935C31.7049 169.335 35.705 169.535 39.805 167.735C42.6049 166.535 44.905 164.735 47.005 162.635C50.705 159.135 53.6049 155.035 56.305 150.735C61.9049 141.535 66.005 131.635 69.405 121.435C69.705 120.535 69.805 119.835 69.305 118.935C64.805 109.835 62.805 100.035 61.805 90.035C60.705 79.235 60.805 68.435 62.6049 57.735C63.305 53.635 64.205 49.535 65.905 45.735C66.6049 44.135 67.505 42.535 68.6049 41.235C71.3049 38.035 75.1049 38.135 77.6049 41.435C78.8049 43.035 79.705 44.835 80.405 46.735C82.305 52.035 82.905 57.635 83.305 63.235C84.305 81.135 81.305 98.635 76.305 115.735C76.105 116.335 76.005 116.935 75.7049 117.535C75.3049 118.535 75.505 119.435 76.1049 120.235C77.505 122.035 78.805 124.035 80.505 125.535C84.405 129.235 89.1049 130.135 94.1049 128.135C96.7049 127.135 99.2049 125.535 101.505 123.835C105.505 120.835 108.705 117.035 111.605 113.035C117.705 104.635 122.005 95.235 125.405 85.435C126.605 82.335 127.605 78.835 128.805 75.235ZM18.0049 156.335C18.3049 155.735 18.4049 155.535 18.5049 155.235C18.705 154.735 18.8049 154.135 19.0049 153.635C22.705 140.535 25.205 127.135 26.0049 113.535C26.6049 103.635 26.405 93.735 24.205 83.935C23.205 79.535 22.1049 75.235 19.9049 71.235C18.9049 69.535 17.7049 67.935 16.3049 66.535C15.0049 65.235 13.505 65.335 12.405 66.935C11.405 68.335 10.505 69.935 9.90495 71.535C7.70495 77.035 6.90495 82.835 6.40495 88.735C5.40495 101.635 6.10495 114.435 8.30495 127.235C9.90495 136.335 12.2049 145.235 16.4049 153.535C16.9049 154.235 17.3049 155.135 18.0049 156.335ZM130.605 66.735C130.905 65.535 131.105 64.735 131.205 64.035C131.605 61.235 132.105 58.535 132.405 55.735C133.505 45.635 133.205 35.635 130.705 25.735C129.405 20.635 127.605 15.835 124.705 11.435C123.605 9.83501 122.305 8.43501 120.905 7.13501C119.005 5.53501 117.705 5.93502 116.405 8.03502C115.905 8.83502 115.505 9.73501 115.305 10.635C114.805 12.935 114.205 15.335 114.005 17.735C113.305 26.435 114.505 34.935 116.905 43.335C119.005 50.535 122.105 57.235 127.005 63.035C128.005 64.235 129.205 65.335 130.605 66.735ZM73.505 44.535C73.305 44.535 73.005 44.535 72.805 44.635C72.305 45.535 71.6049 46.335 71.2049 47.235C70.505 49.135 69.7049 51.135 69.2049 53.135C66.8049 62.735 66.405 72.535 66.905 82.435C67.305 91.435 68.505 100.435 71.1049 109.135C71.3049 109.835 71.6049 110.535 71.905 111.235C72.505 110.435 72.905 109.635 73.005 108.835C74.2049 102.935 75.7049 97.135 76.6049 91.235C78.405 80.535 79.005 69.735 77.7049 59.035C77.3049 55.435 76.305 51.835 75.305 48.335C75.105 46.935 74.2049 45.735 73.505 44.535Z"

const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
}

export const MotionSwirlIcon = (props: any) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const controls = useAnimationControls()

  // useEffect(() => {
  //   const sequence = async () => {
  //     await controls.start({
  //       fill: "var(--foreground)",
  //       opacity: 1,
  //       pathLength: 1,
  //       transition: {
  //         duration: 5,
  //       },
  //     })
  //   }

  //   if (!inView) return
  //   sequence()
  // }, [inView, controls])

  return (
    <motion.svg
      ref={ref}
      width="218"
      height="202"
      viewBox="0 0 218 202"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_22_680)">
        <motion.path className="fill-foreground" d={swirlPath} />
      </g>
      <defs>
        <clipPath id="clip0_22_680">
          <rect width="218" height="202" fill="#69f" />
        </clipPath>
      </defs>
    </motion.svg>
  )
}
