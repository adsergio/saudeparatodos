"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Como funciona o período de carência?",
    answer:
      "Para consultas médicas e exames básicos, não há carência - você pode usar imediatamente após a contratação. Para internações, o prazo é de 180 dias, e para partos, 300 dias, conforme regulamentação da ANS.",
  },
  {
    question: "Posso incluir minha família no plano?",
    answer:
      "Sim! Você pode incluir cônjuge, filhos até 21 anos (ou 24 anos se universitários) e pais. Oferecemos descontos progressivos: 2º dependente 10% off, 3º dependente 15% off, 4º dependente em diante 20% off.",
  },
  {
    question: "Quais hospitais estão na rede credenciada?",
    answer:
      "Temos parceria com os principais hospitais do país, incluindo Hospital Sírio-Libanês, Einstein, Oswaldo Cruz, e mais de 5.000 estabelecimentos em todo território nacional. Consulte a lista completa em nosso site.",
  },
  {
    question: "Como funciona a telemedicina?",
    answer:
      "A telemedicina está incluída em todos os planos sem custo adicional. Você pode agendar consultas online através do nosso app, disponível 24h por dia, com médicos especialistas credenciados.",
  },
  {
    question: "Posso cancelar o plano a qualquer momento?",
    answer:
      "Sim, não temos fidelidade. Você pode cancelar seu plano a qualquer momento sem multas ou taxas. O cancelamento deve ser solicitado com 30 dias de antecedência.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Para atendimentos fora da rede credenciada, oferecemos reembolso conforme tabela da ANS. O processo é simples: envie os documentos pelo app e o reembolso é processado em até 30 dias.",
  },
  {
    question: "Há cobertura para tratamentos odontológicos?",
    answer:
      "Os planos de saúde cobrem apenas urgências odontológicas. Para cobertura odontológica completa, oferecemos planos dentários complementares com desconto especial para nossos clientes.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "Aceitamos cartão de crédito, débito automático e boleto bancário. O pagamento é mensal, sempre no mesmo dia que você contratou. Oferecemos 5% de desconto para pagamento anual à vista.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos planos de saúde. Se não encontrar a resposta que procura, entre em contato
            conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm">
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              📞 (11) 9999-9999
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
