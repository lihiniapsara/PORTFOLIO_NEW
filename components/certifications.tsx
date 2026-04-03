'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const certifications = [
  {
    title: 'AI/ML Engineer Stage 1',
    issuer: 'SLIIT',
    year: '2025',
    category: 'AI/ML',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'SoloLearn',
    year: '2025',
    category: 'Database',
  },
  {
    title: 'Web Development',
    issuer: 'DP Education',
    year: '2024',
    category: 'Web',
    description: 'HTML, CSS, JavaScript, Figma',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    year: '2024',
    category: 'Design',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    year: '2024',
    category: 'Programming',
  },
  {
    title: 'AI for Social Impact',
    issuer: 'ADB Institute',
    year: '2024',
    category: 'AI',
  },
  {
    title: 'Professional English',
    issuer: 'NYSC',
    year: '2023',
    category: 'Language',
  },
  {
    title: 'General IT (GIT)',
    issuer: 'Exam Board',
    year: '2021',
    category: 'IT',
    grade: 'A Grade',
  },
]

const categoryColors = {
  'AI/ML': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  'Database': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  'Web': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  'Design': 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  'Programming': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
  'AI': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  'Language': 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
  'IT': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-foreground animate-fadeInUp">Certifications & Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:bg-card/80 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{cert.year}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge 
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default transform hover:-translate-y-1"
                >
                  {cert.category}
                </Badge>
                {cert.grade && (
                  <Badge 
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 cursor-default transform hover:-translate-y-1"
                  >
                    {cert.grade}
                  </Badge>
                )}
              </div>
              
              {cert.description && (
                <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border">
                  {cert.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
