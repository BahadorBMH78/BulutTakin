import styles from "./index.module.css";

export default function Button({ title }) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
}
