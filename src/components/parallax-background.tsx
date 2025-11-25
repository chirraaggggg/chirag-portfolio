"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollY } = useScroll()

  const layerSlow = useTransform(scrollY, [0, 1200], [0, -180])
  const layerMid = useTransform(scrollY, [0, 1200], [0, -120])
  const layerFast = useTransform(scrollY, [0, 1200], [0, -60])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.9),_transparent_60%)]"
      aria-hidden="true"
    >
      <motion.div
        style={{
          y: layerSlow,
          background: "radial-gradient(circle, rgba(255,107,53,0.35) 0%, transparent 70%)",
        }}
        className="absolute -top-32 left-[8%] w-[32rem] h-[32rem] blur-3xl opacity-60 mix-blend-screen dark:mix-blend-color-dodge"
      />
      <motion.div
        style={{
          y: layerMid,
          background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)",
        }}
        className="absolute top-24 right-[5%] w-[26rem] h-[26rem] blur-2xl opacity-50 mix-blend-screen dark:mix-blend-color-dodge"
      />
      <motion.div
        style={{
          y: layerFast,
          background: "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[60rem] h-72 blur-3xl opacity-40"
      />
    </div>
  )
}

