"use client";

import styles from "@/styles/components.module.css";
import AppContext from "@/app/appContext";
import { useContext } from "react";

export default function Pallet(props: any) {
  // const { currentQuestion } = useContext(AppContext);
  let { response, handlePageLink } = props;

  // let handleOnClick = (e: any) => {
  //   setPageNumber(e.target.value);
  // };

  return (
    <>
      <div className={styles.pallet}>
        <p className={styles.palletHeading}>Question pallet</p>
        {Object.entries(response).map((key: any) => (
          <button
            // onClick={(e) => handleOnClick(e)}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handlePageLink(e)
            }
            value={key[0]}
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
