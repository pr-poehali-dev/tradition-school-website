import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Middle() {
  const subjects = [
    { name: 'Алгебра', icon: 'Calculator', description: 'Углубленное изучение математики' },
    { name: 'Геометрия', icon: 'Triangle', description: 'Пространственное мышление' },
    { name: 'Физика', icon: 'Atom', description: 'Эксперименты и практика' },
    { name: 'Химия', icon: 'FlaskConical', description: 'Лабораторные работы' },
    { name: 'Биология', icon: 'Microscope', description: 'Живая и неживая природа' },
    { name: 'История', icon: 'ScrollText', description: 'Отечественная и мировая' },
    { name: 'География', icon: 'MapPin', description: 'Страны и континенты' },
    { name: 'Литература', icon: 'BookOpen', description: 'Классика и современность' },
    { name: 'Иностранные языки', icon: 'Languages', description: 'Английский + второй на выбор' }
  ];

  const features = [
    { icon: 'Target', title: 'Профориентация', description: 'Помогаем выбрать будущую профессию' },
    { icon: 'Users', title: 'Классы 18-20 человек', description: 'Баланс социализации и внимания' },
    { icon: 'Laptop', title: 'Цифровые навыки', description: 'Программирование, дизайн, медиа' },
    { icon: 'Activity', title: 'Спорт и секции', description: 'Футбол, баскетбол, танцы, робототехника' }
  ];

  const prices = [
    { 
      name: 'Стандарт', 
      price: '55 000', 
      period: 'в месяц',
      features: ['Основная программа', 'Завтрак и обед', 'Доступ к библиотеке', 'Базовые кружки']
    },
    { 
      name: 'Расширенный', 
      price: '75 000', 
      period: 'в месяц',
      features: ['Углубленная программа', '4-разовое питание', 'Профориентация', 'Все спортсекции', '2 иностранных языка'],
      popular: true
    },
    { 
      name: 'Премиум', 
      price: '95 000', 
      period: 'в месяц',
      features: ['Индивидуальный план', 'Личный куратор', 'Подготовка к олимпиадам', 'Зарубежные стажировки']
    }
  ];

  const achievements = [
    { number: '85%', text: 'Победителей олимпиад' },
    { number: '92%', text: 'Средний балл ОГЭ' },
    { number: '15+', text: 'Профильных кружков' },
    { number: '100%', text: 'Поступление в ВУЗы' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              5-9 классы
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Средняя школа
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Время открытий и самоопределения. Помогаем найти свои сильные стороны и определиться с будущей профессией
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/8fab9489-f679-4a2e-8469-5ed47849a8d2.jpg" 
                alt="Средняя школа"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Программа обучения</h2>
            <p className="text-xl text-slate-600">Расширенная программа с углублённым изучением предметов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject, idx) => (
              <Card key={idx} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon name={subject.icon} className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши достижения</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{item.number}</div>
                <div className="text-slate-300">{item.text}</div>
              </div>
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
            <p className="text-xl text-slate-600">Инвестиция в будущее вашего ребёнка</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, idx) => (
              <Card key={idx} className={`${plan.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : 'border-slate-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы к новым открытиям?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Запишитесь на пробный день и почувствуйте атмосферу нашей школы
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
            Записаться на пробный день
          </Button>
        </div>
      </section>
    </div>
  );
}
