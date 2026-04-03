'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-primary/20 animate-slideInDown">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="text-2xl font-black text-primary hover:text-primary hover:scale-110 transition-all duration-300 group tracking-tighter">
            LA
            <span className="block text-xs font-bold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">STUDIO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs uppercase font-bold tracking-widest text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              ) : (
                <Menu className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 flex flex-col gap-4 border-t border-primary/20 pt-6 animate-slideInDown">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs uppercase font-bold tracking-widest text-foreground hover:text-primary transition-all duration-300 animate-fadeInLeft group"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <span className="block h-0.5 bg-primary mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
