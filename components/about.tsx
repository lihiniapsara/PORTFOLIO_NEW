'use client'

export default function About() {
  return (
    <section id="about" className="py-32 px-4 bg-background border-y border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fadeInUp">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">ABOUT</p>
          <h2 className="text-6xl lg:text-7xl font-black text-foreground">Who I Am</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fadeInLeft">
            <p className="text-xl font-semibold text-foreground">
              A Software Engineering enthusiast passionate about building scalable, user-centric digital solutions.
            </p>
            <p>
              I&apos;m a student of the GDSE (Graduate Diploma in Software Engineering) program at IJSE – Institute of Software Engineering, with hands-on experience in full-stack development, microservices architecture, and cloud deployment.
            </p>
            <p>
              Currently serving as a Software Engineering Intern at Gamage Recruiters, where I contribute to web application development, API integration, and collaborative Git-based workflows. I believe in creating elegant solutions to complex problems.
            </p>
          </div>

          <div className="space-y-8 animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-widest uppercase text-primary">Key Highlights</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-2 border-primary/40 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <div className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors">7+</div>
                  <p className="text-xs uppercase font-bold tracking-widest text-foreground">Projects</p>
                </div>
                <div className="border-2 border-primary/40 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <div className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors">10+</div>
                  <p className="text-xs uppercase font-bold tracking-widest text-foreground">Repositories</p>
                </div>
                <div className="border-2 border-primary/40 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <div className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors">FULL</div>
                  <p className="text-xs uppercase font-bold tracking-widest text-foreground">Stack Dev</p>
                </div>
                <div className="border-2 border-primary/40 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <div className="text-3xl font-black text-primary mb-2 group-hover:text-accent transition-colors">GCP</div>
                  <p className="text-xs uppercase font-bold tracking-widest text-foreground">Cloud Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
