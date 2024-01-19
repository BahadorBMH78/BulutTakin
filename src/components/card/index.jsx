import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";

export default function Card({ children, width, height, noPadding, radius }) {
  ////////////////////////////////////////////////////// constants ///////////////////////////////

  ////////////////////////////////////////////////////// functions ///////////////////////////////

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <div className={styles.container} style={{ width, height, padding: noPadding ? 0 : 16, borderRadius: radius}}>
      {children}
    </div>
  );
}
