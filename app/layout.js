import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flowline",
  description: "Streamlined Project Management App",
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
            {/* HEADER OF THE WEBPAGE -> */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* FOOTER OF THE WEBPAGE -> */}
            <Footer />
            {/* <footer className="bg-[#0f0316] py-6">
              <div className="container mx-auto text-md text-center">
                <p>Made by Kshitij Singh Bisht (Hailex)😁</p>
              </div>
            </footer> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
