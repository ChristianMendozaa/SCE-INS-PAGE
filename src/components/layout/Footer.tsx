
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-10">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Norbert Wiener Hub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sociedad Científica Estudiantil de Ingeniería de Sistemas, Universidad Católica Boliviana "San Pablo".
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/chapters" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Capítulos
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Membresía
                </Link>
              </li>
              {/*<li>
                <Link to="/events" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Publicaciones
                </Link>
              </li>*/}
            </ul>
          </div>
          
          {/*<div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-0.5 mr-2 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Av. 14 de Septiembre, La Paz, Bolivia
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-600 dark:text-gray-400" />
                <a href="mailto:norbertwiener@example.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  norbertwiener@example.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-600 dark:text-gray-400" />
                <a href="tel:+59122222222" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  +591 2 222 2222
                </a>
              </li>
            </ul>
          </div>*/}
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Sociedad Científica Estudiantil "Norbert Wiener". Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link to="/privacy" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
