import styles from "@/styles/components.module.css";

export default function Pallet() {
  return (
    <>
      <div className={styles.pallet}>
        <p className={styles.palletHeading}>Question pallet</p>
        <span className={styles.palletItems}>1</span>
        <span className={styles.palletItems}>2</span>
        <span className={styles.palletItems}>3</span>
        <span className={styles.palletItems}>4</span>
        <span className={styles.palletItems}>5</span>
        <span className={styles.palletItems}>6</span>
      </div>
    </>
  );
}
