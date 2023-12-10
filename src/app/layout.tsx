import { Footer, Header } from "@/components/MainUI";
import { ReduxWrapper } from "@/context/wrapper";
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
        <main className="flex-grow">
          <ReduxWrapper>{children}</ReduxWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
