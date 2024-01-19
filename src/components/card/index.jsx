import styles from "./index.module.css";

export default function Card({ children, width, height, noPadding, radius }) {
  return (
    <div
      className={styles.container}
      style={{
        width,
        height,
        padding: noPadding ? 0 : 16,
        borderRadius: radius,
      }}
    >
      {children}
    </div>
  );
}
