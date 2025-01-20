import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import UserLoading from "@/components/UserLoading";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowline",
  description: "Streamlined Project Management App",
  icons: {
    icon: [
      // Android Icons
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicon/android-chrome-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicon/android-chrome-512x512.png" },

      // Apple Icons
      { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-touch-icon.png" },

      // Favicon Icons
      { rel: "icon", type: "image/ico", url: "/favicon/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png" },
    ],
  },
  manifest: '/favicon/site.webmanifest.json',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    appearance={{
      baseTheme: shadesOfPurple,
      // variables: {
      //   colorPrimary: "#3b82f6",
      //   colorBackground: "#1a202c",
      //   colorInputBackground: "#2D3748",
      //   colorInputText: "#F3F4F6",
      // },
      // elements: {
      //   formButtonPrimary: "text-white",
      //   card: "bg-gray-800",
      //   headerTitle: "text-blue-400",
      //   headerSubtitle: "text-gray-300",
      // },
    }}
    >
      <html lang="en">
        <body className={`${inter.className} dotted-bg`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <UserLoading />
            {/* HEADER OF THE WEBPAGE -> */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* FOOTER OF THE WEBPAGE -> */}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
