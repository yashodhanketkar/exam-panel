import styles from "@/styles/components.module.css";

export default function Controls() {
  return (
    <>
      <button className={styles.controlButton}>CLEAR RESPONSES</button>
      <button className={styles.controlButton}>REVIEW</button>
      <button className={styles.controlButton}>DUMP</button>
      <button className={styles.controlButton}>PREVIOUS</button>
      <button className={styles.controlButton}>NEXT</button>
    </>
  );
}
