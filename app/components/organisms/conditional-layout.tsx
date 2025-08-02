"use client";

import { usePathname } from "next/navigation";
import Navbar from "../organisms/navbar/navbar";
import Footer from "../organisms/footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isComingSoonPage = pathname === "/";

  if (isComingSoonPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 md:pt-20">{children}</div>
      <Footer />
    </>
  );
}
