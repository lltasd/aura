// src/components/SpecialOffers.tsx
export default function SpecialOffers() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Специальные предложения</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "1-е посещение -50% от прайса",
            "Приведи подругу -50% двоим",
            "3 дня до и после дня рождения -% возраста от прайса",
            "Абонемент от 5 процедур -30% от прайса"
          ].map((offer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-lg text-center">{offer}</p>
              <p className="text-sm text-gray-500 text-center mt-2">*Скидки не суммируются</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-lg">У нас можно приобрести сертификаты на услуги студии</p>
      </div>
    </section>
  );
}