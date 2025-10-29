import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Home() {
  const levels = [
    {
      title: 'Начальная школа',
      subtitle: '1-4 классы',
      description: 'Бережное развитие и любовь к учёбе',
      icon: 'Baby',
      color: 'sky',
      price: 'от 45 000 ₽',
      link: '/elementary',
      image: 'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/4c475f48-95c8-4af2-8355-0f537a23cebc.jpg'
    },
    {
      title: 'Средняя школа',
      subtitle: '5-9 классы',
      description: 'Открытия и самоопределение',
      icon: 'BookOpen',
      color: 'blue',
      price: 'от 55 000 ₽',
      link: '/middle',
      image: 'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/8fab9489-f679-4a2e-8469-5ed47849a8d2.jpg'
    },
    {
      title: 'Старшая школа',
      subtitle: '10-11 классы',
      description: 'Подготовка к поступлению в ВУЗ',
      icon: 'GraduationCap',
      color: 'purple',
      price: 'от 65 000 ₽',
      link: '/high',
      image: 'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/2c0c4b76-53fe-4f82-a2b4-c4e94c2c8c88.jpg'
    }
  ];

  const features = [
    { icon: 'Users', title: 'Малые классы', description: '15-20 человек для персонального внимания' },
    { icon: 'Globe', title: 'Международные программы', description: 'Обмены и стажировки за рубежом' },
    { icon: 'Trophy', title: 'Олимпиады', description: 'Призеры всероссийских конкурсов' },
    { icon: 'Heart', title: 'Психологическая поддержка', description: 'Опытные психологи в штате' },
    { icon: 'Utensils', title: 'Здоровое питание', description: 'Собственная кухня и диетолог' },
    { icon: 'Activity', title: 'Спорт и творчество', description: '20+ кружков и секций' }
  ];

  const stats = [
    { number: '25', label: 'лет опыта', icon: 'Award' },
    { number: '500+', label: 'выпускников', icon: 'Users' },
    { number: '100%', label: 'поступление в ВУЗы', icon: 'GraduationCap' },
    { number: '87', label: 'средний балл ЕГЭ', icon: 'TrendingUp' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Школа будущего
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Современное образование для вашего ребёнка. От начальной школы до подготовки в лучшие ВУЗы России.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                Записаться на экскурсию
              </Button>
              <Button size="lg" variant="outline">
                Смотреть программы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Выберите ступень обучения</h2>
            <p className="text-xl text-slate-600">Каждый возраст требует своего подхода</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {levels.map((level, idx) => (
              <Card key={idx} className="group border-2 hover:border-sky-500 transition-all hover:shadow-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={level.image}
                    alt={level.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className={`w-12 h-12 bg-${level.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={level.icon} className={`text-${level.color}-600`} size={24} />
                  </div>
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-medium text-slate-700 mb-1">{level.subtitle}</div>
                    <div>{level.description}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-slate-900">{level.price}</span>
                    <span className="text-slate-600 text-sm ml-1">/ месяц</span>
                  </div>
                  <Link to={level.link}>
                    <Button className={`w-full bg-${level.color}-600 hover:bg-${level.color}-700`}>
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
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
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="text-sky-400" size={28} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-slate-600">Комплексный подход к развитию ребёнка</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={feature.icon} className="text-sky-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Запишитесь на день открытых дверей и познакомьтесь с нашей школой лично
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-slate-100">
              Записаться на экскурсию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
