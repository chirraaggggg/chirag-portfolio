import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

const workItems: Item[] = [
  {
    title: "ethnus",
    role: "software engineer",
    period: "May 2025 - Jul 2025",
    description: "Full Stack Developer at Ethnus",
    href: "#",
  },
  {
    title: "GirlScript Summer of Code",
    role: "Contributor",
    // period: "May 2025 - Jul 2025",
    description: "Contributed to open-source projects",
    href: "#",
  },
  {
    title: "Hacktoberfest",
    role: "Contributor",
    // period: "May 2025 - Jul 2025",
    description: "Contributed to open-source projects",
    href: "#",
  },
]

const projectItems: Item[] = [
  {
    title: "Medical insurance cost prediction using ML",
    role: "Machine Learning Project",
    description: "Predicts medical insurance cost using ML",
    href: "https://github.com/chirraaggggg/Medical-Insurance-Cost-Prediction-Using-ML.git",
    period: "2023"
  },
  {
    title: "NAFLD Detection",
    role: "Machine Learning Project",
    description: "Non Alcoholic Fatty Liver Disease Detection using ML",
    href: "https://github.com/chirraaggggg/Nafld.git",
    period: "2023"
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList
        title="work"
        items={workItems}
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="https://github.com/chirraaggggg"
        viewAllText="all projects"
      />
      <SkillsSection />
      <ContactSection />
      <LinksSection />
    </>
  )
}
