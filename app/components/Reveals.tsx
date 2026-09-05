'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

type Props = React.PropsWithChildren<{
  initialX?: number
  initialY?: number
  duration?: number
  delay?: number
}>

const Reveals = ({ children, initialX = 0, initialY = 50, duration = 0.5, delay }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, x: 0, y: 0 })
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={controls}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveals
