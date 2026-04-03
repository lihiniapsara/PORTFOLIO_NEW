'use client'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Go (Golang)', 'RESTful APIs', 'Microservices'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firestore'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Google Cloud Platform', 'VM Instances', 'Load Balancing', 'Docker', 'Git/GitHub'],
  },
  {
    title: 'Tools & Others',
    skills: ['VS Code', 'IntelliJ IDEA', 'Postman', 'Figma', 'GitHub', 'Expo'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">EXPERTISE</p>
          <h2 className="text-6xl lg:text-7xl font-black text-foreground">Skills & Tech</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="border-2 border-foreground/20 bg-background p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-black text-foreground mb-6 group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-foreground/5 text-foreground border border-foreground/20 text-xs font-bold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-12 border-2 border-primary/40 bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-black text-foreground mb-6 group-hover:text-primary transition-colors duration-300">Architecture & Design Patterns</h3>
          <p className="text-muted-foreground leading-relaxed">
            Strong foundation in Object-Oriented Programming (OOP), MVC architecture, Layered Architecture, and Design Patterns. Experience with microservices architecture, cloud deployment, and building scalable systems.
          </p>
        </div>
      </div>
    </section>
  )
}
