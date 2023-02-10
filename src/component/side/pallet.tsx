"use client";

import styles from "@/styles/components.module.css";
import AppContext from "@/app/appContext";
import { useContext } from "react";

export default function Pallet(props: any) {
  // const {  } = useContext(AppContext);
  let { response } = props;
  return (
    <>
      <div className={styles.pallet}>
        <p className={styles.palletHeading}>Question pallet</p>
        {Object.entries(response).map((key: any) => (
          <button
            className={`${styles.palletItems} ${key[1].status}`}
            key={key[0]}
          >
            {key[0]}
          </button>
        ))}
      </div>
    </>
  );
}
