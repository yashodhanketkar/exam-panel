import styles from "@/styles/page.module.css";

export default function Comp() {
  return (
    <>
      <div className="row">
        <p className={styles.serial}>Hello</p>
        <p className={styles.options}>world</p>
      </div>
      <div className="row">
        <h1>Hello</h1>
      </div>
      <div className="row">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, amet
          voluptas vel facere eaque dolorum veritatis explicabo aperiam laborum
          nulla quae! Ex qui dolorem, minima delectus voluptatem praesentium
          aliquid quia!
        </p>
      </div>
    </>
  );
}
