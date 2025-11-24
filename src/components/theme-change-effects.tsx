"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

const WRAPPER_ID = "page-wrapper"
const TRANSITION_CLASS = "theme-transition"
const TRANSITION_DURATION = 600

export function ThemeChangeEffects() {
  const { resolvedTheme } = useTheme()
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    const wrapper = document.getElementById(WRAPPER_ID)
    if (!wrapper) return

    wrapper.classList.add(TRANSITION_CLASS)
    const timeout = window.setTimeout(() => {
      wrapper.classList.remove(TRANSITION_CLASS)
    }, TRANSITION_DURATION)

    return () => window.clearTimeout(timeout)
  }, [resolvedTheme])

  return null
}

