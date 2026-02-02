import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Globe, Ship, Plane, Warehouse, ClipboardList, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function SolutionsLogistiquesPage() {
  const services = [
    {
      icon: Ship,
      title: "Transport Maritime (Overseas)",
      description: "Solutions complètes pour vos expéditions maritimes internationales, conteneurs FCL et LCL.",
    },
    {
      icon: Plane,
      title: "Transport Aérien",
      description: "Fret aérien express pour vos envois urgents à l'international.",
    },
    {
      icon: Warehouse,
      title: "Entreposage et Stockage",
      description: "Solutions de stockage adaptées à vos besoins avec gestion des stocks.",
    },
    {
      icon: ClipboardList,
      title: "Conseil Logistique",
      description: "Audit et optimisation de votre chaîne logistique pour réduire vos coûts.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analyse de vos besoins",
      description: "Nous étudions votre activité et vos contraintes logistiques",
    },
    {
      number: "02",
      title: "Proposition de solutions",
      description: "Nos experts vous proposent des solutions sur mesure",
    },
    {
      number: "03",
      title: "Mise en place",
      description: "Nous déployons les solutions et formons vos équipes",
    },
    {
      number: "04",
      title: "Suivi et optimisation",
      description: "Accompagnement continu et amélioration des processus",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc3MDAwNDkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Solutions logistiques"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center bg-blue-600 p-4 rounded-full mb-6">
            <Globe className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions Logistiques Complètes
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Conseil et mise en place de solutions sur mesure pour optimiser votre chaîne logistique
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Fort de plus de 15 ans d'expérience, Enafret vous accompagne dans la mise en place 
              de solutions logistiques complètes. Du transport maritime au stockage, en passant par 
              l'optimisation de votre chaîne d'approvisionnement, nous gérons l'ensemble de vos 
              besoins logistiques.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Une gamme complète de services logistiques
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
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-gray-600">
              Un accompagnement structuré pour des résultats concrets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Les Bénéfices d'une Solution Logistique Optimisée
              </h2>
              <div className="space-y-4">
                {[
                  "Réduction des coûts logistiques",
                  "Amélioration des délais de livraison",
                  "Meilleure visibilité sur votre chaîne d'approvisionnement",
                  "Optimisation des stocks",
                  "Flexibilité et réactivité accrues",
                  "Concentration sur votre cœur de métier",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="bg-blue-600 rounded-full p-1 mt-1">
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
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="h-10 w-10 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      +15 ans d'expérience
                    </h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">
                    Notre expertise acquise au sein de grands groupes nous permet de vous 
                    proposer des solutions éprouvées et innovantes, adaptées à votre taille 
                    et votre secteur d'activité.
                  </p>
                  <Link to="/a-propos">
                    <Button variant="link" className="text-blue-600 p-0">
                      En savoir plus sur Enafret →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Optimisons ensemble votre logistique
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous pour un audit gratuit de vos besoins logistiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Demander un devis
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}