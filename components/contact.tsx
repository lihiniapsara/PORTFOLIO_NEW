'use client'

import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card/50 relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-foreground animate-fadeInUp">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border border-border bg-background p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:bg-background/80 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group" style={{ animationDelay: '0.2s' }}>
            <a
              href="mailto:apsaralihini11@gmail.com"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-110 transition-all duration-300 group-hover/item:rotate-12">
                <Mail className="w-6 h-6 text-primary group-hover/item:text-primary-foreground transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors duration-300">
                  apsaralihini11@gmail.com
                </p>
              </div>
            </a>
          </Card>

          <Card className="border border-border bg-background p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:bg-background/80 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp group" style={{ animationDelay: '0.3s' }}>
            <a
              href="tel:+94786767329"
              className="flex items-center justify-start gap-4 group/item"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover/item:bg-primary group-hover/item:text-primary-foreground group-hover/item:scale-110 transition-all duration-300 group-hover/item:rotate-12">
                <Phone className="w-6 h-6 text-primary group-hover/item:text-primary-foreground transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg font-semibold text-foreground group-hover/item:text-primary transition-colors duration-300">
                  +94 786 767 329
                </p>
              </div>
            </a>
          </Card>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link
            href="https://github.com/lihiniapsara"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground hover:scale-125 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lihini-apsara/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground hover:scale-125 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Link>
          <Link
            href="https://lihini-portfolio.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 font-semibold group"
          >
            <span className="group-hover:inline-block group-hover:animate-float">Portfolio Site</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
