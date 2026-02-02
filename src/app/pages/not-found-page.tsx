import { Link } from "react-router";
import { Button } from "@/app/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
