import { SectionList } from "./section-list"

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"]
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"]
  },
  {
    category: "Machine Learning",
    items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"]
  }
]

export function SkillsSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-foreground">
        <span className="text-accent mr-2">*</span> skills
      </h2>
      <div className="space-y-8">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category}>
            <h3 className="text-lg font-semibold text-foreground mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full text-foreground opacity-80 border border-border hover:border-accent/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
