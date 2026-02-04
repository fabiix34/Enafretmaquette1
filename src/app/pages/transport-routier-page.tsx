import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Truck, Clock, MapPin, Package, Shield, Euro } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function TransportRoutierPage() {
  const features = [
    {
      icon: Clock,
      title: "Rapidité",
      description: "Solutions express disponibles pour vos envois urgents",
    },
    {
      icon: MapPin,
      title: "Couverture européenne",
      description: "Livraison dans toute l'Europe avec nos partenaires certifiés",
    },
    {
      icon: Package,
      title: "Flexibilité",
      description: "De la messagerie au lot complet, nous adaptons nos solutions",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Vos marchandises sont assurées et suivies en temps réel",
    },
  ];

  const vehicleTypes = [
    {
      title: "Fourgon",
      capacity: "Jusqu'à 3,5 tonnes",
      description: "Idéal pour les livraisons urbaines et messagerie",
    },
    {
      title: "Porteur",
      capacity: "De 3,5 à 19 tonnes",
      description: "Pour les chargements moyens",
    },
    {
      title: "Semi-remorque",
      capacity: "Jusqu'à 24 tonnes",
      description: "Pour les lots complets et grands volumes",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766785368863-f2188a8c8b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVjayUyMGhpZ2h3YXklMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzcwMDI3NjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Transport routier"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-orange-600 p-4 rounded-full mb-6">
            <Truck className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transport Routier
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Affrètement de moyens de transport adaptés à tous vos besoins
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Chez Enafret, nous mettons à votre disposition notre expertise en affrètement routier. 
              Nous sélectionnons pour vous les meilleurs transporteurs afin de garantir la livraison 
              de vos marchandises dans les meilleures conditions de qualité, délai et prix.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Avantages
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types de Véhicules
            </h2>
            <p className="text-xl text-gray-600">
              Une flotte adaptée à tous vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle) => (
              <Card key={vehicle.title}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="h-8 w-8 text-orange-600" />
                    <h3 className="text-2xl font-semibold">{vehicle.title}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="text-gray-600">{vehicle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Services Inclus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Transport express et standard",
                "Messagerie et lots complets",
                "Suivi en temps réel de vos envois",
                "Assurance marchandises transportées",
                "Optimisation des coûts de transport",
                "Service client dédié",
                "Couverture France et Europe",
                "Gestion administrative complète",
              ].map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <div className="bg-orange-600 rounded-full p-1 mt-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d'un transport routier ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtenez un devis personnalisé pour votre transport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Demander un devis
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}