import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Scale, BookOpen, Users, Phone, Award, Clock, Shield } from 'lucide-react';
import firstImage from "@/public/1.png";
import secondImage from "@/public/2.png";
import thirdImage from "@/public/3.png";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-gradient text-white py-24 animated-hero-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Advocacia Especializada e Comprometida
            </h1>
            <p className="text-lg md:text-xl mb-8 text-secondary">
              Soluções jurídicas personalizadas para proteger seus direitos e interesses.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="/contato">Agende uma Consulta</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Tradição e Excelência em Advocacia</h2>
              <p className="text-text/80 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-text/80">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center text-white bg-primary">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">20+ Anos</h3>
                <p className="text-sm text-text/60">de Experiência</p>
              </Card>
              <Card className="p-6 text-center text-white bg-primary">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">500+</h3>
                <p className="text-sm text-text/60">Clientes Atendidos</p>
              </Card>
              <Card className="p-6 text-center text-white bg-primary">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">24/7</h3>
                <p className="text-sm text-text/60">Suporte Jurídico</p>
              </Card>
              <Card className="p-6 text-center text-white bg-primary">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">100%</h3>
                <p className="text-sm text-text/60">Compromisso</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Atuação</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(32.5%-1rem)] overflow-hidden text-center bg-accent text-white">
              <div>
                <Image src={firstImage} alt="Direito Civil" />
              </div>
              <div className="p-6">
                <Scale className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Direito Civil</h3>
                <p className="text-text/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Card>
            <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(32.5%-1rem)] overflow-hidden text-center bg-accent text-white">
              <div>
                <Image src={secondImage} alt="Direito Empresarial" />
              </div>
              <div className="p-6">
                <BookOpen className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Direito Empresarial</h3>
                <p className="text-text/80">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Card>
            <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(32.5%-1rem)] overflow-hidden text-center bg-accent text-white">
              <div>
                <Image src={thirdImage} alt="Direito Trabalhista" />
              </div>
              <div className="p-6">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Direito Trabalhista</h3>
                <p className="text-text/80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Por Que Nos Escolher</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Item 1 */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Experiência Comprovada</h3>
                <p className="text-text/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="h-full">
                <Image 
                  src={firstImage} 
                  alt="Experiência Comprovada"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              <div className="h-full">
                <Image 
                  src={secondImage} 
                  alt="Atendimento Personalizado"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
                <p className="text-text/80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Compromisso com Resultados</h3>
                <p className="text-text/80">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="h-full">
                <Image 
                  src={thirdImage} 
                  alt="Compromisso com Resultados"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Item 4 */}
            <div className="grid grid-cols-2 gap-6 items-stretch">
              <div className="h-full">
                <Image 
                  src={firstImage} 
                  alt="Equipe Especializada"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">Equipe Especializada</h3>
                <p className="text-text/80">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de Assessoria Jurídica?</h2>
          <p className="text-lg mb-8 text-secondary">
            Entre em contato para uma consulta inicial e descubra como podemos ajudar.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contato" className="flex items-center gap-2">
              <Phone size={20} />
              Fale Conosco
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}