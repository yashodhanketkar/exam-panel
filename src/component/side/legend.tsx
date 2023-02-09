import styles from "@/styles/components.module.css";
import Link from "next/link";

function LegendPopUp(props: any) {
  const { questions, section } = props;
  return (
    <div className={styles.popUp}>
      <p className={styles.legendHeading}>
        {questions} {section} Questions
      </p>
      <button className={styles.legendButton}>Profile</button>
      <button className={styles.legendButton}>Profile</button>
      <button className={styles.legendButton}>Questions</button>
      <button className={styles.legendButton}>Submit</button>
    </div>
  );
}

export default function Legend() {
  const answers = 4;
  const questions = 10;
  const section = "All";

  return (
    <>
      <div className={styles.legend}>
        <p className={styles.legendHeading}>
          Legend (<Link href="/">click to view</Link>)
        </p>
        <span className={styles.legendItems}>{answers} Answers</span>
        <span className={styles.legendItems}>{answers} Answers</span>
        <span className={styles.legendItems}>{answers} Answers</span>
        <span className={styles.legendItems}>{answers} Answers</span>
        <span className={styles.legendItems}>{answers} Answers</span>
        <span className={styles.legendItems}>{answers} Answers</span>
        <LegendPopUp questions={questions} section={section} />
      </div>
    </>
  );
}
