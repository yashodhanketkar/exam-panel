import { Inter } from "@next/font/google";
import styles from "@/styles/page.module.css";
import Side from "@/component/side";
import Nav from "@/component/nav";
import Controls from "@/component/controls";
import Comp from "./comp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Nav />
        </nav>
        <div className={styles.side}>
          <Side />
        </div>
        <div className={styles.content}>
          <Comp />
        </div>
        <div className={styles.controls}>
          <Controls />
        </div>
      </main>
      ;
    </>
  );
}
