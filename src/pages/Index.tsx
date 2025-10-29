import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-slate-800">Традиция</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-600 hover:text-sky-600 transition-colors">О школе</a>
            <a href="#programs" className="text-slate-600 hover:text-sky-600 transition-colors">Программы</a>
            <a href="#teachers" className="text-slate-600 hover:text-sky-600 transition-colors">Преподаватели</a>
            <a href="#success" className="text-slate-600 hover:text-sky-600 transition-colors">Успехи</a>
            <a href="#campus" className="text-slate-600 hover:text-sky-600 transition-colors">Кампус</a>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Phone" size={18} className="mr-2" />
            8 (800) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Будущее начинается здесь
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Частная школа "Традиция" — образование, которое открывает горизонты. 
                Где каждый ребенок раскрывает свой потенциал и становится лидером завтрашнего дня.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full">
                  <Icon name="User" size={18} className="text-sky-600" />
                  <span className="text-sm font-medium text-slate-700">Индивидуальный подход</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                  <Icon name="BookOpen" size={18} className="text-orange-600" />
                  <span className="text-sm font-medium text-slate-700">Глубокие знания</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Icon name="Sparkles" size={18} className="text-purple-600" />
                  <span className="text-sm font-medium text-slate-700">Развитие личности</span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <Icon name="Globe" size={18} className="text-green-600" />
                  <span className="text-sm font-medium text-slate-700">Мировая перспектива</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на экскурсию
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать брошюру
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/cfbac225-d485-4b78-b7be-844527208540.jpg" 
                alt="Счастливые дети в школе" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Почему родители выбирают нас?</h2>
            <p className="text-xl text-slate-600">Мы создаем среду, где ребенок учится думать, творить и побеждать</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Users', title: 'Малокомплектные классы', desc: 'До 12 учеников — внимание каждому ребенку' },
              { icon: 'Trophy', title: 'Топовые результаты', desc: '98% выпускников поступают в ведущие ВУЗы' },
              { icon: 'Lightbulb', title: 'Современные методики', desc: 'STEAM, проектное обучение, критическое мышление' },
              { icon: 'Heart', title: 'Психологическая поддержка', desc: 'Штатные психологи и индивидуальное сопровождение' }
            ].map((item, idx) => (
              <Card key={idx} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Программы, которые вдохновляют</h2>
            <p className="text-xl text-slate-600">От дошкольного образования до подготовки к топовым ВУЗам мира</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Baby', title: 'Дошкольное', age: '3-6 лет', color: 'bg-pink-500' },
              { icon: 'School', title: 'Начальная школа', age: '1-4 классы', color: 'bg-sky-500' },
              { icon: 'BookOpen', title: 'Средняя школа', age: '5-9 классы', color: 'bg-purple-500' },
              { icon: 'GraduationCap', title: 'Старшая школа', age: '10-11 классы', color: 'bg-orange-500' }
            ].map((program, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className={`w-20 h-20 ${program.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon name={program.icon as any} className="text-white" size={36} />
                  </div>
                  <CardTitle className="text-center text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-center text-lg">{program.age}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Преподаватели, которые любят свою работу</h2>
            <p className="text-xl text-slate-600">Профессионалы, наставники, вдохновители</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', subject: 'Математика', experience: '15 лет', fact: 'Автор методики развития логического мышления' },
              { name: 'Михаил Соколов', subject: 'Физика', experience: '12 лет', fact: 'Опыт работы в MIT, автор 20+ научных статей' },
              { name: 'Елена Волкова', subject: 'Английский язык', experience: '18 лет', fact: '10 лет в международных школах Великобритании' }
            ].map((teacher, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-slate-600" />
                  </div>
                  <CardTitle className="text-center text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-center">
                    <span className="block text-sky-600 font-medium">{teacher.subject}</span>
                    <span className="block text-sm mt-1">Стаж: {teacher.experience}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 text-center italic">{teacher.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="success" className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Истории, которые вдохновляют</h2>
            <p className="text-xl text-slate-600">Гордимся каждым нашим учеником и выпускником</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '98%', label: 'Поступили в топ-ВУЗы', icon: 'TrendingUp' },
              { metric: '47', label: 'Побед в олимпиадах', icon: 'Award' },
              { metric: '100%', label: 'ЕГЭ выше 80 баллов', icon: 'Target' }
            ].map((stat, idx) => (
              <Card key={idx} className="border-0 shadow-lg text-center hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon name={stat.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-5xl font-bold text-slate-900 mb-2">{stat.metric}</CardTitle>
                  <CardDescription className="text-lg">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="campus" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Современный кампус для яркой учебы</h2>
            <p className="text-xl text-slate-600">Пространство, где комфортно учиться, творить и развиваться</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Современные классы', icon: 'MonitorPlay' },
              { title: 'Научные лаборатории', icon: 'Flask' },
              { title: 'Спортивные залы', icon: 'Dumbbell' },
              { title: 'Библиотека', icon: 'Library' },
              { title: 'Творческие студии', icon: 'Palette' },
              { title: 'Зоны отдыха', icon: 'Sofa' }
            ].map((facility, idx) => {
              const images = [
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/cfbac225-d485-4b78-b7be-844527208540.jpg',
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/9b891c67-8a3e-4fed-8697-b20a611c9560.jpg',
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/5c2497aa-5ed2-4673-aedc-bf6866d25a21.jpg',
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/cfbac225-d485-4b78-b7be-844527208540.jpg',
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/9b891c67-8a3e-4fed-8697-b20a611c9560.jpg',
                'https://cdn.poehali.dev/projects/6a65be1b-1fb7-4cd9-bf99-3b2e24079603/files/5c2497aa-5ed2-4673-aedc-bf6866d25a21.jpg'
              ];
              return (
                <Card key={idx} className="border-0 shadow-lg overflow-hidden hover-scale cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={images[idx]} 
                      alt={facility.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-center">{facility.title}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-sky-50 to-sky-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Сделайте первый шаг к будущему вашего ребенка</h2>
              <p className="text-xl text-slate-600">Посетите нашу школу и убедитесь сами</p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Записаться на экскурсию</CardTitle>
                <CardDescription>Оставьте контакты, и мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий (опционально)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Возраст ребенка, интересующая программа..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">Традиция</span>
              </div>
              <p className="text-slate-400">Частная школа полного дня</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@traditsia.school
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Меню</h3>
              <div className="space-y-2 text-slate-400">
                <p><a href="#about" className="hover:text-sky-400 transition-colors">О школе</a></p>
                <p><a href="#programs" className="hover:text-sky-400 transition-colors">Программы</a></p>
                <p><a href="#teachers" className="hover:text-sky-400 transition-colors">Преподаватели</a></p>
                <p><a href="#contact" className="hover:text-sky-400 transition-colors">Контакты</a></p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full border-slate-600 hover:border-sky-500 hover:bg-sky-500">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-slate-600 hover:border-sky-500 hover:bg-sky-500">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-slate-600 hover:border-sky-500 hover:bg-sky-500">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Частная школа "Традиция". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;