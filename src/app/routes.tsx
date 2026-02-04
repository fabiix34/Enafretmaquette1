import { createHashRouter } from "react-router";
import { Root } from "@/app/components/root";
import { HomePage } from "@/app/pages/home-page";
import { ServicesPage } from "@/app/pages/services-page";
import { TransportRoutierPage } from "@/app/pages/transport-routier-page";
import { SolutionsLogistiquesPage } from "@/app/pages/solutions-logistiques-page";
import { AProposPage } from "@/app/pages/a-propos-page";
import { ContactPage } from "@/app/pages/contact-page";
import { DevisPage } from "@/app/pages/devis-page";
import { NotFoundPage } from "@/app/pages/not-found-page";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "services/transport-routier", Component: TransportRoutierPage },
      { path: "services/solutions-logistiques", Component: SolutionsLogistiquesPage },
      { path: "a-propos", Component: AProposPage },
      { path: "contact", Component: ContactPage },
      { path: "devis", Component: DevisPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
