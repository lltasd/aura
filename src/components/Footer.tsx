import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ChevronRight, AlertCircle } from 'lucide-react'

import { contactInfo } from '../data/services'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="site-footer" className="text-white bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 border-t border-white/10">
      {/* Disclaimer */}
<div className="relative bg-gradient-to-r from-[#EFF6FF] via-white to-[#EFF6FF] border-b border-[#BFDBFE]/40 overflow-hidden">
  {/* Декоративные элементы */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563EB]/50 via-[#1E40AF]/30 to-transparent" />
  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#1E40AF]/30 to-[#2563EB]/50" />
  
  {/* Тонкий золотой акцент */}
  <div className="hidden sm:block absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
  
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {/* Иконка */}
      <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white shadow-sm shadow-[#2563EB]/30">
        <AlertCircle size={12} className="sm:w-3.5 sm:h-3.5" />
      </span>
      
      {/* Текст */}
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center max-w-4xl">
        <span className="hidden sm:inline">Информация на сайте не является публичной офертой и требует уточнения у менеджера</span>
        <span className="sm:hidden">Информация на сайте не является публичной офертой</span>
      </p>
    </div>
  </div>
</div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Studio info */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-95 transition-all group">
              <Logo size={44} className="drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-display text-xl font-bold tracking-wide">АУРА</div>
                <div className="text-accent text-xs tracking-widest">СТУДИЯ КРАСОТЫ</div>
              </div>
            </Link>

            <div className="space-y-3 text-sm">
              {contactInfo.addresses.map((address, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors group"
                >
                  <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed">{address}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors pt-2 group">
                <Clock size={18} className="text-accent group-hover:scale-110 transition-transform" />
                <span className="font-medium">{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-accent">УСЛУГИ</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Лазерная эпиляция', href: '#services' },
                { label: 'Аппаратная коррекция фигуры', href: '#body-contouring' },
                { label: 'Кавитация', href: '#body-contouring' },
                { label: 'LPG массаж', href: '#body-contouring' },
                { label: 'РФ лифтинг', href: '#body-contouring' },
                { label: 'Прессотерапия', href: '#body-contouring' },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 hover:text-accent transition-all duration-300 flex items-center gap-2 group hover:translate-x-0.5"
                  >
                    <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-accent">О НАС</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'О студии красоты «Аура»', to: '/about', isRoute: true },
                { label: 'Прайс-лист', href: '#pricing', isRoute: false },
                { label: 'Специальные предложения', href: '#packages', isRoute: false },
                { label: 'Контакты', to: '/contacts', isRoute: true },
              ].map((item, index) => (
                <li key={index}>
                  {item.isRoute ? (
                    <Link
                      to={item.to!}
                      className="text-sm text-white/80 hover:text-accent transition-all duration-300 flex items-center gap-2 group hover:translate-x-0.5"
                    >
                      <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0" />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-white/80 hover:text-accent transition-all duration-300 flex items-center gap-2 group hover:translate-x-0.5"
                    >
                      <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0" />
                      <span>{item.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-accent">КОНТАКТЫ</h3>
            <div className="space-y-3 mb-6">
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                  className="flex items-center gap-3 text-white/80 hover:text-accent transition-all duration-300 text-sm group"
                >
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg shadow-md ring-0 ring-accent/0 group-hover:bg-accent/20 group-hover:ring-2 group-hover:ring-accent/30 transition-all duration-300">
                    <Phone size={16} className="text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-medium">{phone}</span>
                </a>
              ))}
            </div>

            {/* Social media */}
            <div>
              <h4 className="font-semibold text-sm mb-3 text-white/90">Мы в соцсетях:</h4>
              <div className="flex gap-3">
                <a
                  href={contactInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-green-500/20 hover:shadow-lg ring-0 ring-green-500/0 hover:ring-2 hover:ring-green-500/30"
                  aria-label="WhatsApp"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-7 h-7" loading="lazy" decoding="async" />
                </a>
                <a
                  href={contactInfo.socialMedia.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-600/20 hover:shadow-lg ring-0 ring-blue-500/0 hover:ring-2 hover:ring-blue-600/30"
                  aria-label="VKontakte"
                >
                  <img src="/vk.svg" alt="VK" className="w-7 h-7" loading="lazy" decoding="async" />
                </a>
                <a
                  href={contactInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-pink-500/20 hover:shadow-lg ring-0 ring-pink-500/0 hover:ring-2 hover:ring-pink-500/30"
                  aria-label="Instagram"
                >
                  <img src="/instagram.svg" alt="Instagram" className="w-7 h-7" loading="lazy" decoding="async" />
                </a>
                <a
                  href={contactInfo.socialMedia.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-sky-500/20 hover:shadow-lg ring-0 ring-sky-500/0 hover:ring-2 hover:ring-sky-500/30"
                  aria-label="Telegram"
                >
                  <img src="/telegram.svg" alt="Telegram" className="w-7 h-7" loading="lazy" decoding="async" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-white/70">
              2025 Студия красоты Аура Донецк ДНР. Все права защищены.
            </p>
            <p className="text-xs text-white/50">
              ИП Париева Анна Сергеевна | ОГРН 323930100242527, ИНН 614331224890
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}