'use client'

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  
  // Blur effect: starts at 8px, increases to 32px on scroll for dramatic effect
  const blur = useTransform(scrollY, [0, 150], [8, 32], { clamp: true })
  const opacity = useTransform(scrollY, [0, 150], [0.6, 0.85], { clamp: true })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav 
      style={{ 
        backdropFilter: `blur(${blur}px) saturate(200%)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(200%)`,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div 
        style={{ opacity: opacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/40 to-white/10 dark:from-white/10 dark:via-white/5 dark:to-black/40 border-b border-white/40 dark:border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
      />
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and navigation items */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center overflow-hidden">
                <Image
                  src="/nexxel.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {['Work', 'Blogs', 'Projects'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground opacity-80 hover:opacity-100 transition-opacity"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}