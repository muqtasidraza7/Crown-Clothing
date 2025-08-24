import "./globals.css";
import { ProductProvider } from "./store/ItemsStore";
import Navigation from "./components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body>
          <ProductProvider>
            <Navigation />
            {children}
          </ProductProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
