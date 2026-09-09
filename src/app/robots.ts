import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

/**
 * Generative-engine crawlers are listed explicitly. Several of them
 * (Google-Extended, Applebot-Extended, meta-externalagent) do not control
 * indexing at all — they control whether the content may be used for AI
 * answers and training. Staying silent is treated as a signal by some of them,
 * so allowing them is a deliberate choice, not a default.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
