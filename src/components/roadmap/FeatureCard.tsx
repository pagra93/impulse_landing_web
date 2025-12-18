"use client";

import { Feature } from "@/data/features";
import { ArrowBigUp, CheckCircle, Clock, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    const [hasVoted, setHasVoted] = useState(false);
    const [votes, setVotes] = useState(feature.votes);

    useEffect(() => {
        // Check local storage on mount
        const votedFeatures = JSON.parse(localStorage.getItem("votedFeatures") || "[]");
        if (votedFeatures.includes(feature.id)) {
            setHasVoted(true);
        }
    }, [feature.id]);

    const handleVote = () => {
        const votedFeatures = JSON.parse(localStorage.getItem("votedFeatures") || "[]");

        if (hasVoted) {
            // Remove vote
            setVotes((prev) => prev - 1);
            setHasVoted(false);
            const newVotedFeatures = votedFeatures.filter((id: string) => id !== feature.id);
            localStorage.setItem("votedFeatures", JSON.stringify(newVotedFeatures));
        } else {
            // Add vote
            setVotes((prev) => prev + 1);
            setHasVoted(true);
            votedFeatures.push(feature.id);
            localStorage.setItem("votedFeatures", JSON.stringify(votedFeatures));
        }
    };

    const getStatusConfig = (status: Feature["status"]) => {
        switch (status) {
            case "done":
                return { icon: CheckCircle, color: "text-green-500", bg: "bg-green-50", label: "Completed" };
            case "in-progress":
                return { icon: Hammer, color: "text-blue-500", bg: "bg-blue-50", label: "In Progress" };
            case "planned":
                return { icon: Clock, color: "text-gray-400", bg: "bg-gray-100", label: "Planned" };
        }
    };

    const statusConfig = getStatusConfig(feature.status);
    const StatusIcon = statusConfig.icon;

    return (
        <div className="group relative bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex gap-6">
                {/* Vote Button */}
                <button
                    onClick={handleVote}
                    className={cn(
                        "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200 h-20 w-16 shrink-0",
                        hasVoted
                            ? "border-[#FDE047] bg-[#FDE047]/10"
                            : "border-gray-100 bg-white hover:border-gray-200"
                    )}
                >
                    <ArrowBigUp
                        className={cn(
                            "w-8 h-8 transition-colors duration-200",
                            hasVoted ? "text-yellow-600 fill-yellow-600" : "text-gray-400"
                        )}
                    />
                    <span className={cn(
                        "font-bold text-sm",
                        hasVoted ? "text-yellow-700" : "text-gray-600"
                    )}>
                        {votes}
                    </span>
                </button>

                {/* Content */}
                <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-black transition-colors">
                            {feature.title}
                        </h3>
                        <div className={cn(
                            "flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shrink-0",
                            statusConfig.bg,
                            statusConfig.color
                        )}>
                            <StatusIcon size={14} />
                            {statusConfig.label}
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
