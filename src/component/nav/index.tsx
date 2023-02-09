"use client";

import Link from "next/link";
import styles from "@/styles/components.module.css";
import { usePathname } from "next/navigation";

function NavFactory(props: any) {
  const { path, name } = props;
  let className = () => {
    let currentPath = usePathname();
    return currentPath === path
      ? [styles.linkButton, styles.active].join(" ")
      : styles.linkButton;
  };

  return (
    <Link className={className()} href={path}>
      {name}
    </Link>
  );
}

export default function Nav() {
  const navs = [
    {
      path: "/",
      name: "All Sections",
    },
    {
      path: "/physics",
      name: "PHYSICS",
    },
    {
      path: "/chemistry",
      name: "CHEMISTRY",
    },
    {
      path: "/maths",
      name: "MATHS",
    },
  ];

  return (
    <>
      {navs.map((nav) => (
        <NavFactory path={nav.path} name={nav.name} />
      ))}
    </>
  );
}
