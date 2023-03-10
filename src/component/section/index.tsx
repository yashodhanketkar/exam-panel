"use client";

import AppContext from "@/app/appContext";
import styles from "@/styles/components.module.css";
import { useContext } from "react";
import { sections } from "@/app/data/sampleData";

interface navProps {
  setSection: (e: any) => void;
}

export default function Nav(props: navProps) {
  const { setSection } = props;
  const { section } = useContext(AppContext);

  let handleChange = (e: any) => {
    setSection(e.target.value);
  };

  let handleClass = (name: any): string => {
    let setClassName = styles.linkButton;
    if (name === section) {
      setClassName += ` ${styles.active}`;
    }
    return setClassName;
  };

  return (
    <>
      {sections.map((sec, i) => (
        <button
          key={i}
          name={sec.label}
          value={sec.name}
          className={handleClass(sec.name)}
          onClick={(e) => handleChange(e)}
        >
          {sec.name}
        </button>
      ))}
    </>
  );
}
