import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { toast } from "sonner";
import { FileText, CheckCircle } from "lucide-react";

interface DevisFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  weight: string;
  description: string;
}

export function DevisPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<DevisFormData>();

  const onSubmit = (data: DevisFormData) => {
    console.log("Demande de devis:", data);
    // Ici, vous pourrez intégrer votre système d'envoi d'email ou d'API
    toast.success("Demande de devis envoyée avec succès !");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center bg-green-100 p-4 rounded-full mb-6">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Demande envoyée avec succès !
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Merci pour votre demande de devis. Notre équipe va l'étudier et vous recontactera 
                dans les plus brefs délais, généralement sous 24 heures.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Faire une nouvelle demande
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white/10 p-4 rounded-full mb-6">
              <FileText className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de Devis
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et recevez votre devis personnalisé sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Company Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Informations entreprise</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">
                        Nom de l'entreprise <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        {...register("company", { required: "Ce champ est requis" })}
                        className={errors.company ? "border-red-500" : ""}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="name">
                        Nom et prénom <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Ce champ est requis" })}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "Ce champ est requis",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email invalide",
                          },
                        })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="phone">
                        Téléphone <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register("phone", { required: "Ce champ est requis" })}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Détails du service</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="service">
                        Type de service <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) => setValue("service", value)}
                        {...register("service", { required: "Ce champ est requis" })}
                      >
                        <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transport-routier">Transport Routier</SelectItem>
                          <SelectItem value="transport-maritime">Transport Maritime</SelectItem>
                          <SelectItem value="transport-aerien">Transport Aérien</SelectItem>
                          <SelectItem value="solution-complete">Solution Logistique Complète</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="origin">
                          Lieu de départ <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="origin"
                          placeholder="Ville, Code postal"
                          {...register("origin", { required: "Ce champ est requis" })}
                          className={errors.origin ? "border-red-500" : ""}
                        />
                        {errors.origin && (
                          <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="destination">
                          Lieu d'arrivée <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="destination"
                          placeholder="Ville, Code postal"
                          {...register("destination", { required: "Ce champ est requis" })}
                          className={errors.destination ? "border-red-500" : ""}
                        />
                        {errors.destination && (
                          <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="weight">
                        Poids / Volume estimé
                      </Label>
                      <Input
                        id="weight"
                        placeholder="Ex: 500 kg, 10 palettes, 1 conteneur 20'"
                        {...register("weight")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="description">
                        Description de la marchandise et informations complémentaires
                      </Label>
                      <Textarea
                        id="description"
                        rows={5}
                        placeholder="Décrivez votre besoin, type de marchandise, contraintes particulières, délais souhaités..."
                        {...register("description")}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Envoyer ma demande de devis
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Nous nous engageons à vous répondre sous 24 heures
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-blue-600 text-3xl font-bold mb-2">24h</div>
              <p className="text-gray-600">Délai de réponse</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl font-bold mb-2">100%</div>
              <p className="text-gray-600">Devis gratuit</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl font-bold mb-2">+15 ans</div>
              <p className="text-gray-600">D'expérience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
