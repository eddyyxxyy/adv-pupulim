import { Logo } from '@/components/logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="mb-6" />
            <p className="text-secondary">
              Advocacia especializada com compromisso e excelência no atendimento aos nossos clientes.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <a href="tel:+551699999999" className="flex items-center gap-2 hover:text-secondary">
                <Phone size={20} />
                (16) 99999-9999
              </a>
              <a href="mailto:inseriremail@gmail.com" className="flex items-center gap-2 hover:text-secondary">
                <Mail size={20} />
                inseriremail@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <address className="not-italic">
                  São Paulo - SP
                </address>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2">
              <li><a href="/areas#civil" className="hover:text-secondary">Direito Civil</a></li>
              <li><a href="/areas#empresarial" className="hover:text-secondary">Direito Empresarial</a></li>
              <li><a href="/areas#trabalhista" className="hover:text-secondary">Direito Trabalhista</a></li>
              <li><a href="/areas#consumidor" className="hover:text-secondary">Direito do Consumidor</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary/30 text-center text-sm">
          <p>© {new Date().getFullYear()} Advocacia Pupulim. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}