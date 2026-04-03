'use client'

import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Smart Clinic System',
    description: 'Scalable healthcare management system using microservices architecture with Next.js frontend, Spring Boot backend, and GCP deployment.',
    tags: ['Next.js', 'Spring Boot', 'MySQL', 'MongoDB', 'PostgreSQL', 'GCP'],
    features: ['Appointment Booking', 'Patient Management', 'Authentication'],
    links: {
      github: 'https://github.com/lihiniapsara/smart-clinic-services',
    },
  },
  {
    title: 'Book Management System',
    description: 'Full-stack library management application with complete CRUD operations and JWT authentication system.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: ['CRUD Operations', 'Lending System', 'JWT Auth'],
    links: {
      github: 'https://github.com/lihiniapsara',
    },
  },
  {
    title: 'ASIRI Activation System',
    description: 'Enterprise-level web application for hospital digital activation system with secure authentication and real-time features.',
    tags: ['React', 'TypeScript', 'Firebase'],
    features: ['Authentication', 'Real-time Communication', 'Scalable Architecture'],
    links: {
      github: 'https://github.com/lihiniapsara',
    },
  },
  {
    title: 'Blood Donation Management System',
    description: 'Backend system for managing blood donation operations with blood compatibility checking logic.',
    tags: ['Spring Boot', 'Java', 'MySQL'],
    features: ['Donor Management', 'Inventory System', 'Analytics APIs'],
    links: {
      github: 'https://github.com/lihiniapsara',
    },
  },
  {
    title: 'Daily Reflection App',
    description: 'Cross-platform mental wellness mobile application for journaling and mood tracking.',
    tags: ['React Native', 'TypeScript', 'Expo'],
    features: ['Journaling', 'Mood Tracking', 'Goal Setting', 'iOS + Android'],
    links: {
      github: 'https://github.com/lihiniapsara',
    },
  },
  {
    title: 'Task Management System',
    description: 'Go-based task management API with efficient backend architecture and RESTful endpoints.',
    tags: ['Go', 'REST API'],
    features: ['Task Management', 'RESTful API', 'Efficient Performance'],
    links: {
      github: 'https://github.com/lihiniapsara/go-task-manager',
    },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">CREATIVE WORK</p>
          <h2 className="text-6xl lg:text-7xl font-black text-foreground">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group h-full flex flex-col border-2 border-foreground/20 bg-background hover:border-primary hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-8 flex flex-col h-full group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-foreground/10 text-foreground border border-foreground/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default font-semibold"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.features && (
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
