import styles from "./index.module.css";
import Cards from "./cards";
import Aside from "./aside";

export default function Body({ minimize }) {
  ////////////////////////////////////////////////////// constants ///////////////////////////////
  ////////////////////////////////////////////////////// functions ///////////////////////////////

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <section
      className={styles.section}
      style={{ transform: minimize ? "translateX(90px)" : "translateX(210px)" }}
    >
      <h1>Welcome Bahador</h1>
      <div className={styles.container}>
        <Cards />
        <Aside />
      </div>
    </section>
  );
}
