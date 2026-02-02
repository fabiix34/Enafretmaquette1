import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Award, Users, TrendingUp, Target, Heart, Briefcase } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function AProposPage() {
  const values = [
    {
      icon: Heart,
      title: "Client au centre",
      description: "Votre satisfaction est notre priorité absolue. Nous plaçons vos besoins au cœur de toutes nos décisions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Plus de 15 ans d'expérience dans les grands groupes nous permettent d'offrir un service de qualité supérieure.",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Un interlocuteur dédié vous accompagne tout au long de votre projet logistique.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Nous recherchons constamment des solutions innovantes pour optimiser vos opérations.",
    },
  ];

  const stats = [
    { number: "2021", label: "Année de création" },
    { number: "+15", label: "Ans d'expérience" },
    { number: "100%", label: "Satisfaction client" },
    { number: "24h", label: "Délai de réponse" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos d'Enafret
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Une entreprise fondée sur l'expérience et la passion du service client
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Enafret a été fondée en 2021 par Faysal Elkafil, fort de plus de 15 ans 
                  d'expérience acquise au sein de grands groupes du transport et de la logistique.
                </p>
                <p>
                  Constatant que de nombreuses entreprises cherchaient un partenaire capable de 
                  combiner l'expertise des grands groupes avec la proximité et la réactivité d'une 
                  structure à taille humaine, Faysal a créé Enafret avec une vision claire : 
                  <strong className="text-blue-600"> placer le client au centre des intérêts</strong>.
                </p>
                <p>
                  Aujourd'hui, Enafret accompagne ses clients dans leurs besoins en transport 
                  routier et en solutions logistiques complètes, en mettant toujours l'accent 
                  sur la qualité de service, la réactivité et la recherche de solutions sur mesure.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2OTk5NjE5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ENA Fret logistique"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Notre Mission</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Offrir à nos clients des solutions de transport et de logistique performantes, 
                  fiables et sur mesure. Nous nous engageons à être un partenaire de confiance qui 
                  comprend vos enjeux et vous accompagne dans votre croissance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Notre Expertise</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Forte de plus de 15 ans d'expérience dans les grands groupes, notre équipe maîtrise 
                  tous les aspects du transport et de la logistique. Nous mettons cette expertise au 
                  service d'entreprises de toutes tailles avec la même exigence de qualité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment Enafret peut devenir votre partenaire logistique de confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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