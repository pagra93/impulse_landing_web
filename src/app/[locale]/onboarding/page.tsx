import OnboardingSlider from "@/components/onboarding/OnboardingSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenido a Impulse - Onboarding",
  description:
    "Configura la extensión de Impulse en unos segundos y empieza a bloquear lo que te distrae.",
  alternates: {
    canonical: "https://impulsecontrolapp.com/onboarding",
  },
  // Pantalla de bienvenida tras instalar la extensión, no una página de
  // aterrizaje: no aporta nada a los resultados de búsqueda.
  robots: { index: false, follow: true },
};

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-white">
            <OnboardingSlider />
        </main>
    );
}
