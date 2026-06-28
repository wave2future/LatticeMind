import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className={`mx-auto w-full px-6 py-8 ${wide ? "max-w-[1480px]" : "max-w-[1320px]"}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
