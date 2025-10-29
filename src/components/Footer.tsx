import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">Школа будущего</span>
            </div>
            <p className="text-slate-400 text-sm">
              Современное образование для вашего ребёнка
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Обучение</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/elementary" className="hover:text-white transition-colors">Начальная школа</Link></li>
              <li><Link to="/middle" className="hover:text-white transition-colors">Средняя школа</Link></li>
              <li><Link to="/high" className="hover:text-white transition-colors">Старшая школа</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>+7 (495) 123-45-67</li>
              <li>info@school-future.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© 2025 Школа будущего. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
