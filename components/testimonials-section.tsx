import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Maria Silva",
    age: 45,
    city: "São Paulo, SP",
    rating: 5,
    text: "Excelente atendimento! Quando minha filha precisou de uma cirurgia de emergência, tudo foi resolvido rapidamente. A equipe foi muito atenciosa e o hospital era de primeira qualidade.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "João Santos",
    age: 38,
    city: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Melhor custo-benefício que já encontrei. Pago menos de R$ 150 por mês e tenho acesso aos melhores hospitais da cidade. Recomendo para toda família.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Costa",
    age: 52,
    city: "Belo Horizonte, MG",
    rating: 5,
    text: "A telemedicina salvou minha vida durante a pandemia. Consegui fazer consultas de casa e o médico foi super atencioso. Tecnologia que realmente funciona!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Carlos Oliveira",
    age: 41,
    city: "Porto Alegre, RS",
    rating: 5,
    text: "Contraté para minha família toda e não me arrependo. Os exames saem na hora, as consultas são fáceis de marcar e nunca tive problemas com reembolso.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Fernanda Lima",
    age: 29,
    city: "Brasília, DF",
    rating: 5,
    text: "Como mãe de primeira viagem, precisava de um plano confiável. O atendimento obstétrico foi impecável e meu bebê nasceu no melhor hospital da cidade.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Roberto Mendes",
    age: 55,
    city: "Salvador, BA",
    rating: 5,
    text: "Depois dos 50, a saúde fica mais delicada. Com este plano, tenho tranquilidade total. Check-ups regulares e acompanhamento médico de qualidade.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos <span className="text-blue-600">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 50.000 famílias já confiam na nossa qualidade. Veja alguns depoimentos reais de quem escolheu cuidar
            da saúde conosco.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.name}`}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}, {testimonial.age} anos
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-1" />
                  <p className="text-gray-700 italic pl-6 leading-relaxed">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2.847</div>
                <div className="text-sm text-gray-600">Avaliações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50k+</div>
                <div className="text-sm text-gray-600">Clientes ativos</div>
              </div>
            </div>
            <p className="text-gray-700 text-lg">
              <strong>98% dos nossos clientes</strong> recomendam nossos planos para amigos e familiares
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
