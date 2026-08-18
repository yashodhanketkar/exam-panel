import { Footer, Header } from "@/components/MainUI";
import { ReduxWrapper } from "@/context/wrapper";
import { Metadata } from "next";
import "./global.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Exam-Panel",
  description: "Exam panel with redux and tailwind",
};

export default function RootLayout({ children }: any) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-screen w-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <ReduxWrapper>{children}</ReduxWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
