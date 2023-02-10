import styles from "@/styles/components.module.css";
import Link from "next/link";

function LegendPopUp(props: any) {
  const { questions } = props;
  return (
    <div className={styles.popUp}>
      <p className={styles.legendHeading} style={{ justifyContent: "center" }}>
        {questions} Questions
      </p>
      <button className={styles.legendButton}>Profile</button>
      <button className={styles.legendButton}>Instr</button>
      <button className={styles.legendButton}>Questions</button>
      <button className={styles.legendButton}>Submit</button>
    </div>
  );
}

export default function Legend(props: any) {
  const questions = 10;
  const { response } = props;

  let answered = 0;
  let notVisited = 0;
  let reviewed = 0;
  let reviewedAnswered = 0;
  let dumped = 0;

  for (let res in response) {
    switch (response[res].status) {
      case "answered":
        answered++;
        break;
      case "reviewed":
        reviewed++;
        break;
      case "not-visited":
        notVisited++;
        break;
      case "reviewed answered":
      case "answered reviewed":
        reviewedAnswered++;
        break;
      case "dumped":
        dumped++;
        break;
      default:
        console.log("Error");
    }
  }

  return (
    <>
      <div className={styles.legend}>
        <p className={styles.legendHeading}>
          Legend (<Link href="/">click to view</Link>)
        </p>
        <span className={`${styles.legendItems} answered`}>
          {answered} Answered
        </span>
        <span className={`${styles.legendItems} not-visited`}>
          {notVisited} Not answered
        </span>
        <span className={`${styles.legendItems} reviewed`}>
          {reviewed} Reviewed
        </span>
        <span className={`${styles.legendItems} reviewed answered`}>
          {reviewedAnswered} Rev + Ans
        </span>
        <span className={`${styles.legendItems} dumped`}>{dumped} Dumped</span>
        <LegendPopUp questions={questions} />
      </div>
    </>
  );
}
