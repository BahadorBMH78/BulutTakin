"use client";
import styles from "./index.module.css";
import Cards from "./cards";
import Aside from "./aside";

export default function Body() {
  ////////////////////////////////////////////////////// constants ///////////////////////////////
  ////////////////////////////////////////////////////// functions ///////////////////////////////

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <section className={styles.section}>
      <h1>Welcome Bahador</h1>
      <div className={styles.container}>
        <Cards />
        <Aside />
      </div>
    </section>
  );
}
