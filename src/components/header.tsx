import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2, FileText, Send } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="chirag sharma" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          gurgaon, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          computer science student @ vellore institute of technology
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a 20 y/o cs undergrad student. i love building things and
        solving problems. i enjoy language design, theoretical computer science
        and i live on the terminal. if i&apos;m not coding, i&apos;m probably
        doing cardistry, watching movies or obsessing over mechanical keyboards.
      </p>
      
      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-6 animate-fade-in-up">
        {/* Resume / CV Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700/50 text-white hover:bg-gray-800/80 hover:border-gray-700 transition-all duration-300 shadow-lg text-sm"
        >
          <FileText className="w-3 h-3" />
          <span className="font-medium">Resume / CV</span>
        </a>

        {/* Get in touch Button */}
        <Link
          href="/#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200/90 border border-gray-300/50 text-gray-900 hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 shadow-lg text-sm"
        >
          <Send className="w-3 h-3" />
          <span className="font-medium">Get in touch</span>
        </Link>
      </div>
    </header>
  )
}
