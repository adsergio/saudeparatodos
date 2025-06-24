import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Somos Saúde para Todos</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Cuidando da sua saúde e da sua família com qualidade, transparência e os melhores preços do mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#planos" className="text-gray-400 hover:text-white transition-colors">
                  Nossos Planos
                </Link>
              </li>
              <li>
                <Link href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/rede-credenciada" className="text-gray-400 hover:text-white transition-colors">
                  Rede Credenciada
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/central-cliente" className="text-gray-400 hover:text-white transition-colors">
                  Central do Cliente
                </Link>
              </li>
              <li>
                <Link href="/como-usar" className="text-gray-400 hover:text-white transition-colors">
                  Como Usar seu Plano
                </Link>
              </li>
              <li>
                <Link href="/reembolso" className="text-gray-400 hover:text-white transition-colors">
                  Solicitar Reembolso
                </Link>
              </li>
              <li>
                <Link href="/segunda-via" className="text-gray-400 hover:text-white transition-colors">
                  Segunda Via de Boleto
                </Link>
              </li>
              <li>
                <Link href="/ouvidoria" className="text-gray-400 hover:text-white transition-colors">
                  Ouvidoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">contato@somossaude.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Av. Paulista, 1000
                  <br />
                  São Paulo, SP - 01310-100
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Atendimento 24h</strong>
              </p>
              <p className="text-xs text-gray-400">
                Emergências médicas, suporte técnico e informações sobre seu plano
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Somos Saúde para Todos. Todos os direitos reservados.</p>
              <p className="mt-1">ANS nº 123456789 • CNPJ: 12.345.678/0001-90</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/ans" className="text-gray-400 hover:text-white transition-colors">
                Informações ANS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
