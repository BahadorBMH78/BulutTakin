import Image from "next/image";
import styles from "./page.module.css";
import NavMenu from "@/components/navMenu";
import Body from "@/components/body";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavMenu />
      <Body />
    </main>
  );
}
