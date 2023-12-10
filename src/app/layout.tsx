import { Footer, Header } from "@/components/MainUI";
import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Exam-Panel",
  description: "Exam panel with redux and tailwind",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden flex flex-col justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
