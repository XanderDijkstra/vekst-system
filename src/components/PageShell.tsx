import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  children: ReactNode;
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
