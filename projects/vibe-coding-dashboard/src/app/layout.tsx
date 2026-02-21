import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "30-Day Vibe Coding",
  description: "Track your 30-day vibe coding roadmap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-stone-50 text-stone-800">
        <div className="min-h-screen max-w-lg mx-auto px-4 py-6 flex flex-col">
          <header className="mb-6 flex items-center justify-between gap-4">
            <h1 className="text-xl font-semibold text-stone-800">
              30-Day Vibe Coding
            </h1>
            <a
              href="/roadmap"
              className="text-sm text-stone-500 hover:text-stone-700 whitespace-nowrap"
            >
              Full roadmap
            </a>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
