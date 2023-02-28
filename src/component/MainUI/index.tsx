import styles from "@/styles/mainui.module.css";

interface mainuiProps {
  children: React.ReactElement;
}

export default function MainUI(props: mainuiProps) {
  const { children } = props;
  const headerClass = [styles.mainui, styles.header];
  const footerClass = [styles.mainui, styles.footer];

  return (
    <>
      <header className={headerClass.join(" ")}>DEMO ONLINE TEST</header>
      <main className={styles.main}>{children}</main>
      <footer className={footerClass.join(" ")}>©Yashodhan Ketkar</footer>
    </>
  );
}
