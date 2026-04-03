'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-background relative overflow-hidden">
      {/* Bold background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 border-2 border-primary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl w-full relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4 animate-fadeInUp">
                  FULL STACK ENGINEER
                </p>
              </div>
              
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight text-foreground animate-slideInDown">
                LIHINI
                <span className="block text-primary">APSARA</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                Crafting scalable architectures and exceptional digital experiences with modern technologies and creative problem-solving.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-300 group text-sm"
              >
                View Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://github.com/lihiniapsara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-primary hover:text-primary-foreground text-primary border-2 border-primary hover:shadow-lg transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/lihini-apsara/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-primary hover:text-primary-foreground text-primary border-2 border-primary hover:shadow-lg transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:apsaralihini11@gmail.com"
                className="p-3 hover:bg-primary hover:text-primary-foreground text-primary border-2 border-primary hover:shadow-lg transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:block animate-slideInRight">
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="absolute inset-12 border-2 border-primary flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-primary/30 mb-4">LA</div>
                  <p className="text-primary font-bold tracking-widest uppercase text-sm">Creating Scalable Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary flex justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
