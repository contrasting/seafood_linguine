import type { Metadata } from "next";
import Providers from "@/app/components/providers";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://seafoodlinguine.com"),
  title: {
    default: "Seafood Linguine",
    template: "%s — Seafood Linguine",
  },
  description: "An ongoing field guide to seafood linguine, one plate at a time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
