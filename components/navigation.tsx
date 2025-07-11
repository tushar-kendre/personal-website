"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 right-0 z-50 p-6 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-slate-900/80" : ""
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection("about")}
          className="text-slate-200 hover:text-accent-blue transition-colors duration-200 font-medium"
        >
          About me
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-slate-200 hover:text-accent-blue transition-colors duration-200 font-medium"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-slate-200 hover:text-accent-blue transition-colors duration-200 font-medium"
        >
          Portfolio
        </button>
        <Button
          onClick={() => scrollToSection("contact")}
          className="accent-gradient text-white hover:opacity-90 font-medium px-6 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
        >
          CONTACT ME
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-200 hover:bg-slate-800/50 hover:text-accent-blue"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 card-subtle rounded-lg p-4 min-w-[200px] shadow-xl">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-200 hover:text-accent-blue transition-colors font-medium text-left"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-200 hover:text-accent-blue transition-colors font-medium text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-200 hover:text-accent-blue transition-colors font-medium text-left"
              >
                Portfolio
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="accent-gradient text-white hover:opacity-90 font-medium px-6 py-2 rounded-full w-full"
              >
                CONTACT ME
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
