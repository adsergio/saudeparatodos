"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Heart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Somos Saúde para Todos</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Planos
            </Link>
            <Link href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefícios
            </Link>
            <Link href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
              <Phone className="h-4 w-4 mr-2" />
              (11) 9999-9999
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Contratar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Planos
              </Link>
              <Link href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">
                Benefícios
              </Link>
              <Link href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 9999-9999
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Contratar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
