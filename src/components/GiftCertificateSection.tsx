import { Sparkles, CheckCircle2, CreditCard } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { motion } from 'framer-motion'

export default function GiftCertificateSection({ onSubmit }: { onSubmit: () => void }) {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={sectionRef}
      className={`mt-20 mb-20 px-4 transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="bg-white/40 backdrop-blur-xl rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden order-1 lg:order-1"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Подарок</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">ПОДАРОЧНЫЙ СЕРТИФИКАТ</h3>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Подарите близкому человеку заботу и уход. В студии «Аура» вы можете приобрести сертификат на любую процедуру. Уточните детали у администратора.
              </p>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Идея для любого случая</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Удобно и быстро</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Без скрытых платежей</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 order-2 lg:order-2 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-48 translate-x-48" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl translate-y-40 -translate-x-40" />
            
            <div className="space-y-6 max-w-xl relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gradient-to-r from-blue-600/10 to-slate-600/10 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-6"
              >
                <h4 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                  Как получить сертификат?
                </h4>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Приходите в любую из наших студий в Донецке — мы оформим для вас красивый подарочный сертификат на любую сумму или процедуру.
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-black text-xl">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Выберите сумму или процедуру</h5>
                    <p className="text-slate-600 text-sm">Любая услуга или комплекс по вашему желанию</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-black text-xl">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Оформите в студии</h5>
                    <p className="text-slate-600 text-sm">Администратор все подготовит за пару минут</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-light to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-black text-xl">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">Дарите с радостью!</h5>
                    <p className="text-slate-600 text-sm">Получатель сам выберет удобное время визита</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="button"
                  onClick={onSubmit}
                  className="w-full inline-flex items-center justify-center px-8 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/50 active:scale-[0.98] transition-all duration-300 gap-3 border border-white/20"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Узнать подробности в студии</span>
                </button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center text-slate-500 text-sm"
              >
                Все детали и варианты оформления можно уточнить у администратора
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}