import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const robotoHeading = Roboto({subsets:['latin'],variable:'--font-heading'});

const ibmPlexSans = IBM_Plex_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skybit Backoffice | Admin Console",
  description: "Skybit Backoffice is the secure admin console for managing clients, services, team profiles, and contact submissions with real-time visibility and operational control.",
  metadataBase: new URL("https://skybit-admin.vercel.app"),
  alternates: {
    canonical: "https://skybit-admin.vercel.app/",
  },
  openGraph: {
    title: "Skybit Backoffice | Admin Console",
    description: "Admin operations for Skybit: manage clients, services, team, and submissions with real-time updates.",
    url: "https://skybit-admin.vercel.app/",
    siteName: "Skybit Backoffice",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skybit Backoffice | Admin Console",
    description: "Secure admin operations for Skybit with real-time data management.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        ibmPlexSans.variable,
        robotoHeading.variable
      )}
    >
      <body className="min-h-full flex flex-col">
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
