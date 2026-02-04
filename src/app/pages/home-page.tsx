import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Truck, Package, Globe, Clock, Shield, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HomePage() {
  const services = [
    {
      icon: Truck,
      title: "Transport Routier",
      description: "Affrètement de moyens de transport routier adapté à vos besoins",
      link: "/services/transport-routier",
    },
    {
      icon: Globe,
      title: "Solutions Logistiques",
      description: "Conseil et mise en place de solutions logistiques complètes (Overseas et logistique)",
      link: "/services/solutions-logistiques",
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Réactivité",
      description: "Des solutions rapides et adaptées à vos contraintes",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Plus de 15 ans d'expérience dans le transport",
    },
    {
      icon: Users,
      title: "Client au centre",
      description: "Votre satisfaction est notre priorité",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzcwMDI3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Transport logistics"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Votre partenaire transport et logistique
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Des solutions sur mesure pour tous vos besoins en transport routier et logistique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
                Demander un devis
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                Nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions professionnelles adaptées à chaque besoin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <Link to={service.link}>
                          <Button variant="link" className="text-orange-600 p-0">
                            En savoir plus →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Enafret ?
            </h2>
            <p className="text-xl text-gray-600">
              Des valeurs fortes au service de votre activité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <div key={advantage.title} className="text-center">
                  <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
                    <Icon className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez votre devis personnalisé en quelques clics
          </p>
          <Link to="/devis">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}