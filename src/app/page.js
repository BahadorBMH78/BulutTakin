"use client"

import styles from "./page.module.css";
import NavMenu from "@/components/navMenu";
import Body from "@/components/body";
import { useState } from "react";

export default function Home() {
  const [minimize, setMinimize] = useState(false);
  return (
    <main className={styles.main}>
      <NavMenu minimize={minimize} setMinimize={setMinimize}/>
      <Body minimize={minimize} setMinimize={setMinimize}/>
    </main>
  );
}
