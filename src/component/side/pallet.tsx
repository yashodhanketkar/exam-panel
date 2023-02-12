"use client";

import styles from "@/styles/components.module.css";

interface palletProps {
  response: any[];
  handlePageLink: (e: any) => void;
}

export default function Pallet(props: palletProps) {
  let { response, handlePageLink } = props;

  return (
    <>
      <div className={styles.pallet}>
        <p className={styles.palletHeading}>Question pallet</p>
        {Object.entries(response).map((key: any) => (
          <button
            onClick={(e) => handlePageLink(e)}
            value={key[0]}
            className={`${styles.palletItems} ${key[1].status}`}
            key={key[0]}
          >
            {parseInt(key[0])}
          </button>
        ))}
      </div>
    </>
  );
}
