import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/elementary', label: 'Начальная школа' },
    { path: '/middle', label: 'Средняя школа' },
    { path: '/high', label: 'Старшая школа' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900">Школа будущего</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-sky-600'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
            >
              Записаться
            </Link>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-slate-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
