import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/i18n/request.ts",
  experimental: {
    // Generates a typed declaration for every message key, so a typo like
    // t("hero.tilte") fails the build instead of rendering a raw key.
    createMessagesDeclaration: "./messages/es.json",
  },
});

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp"],
    // Device frames render between roughly 240 and 420 CSS px, browser frames
    // between 640 and 1000. The default deviceSizes ladder starts at 640 and
    // wastes bandwidth at the small end.
    imageSizes: [240, 320, 420, 512, 640, 828],
    minimumCacheTTL: 31_536_000,
    // Next 16 requires every non-default quality to be declared up front.
    qualities: [75, 90],
  },
};

export default withNextIntl(nextConfig);
