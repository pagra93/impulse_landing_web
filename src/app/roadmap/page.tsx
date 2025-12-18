"use client";

import { FeatureCard } from "@/components/roadmap/FeatureCard";
import { SuggestFeatureModal } from "@/components/roadmap/SuggestFeatureModal";
import { features } from "@/data/features";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function RoadmapPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sort features: Done first (optional choice, or by votes)
    // Let's sort by Status "In Progress" -> "Planned" -> "Done" ? 
    // User asked for "Product Hunt style", which usually implies sorting by VOTES.
    // Let's sort by Votes Descending.
    const sortedFeatures = [...features].sort((a, b) => b.votes - a.votes);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">

                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">
                                Public Roadmap
                            </h1>
                            <p className="text-lg text-gray-600 max-w-xl">
                                See what we are working on, what's coming next, and help us decide by voting for your favorite features.
                            </p>
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                        >
                            <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                            <span>Suggest Feature</span>
                        </button>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                        {sortedFeatures.map((feature) => (
                            <FeatureCard key={feature.id} feature={feature} />
                        ))}
                    </div>

                </div>
            </main>

            <Footer />

            <SuggestFeatureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
