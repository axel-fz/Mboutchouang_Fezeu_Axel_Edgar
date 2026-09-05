"use client"
import { useMotionTemplate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useCallback } from 'react'   // ← added useCallback
import Image from "next/image"                                   // ← import Image
import Reveals from "../Reveals"

type Props = {
  icon: string
  name: string
}

const Skill = ({ icon, name }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const xDistance = useMotionValue(0)
  const yDistance = useMotionValue(0)
  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`

  // Wrap handler in useCallback to stabilise it
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return
    const clientRect = ref.current.getBoundingClientRect()
    xDistance.set(e.x - clientRect.x)
    yDistance.set(e.y - clientRect.y)
  }, [xDistance, yDistance])   // xDistance and yDistance are stable (motion values)

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])   // now handleMouseMove is stable

  return (
    <Reveals duration={1.5}>
      <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
        <motion.div
          ref={ref}
          className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
          style={{
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        ></motion.div>
        {/* === REPLACE <img> WITH <Image> === */}
        <Image
          src={icon}
          alt={`${name} icon`}
          width={24}    // adjust to your icon size
          height={24}   // adjust to your icon size
          className="object-contain"
        />
        <p className="text-lg">{name}</p>
      </div>
    </Reveals>
  )
}

export default Skill