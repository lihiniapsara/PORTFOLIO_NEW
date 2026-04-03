'use client'

import { Card } from '@/components/ui/card'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground animate-fadeInUp">Experience</h2>

        <Card className="border border-border bg-background p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:bg-background/80 transition-all duration-300 animate-fadeInUp group">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Software Engineering Intern</h3>
              <p className="text-lg text-primary font-semibold mt-1">Gamage Recruiters</p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap">2025 – Present</span>
          </div>

          <ul className="space-y-3 text-muted-foreground leading-relaxed">
            <li className="flex gap-3 group/item hover:text-foreground transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <span className="text-primary font-bold mt-1 group-hover/item:scale-125 transition-transform">•</span>
              <span>Assisted in developing and maintaining web-based systems using modern technologies</span>
            </li>
            <li className="flex gap-3 group/item hover:text-foreground transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.15s' }}>
              <span className="text-primary font-bold mt-1 group-hover/item:scale-125 transition-transform">•</span>
              <span>Worked on frontend &amp; backend feature development with React and Node.js</span>
            </li>
            <li className="flex gap-3 group/item hover:text-foreground transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <span className="text-primary font-bold mt-1 group-hover/item:scale-125 transition-transform">•</span>
              <span>API integration, debugging, and performance improvements across the stack</span>
            </li>
            <li className="flex gap-3 group/item hover:text-foreground transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.25s' }}>
              <span className="text-primary font-bold mt-1 group-hover/item:scale-125 transition-transform">•</span>
              <span>Collaborative development using Git workflows and code reviews</span>
            </li>
            <li className="flex gap-3 group/item hover:text-foreground transition-colors duration-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <span className="text-primary font-bold mt-1 group-hover/item:scale-125 transition-transform">•</span>
              <span>Participated in testing strategies and deployment processes</span>
            </li>
          </ul>
        </Card>

        {/* Education Section */}
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Education</h3>
          
          <Card className="border border-border bg-background p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 animate-fadeInUp group" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 group-hover:translate-x-2 transition-transform duration-300">
              <div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">GDSE - Global Diploma in Software Engineering</h4>
                <p className="text-primary font-semibold mt-1">IJSE – Institute of Software Engineering</p>
                <p className="text-sm text-muted-foreground mt-2">Comprehensive full-stack development curriculum covering modern technologies and best practices</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
