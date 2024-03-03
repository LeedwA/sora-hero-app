import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
