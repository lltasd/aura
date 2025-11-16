import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, ArrowRight, MessageCircle, Phone as PhoneIcon, Sparkles, TrendingUp } from 'lucide-react';
import { contactInfo } from '../data/services';
import PhoneSelectModal from './PhoneSelectModal';

 

export default function ContactsSection() {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactImages = ['/145-5665.webp', '/45.webp'];

  return (
    <section 
      id="contacts" 
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 scroll-mt-28 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2.5 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">
              Свяжитесь с нами
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-primary mb-6">
            Контакты
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Мы всегда <span className="text-primary font-bold">на связи</span> — выберите удобный способ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-12">
          {/* Левая часть - Контактная информация */}
          <div 
            className={`bg-white p-10 rounded-2xl shadow-xl border-2 border-gray-100 transition-all duration-700 delay-100 hover:shadow-2xl ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-3 rounded-2xl shadow-xl">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Контактная информация
              </h3>
            </div>

            <div className="space-y-8">
              {/* Адреса */}
              <div 
                className={`flex items-start gap-5 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="bg-primary/10 p-3 rounded-xl shadow-md flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Наши адреса</h4>
                  <ul className="space-y-3">
                    {contactInfo.addresses.map((addr, i) => (
                      <li key={i} className="flex items-start gap-3 hover:text-primary transition-colors group">
                        <div className="mt-2 w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></div>
                        <span className="text-gray-700 font-medium leading-relaxed">{addr}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://yandex.ru/maps/?um=constructor%3A11511965ab6f5e33cb6b916a4a041e11a24585c60428311b58282acdd7128338&source=constructorLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-xl hover:shadow-lg transition-all hover:scale-105"
                  >
                    Открыть на Яндекс.Картах <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Телефоны */}
              <div 
                className={`flex items-start gap-5 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="bg-primary/10 p-3 rounded-xl shadow-md flex-shrink-0">
                  <PhoneIcon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Телефоны</h4>
                  <div className="flex flex-col gap-2">
                    {contactInfo.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/\s/g, '').replace(/[()]/g, '')}`}
                        className="text-gray-700 hover:text-primary transition-colors font-bold text-lg hover:translate-x-1 inline-block"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Часы работы */}
              <div 
                className={`flex items-start gap-5 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="bg-primary/10 p-3 rounded-xl shadow-md flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">График работы</h4>
                  <p className="text-gray-700 font-bold text-xl">{contactInfo.workingHours}</p>
                </div>
              </div>

              {/* Соцсети */}
              <div 
                className={`pt-4 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Мы на связи</h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={contactInfo.socialMedia.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold transition-all hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={contactInfo.socialMedia.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    Telegram
                  </a>
                  <a
                    href={contactInfo.socialMedia.vk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-white text-primary border-2 border-primary/20 hover:border-accent hover:text-accent font-bold transition-all hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    ВКонтакте
                  </a>
                </div>
              </div>

              {/* Карточки с информацией */}
              <div 
                className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-gray-800">Консультация</h5>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Бесплатная консультация по подбору процедур. Ответим в мессенджерах в течение дня.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h5 className="font-bold text-gray-800">Запись</h5>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Онлайн-запись и бронирование по телефону. Уточняйте стоимость у администратора.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть - Карта */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 bg-white mb-6 hover:shadow-2xl transition-shadow">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A11511965ab6f5e33cb6b916a4a041e11a24585c60428311b58282acdd7128338&source=constructorLink"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта проезда"
                />
              </div>
            </div>

            {/* Две мини-фотки под картой */}
            <div className="grid grid-cols-2 gap-6">
              {contactImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-primary/30"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <img
                      src={image}
                      alt={`Студия фото ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div 
          className={`max-w-7xl mx-auto transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-2xl font-bold">Остались вопросы?</h4>
                </div>
                <p className="text-white/90 text-lg font-medium leading-relaxed">
                  Оставьте заявку — администратор свяжется с вами и подберёт удобное время для записи.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={contactInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gold hover:bg-gold-light text-primary font-bold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Написать в WhatsApp
                </a>
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border-2 border-white/20 font-bold transition-all hover:scale-105"
                  onClick={() => setPhoneModalOpen(true)}
                >
                  Позвонить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PhoneSelectModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
    </section>
  );
}