import styles from "./index.module.css";

export default function Card({
  children,
  width,
  height,
  noPadding,
  radius,
  type,
}) {
  return (
    <div
      className={
        type === "normal"
          ? styles.normal_card
          : type === "email"
          ? styles.email_card
          : type === "chart"
          ? styles.chart_card
          : styles.hoverless_card
      }
      style={{
        width,
        height,
      }}
    >
      {children}
    </div>
  );
}
