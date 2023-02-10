"use client";

import AppContext from "@/app/appContext";
import styles from "@/styles/components.module.css";
import { useContext } from "react";

export default function Nav(props: any) {
  const { setSection } = props;
  const { section } = useContext(AppContext);

  const sections = [
    {
      name: "all",
      label: "All Sections",
    },
    {
      name: "physics",
      label: "PHYSICS",
    },
    {
      name: "chemistry",
      label: "CHEMISTRY",
    },
    {
      name: "maths",
      label: "MATHS",
    },
  ];

  let handleChange = (e: any) => {
    setSection(e.target.value);
  };

  let handleClass = (name: any) => {
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
