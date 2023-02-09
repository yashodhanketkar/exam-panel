import styles from "@/styles/components.module.css";
import Image from "next/image";

function getTimer(): string {
  return "4.5";
}

function getImageLink(): string {
  return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  return "/public/favicon.ico";
}

function getName(): string {
  return "John Doe";
}

export default function Info() {
  return (
    <div className={styles.info}>
      <img
        src={getImageLink()}
        alt="Profile picture"
        className={styles.infoPicture}
      />
      <div className={styles.infoTime}>
        Time Left:<span>{getTimer()}</span>
      </div>
      <div className={styles.infoName}>
        Name:<span>{getName()}</span>
      </div>
    </div>
  );
}
