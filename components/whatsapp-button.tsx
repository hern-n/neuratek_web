"use client"

import { MessageCircle } from 'lucide-react'

const PHONE_NUMBER = '+34931234567'
const MESSAGE = 'Hola, me gustaría recibir información sobre los servicios de NEURATEK.'

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-400 hover:scale-110 active:scale-95 transition-all duration-300 glow-primary-lg"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
