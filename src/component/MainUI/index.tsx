import styles from "@/styles/mainui.module.css";

export default function MainUI({ children }: any) {
  const headerClass = [styles.mainui, styles.header];
  const footerClass = [styles.mainui, styles.footer];

  return (
    <>
      <header className={headerClass.join(" ")}>DEMO ONLINE TEST</header>
      <main className={styles.main}>{children}</main>
      <footer className={footerClass.join(" ")}>©Addmen</footer>
    </>
  );
}
