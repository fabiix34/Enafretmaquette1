import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Truck, Globe, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ServicesPage() {
  const services = [
    {
      icon: Truck,
      title: "Transport Routier",
      description: "Affrètement de moyens de transport routier pour tous vos besoins en Europe. Nous sélectionnons les meilleurs transporteurs pour garantir la livraison de vos marchandises dans les meilleures conditions.",
      features: [
        "Transport express et standard",
        "Messagerie et lots complets",
        "Véhicules adaptés (fourgons, semi-remorques)",
        "Suivi en temps réel",
        "Couverture européenne",
      ],
      image: "https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzcwMDI3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/transport-routier",
    },
    {
      icon: Globe,
      title: "Solutions Logistiques Complètes",
      description: "Conseil et mise en place de solutions logistiques sur mesure incluant le transport maritime, aérien et la gestion de votre chaîne d'approvisionnement.",
      features: [
        "Transport maritime (Overseas)",
        "Transport aérien",
        "Stockage et entreposage",
        "Conseil en optimisation logistique",
        "Solutions multimodales",
      ],
      image: "https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc3MDAwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/services/solutions-logistiques",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour tous vos besoins en transport et logistique
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos experts sont à votre écoute pour comprendre vos besoins et vous proposer la meilleure solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Demander un devis
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
