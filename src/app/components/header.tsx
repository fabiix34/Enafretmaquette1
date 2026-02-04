import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from '@/assets/logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="ENA Fret" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-colors ${isActive(item.href)
                    ? "text-orange-600"
                    : "text-gray-700 hover:text-orange-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/devis">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Demande de devis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base ${isActive(item.href)
                      ? "bg-blue-50 text-orange-600"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/devis"
                className="block px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Demande de devis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}