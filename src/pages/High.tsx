import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function High() {
  const profiles = [
    { 
      name: 'Физико-математический', 
      icon: 'Calculator', 
      subjects: ['Математика (8 ч)', 'Физика (6 ч)', 'Информатика (4 ч)'],
      career: 'Инженер, IT-специалист, ученый'
    },
    { 
      name: 'Гуманитарный', 
      icon: 'BookOpen', 
      subjects: ['Литература (6 ч)', 'История (6 ч)', 'Обществознание (4 ч)'],
      career: 'Юрист, журналист, дипломат'
    },
    { 
      name: 'Естественно-научный', 
      icon: 'Microscope', 
      subjects: ['Биология (6 ч)', 'Химия (6 ч)', 'Математика (6 ч)'],
      career: 'Врач, биолог, фармацевт'
    },
    { 
      name: 'Социально-экономический', 
      icon: 'TrendingUp', 
      subjects: ['Экономика (6 ч)', 'Математика (6 ч)', 'Обществознание (4 ч)'],
      career: 'Экономист, менеджер, маркетолог'
    }
  ];

  const features = [
    { icon: 'GraduationCap', title: 'Подготовка к ЕГЭ', description: 'Средний балл наших выпускников — 87' },
    { icon: 'Trophy', title: 'Олимпиады', description: 'Персональная подготовка к всероссийским олимпиадам' },
    { icon: 'Globe', title: 'Международные программы', description: 'Обмены и летние школы за рубежом' },
    { icon: 'Briefcase', title: 'Практика', description: 'Стажировки в ведущих компаниях' }
  ];

  const prices = [
    { 
      name: 'Базовый профиль', 
      price: '65 000', 
      period: 'в месяц',
      features: ['Профильная программа', '2-разовое питание', 'Базовая подготовка к ЕГЭ', 'Консультации психолога']
    },
    { 
      name: 'Интенсив', 
      price: '90 000', 
      period: 'в месяц',
      features: ['Углубленная программа', '3-разовое питание', 'Интенсив по ЕГЭ (3 предмета)', 'Профориентация', 'Олимпиадная подготовка'],
      popular: true
    },
    { 
      name: 'Премиум', 
      price: '120 000', 
      period: 'в месяц',
      features: ['Индивидуальный план', 'Личный куратор-тьютор', 'Подготовка в топ-ВУЗы', 'Зарубежные стажировки', 'Консультация по поступлению']
    }
  ];

  const universities = [
    { name: 'МГУ', logo: '🎓' },
    { name: 'МФТИ', logo: '⚛️' },
    { name: 'ВШЭ', logo: '📊' },
    { name: 'МГИМО', logo: '🌍' },
    { name: 'СПбГУ', logo: '📚' },
    { name: 'Бауманка', logo: '🔧' }
  ];

  const results = [
    { number: '100%', text: 'Поступление в ВУЗы' },
    { number: '87', text: 'Средний балл ЕГЭ' },
    { number: '45%', text: 'Поступили на бюджет' },
    { number: '23', text: 'Призера олимпиад в 2024' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <section className="py-20 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              10-11 классы
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Старшая школа
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Целенаправленная подготовка к поступлению в лучшие ВУЗы России и мира. Профильное обучение и олимпиадная подготовка
            </p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
              <img 
                src="https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/2c0c4b76-53fe-4f82-a2b4-c4e94c2c8c88.jpg" 
                alt="Старшая школа"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Профили обучения</h2>
            <p className="text-xl text-slate-600">Выберите направление в соответствии с будущей карьерой</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {profiles.map((profile, idx) => (
              <Card key={idx} className="border-2 hover:border-purple-500 transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={profile.icon} className="text-purple-600" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{profile.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="space-y-2 mt-3">
                      <div className="font-medium text-slate-700">Профильные предметы:</div>
                      <ul className="space-y-1">
                        {profile.subjects.map((subject, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                            <Icon name="Check" className="text-green-600" size={16} />
                            {subject}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-slate-200">
                        <span className="text-sm font-medium text-purple-600">→ {profile.career}</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Результаты 2024 года</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {results.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-purple-300 mb-2">{item.number}</div>
                <div className="text-purple-100">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">Куда поступают наши выпускники</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {universities.map((uni, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <div className="text-4xl mb-2">{uni.logo}</div>
                  <div className="text-sm font-medium">{uni.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
            <p className="text-xl text-slate-600">Инвестиция в успешное поступление</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, idx) => (
              <Card key={idx} className={`${plan.popular ? 'border-purple-500 border-2 shadow-xl scale-105' : 'border-slate-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Поступайте в лучшие ВУЗы</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Запишитесь на консультацию по выбору профиля и подготовке к поступлению
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-slate-100">
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
}
