import OnboardingSlider from "@/components/onboarding/OnboardingSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bienvenido a Impulse - Onboarding",
    description: "Aprende a usar Impulse para mejorar tu concentración y productividad.",
};

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-white">
            <OnboardingSlider />
        </main>
    );
}
