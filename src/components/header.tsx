import { ScrambleText } from "@/components/scramble-text"
import {
  MapPin,
  Building2,
  FileText,
  Send,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Pin,
  X,
  Mail,
} from "lucide-react"
import Link from "next/link"

export function Header() {
  const socials = [
    { title: "X", href: "https://x.com/nexxeln", Icon: X },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/shoubhit-dash", Icon: Linkedin },
    { title: "GitHub", href: "https://github.com/nexxeln", Icon: Github },
    { title: "YouTube", href: "https://youtube.com", Icon: Youtube },
    { title: "Instagram", href: "https://instagram.com", Icon: Instagram },
    { title: "Pinterest", href: "https://pinterest.com", Icon: Pin },
    { title: "Email", href: "mailto:hey@nexxel.dev", Icon: Mail },
  ]

  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-foreground">
        <span className="inline-block">
          <ScrambleText text="chirag sharma" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          gurgaon, india
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          computer science student @ vellore institute of technology
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up text-foreground/90">
        i&apos;m a 20 y/o cs undergrad student. i love building things and
        solving problems. i enjoy language design, theoretical computer science
        and i live on the terminal. if i&apos;m not coding, i&apos;m probably
        doing cardistry, watching movies or obsessing over mechanical keyboards.
      </p>
      
      {/* Action Buttons */}
      <div className="flex flex-col gap-6 mt-8 animate-fade-in-up">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-base font-medium text-white bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Resume / CV
          </a>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-base font-medium text-gray-900 bg-white border border-neutral-200 shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.25)] transition-all duration-300"
          >
            <Send className="w-4 h-4" />
            Get in touch
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
          {socials.map(({ title, href, Icon }) => (
            <Link
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[rgba(255,255,255,0.04)] text-[#9ba0ae] transition-all duration-300 hover:border-white/60 hover:text-white/90 hover:bg-[rgba(255,255,255,0.08)]"
            >
              <Icon className="h-4.5 w-4.5" aria-label={title} />
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
