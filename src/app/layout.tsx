import MainUI from "@/component/MainUI";
import "@/styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MainUI>{children}</MainUI>
      </body>
    </html>
  );
}
