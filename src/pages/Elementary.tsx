import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Elementary() {
  const subjects = [
    { name: 'Математика', icon: 'Calculator', description: 'Развитие логического мышления' },
    { name: 'Русский язык', icon: 'BookOpen', description: 'Грамотная речь и письмо' },
    { name: 'Чтение', icon: 'Book', description: 'Любовь к книгам' },
    { name: 'Окружающий мир', icon: 'Globe', description: 'Изучение природы и общества' },
    { name: 'Английский язык', icon: 'Languages', description: 'С 1 класса в игровой форме' },
    { name: 'Творчество', icon: 'Palette', description: 'Рисование, музыка, труд' }
  ];

  const features = [
    { icon: 'Users', title: 'Малые классы', description: 'До 15 человек для индивидуального подхода' },
    { icon: 'Heart', title: 'Психолог', description: 'Адаптация и поддержка каждого ребёнка' },
    { icon: 'Utensils', title: '4-разовое питание', description: 'Здоровое меню от детского диетолога' },
    { icon: 'Clock', title: 'Продлёнка', description: 'До 18:00 с прогулками и развивающими занятиями' }
  ];

  const prices = [
    { 
      name: 'Полупансион', 
      price: '45 000', 
      period: 'в месяц',
      features: ['Обучение до 14:00', 'Завтрак и обед', 'Основная программа', 'Психолог']
    },
    { 
      name: 'Полный день', 
      price: '60 000', 
      period: 'в месяц',
      features: ['Обучение до 18:00', '4-разовое питание', 'Продлёнка', 'Кружки в подарок'],
      popular: true
    },
    { 
      name: 'Премиум', 
      price: '80 000', 
      period: 'в месяц',
      features: ['Индивидуальный план', 'VIP сопровождение', 'Все доп. занятия', 'Трансфер']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <section className="py-20 bg-gradient-to-br from-sky-100 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              1-4 классы
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Начальная школа
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Бережный переход из детского сада в школьную жизнь. Развиваем любознательность, самостоятельность и любовь к учёбе
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/4c475f48-95c8-4af2-8355-0f537a23cebc.jpg" 
                alt="Начальная школа"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Предметы и программа</h2>
            <p className="text-xl text-slate-600">Сбалансированное развитие по всем направлениям</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subjects.map((subject, idx) => (
              <Card key={idx} className="border-2 hover:border-sky-500 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={subject.icon} className="text-sky-600" size={24} />
                  </div>
                  <CardTitle>{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Особенности обучения</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Стоимость обучения</h2>
            <p className="text-xl text-slate-600">Выберите удобный формат для вашей семьи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, idx) => (
              <Card key={idx} className={`${plan.popular ? 'border-sky-500 border-2 shadow-xl scale-105' : 'border-slate-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price} ₽</span>
                    <span className="text-slate-600 block mt-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-sky-600 hover:bg-sky-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Запишитесь на день открытых дверей</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Познакомьтесь с учителями, посмотрите классы и задайте все вопросы
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-slate-100">
            Записаться на экскурсию
          </Button>
        </div>
      </section>
    </div>
  );
}
