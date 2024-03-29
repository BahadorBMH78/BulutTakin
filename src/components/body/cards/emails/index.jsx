import Image from "next/image";
import styles from "./index.module.css";
import Card from "@/components/card";

export default function Emails() {
  ////////////////////////////////////////////////////// constants ///////////////////////////////

  const persons = [0, 0, 0, 0, 0];
  ////////////////////////////////////////////////////// functions ///////////////////////////////

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {persons.map((item, index) => {
          return (
            <Card type="email" key={index}>
              <div className={styles.cardContainer}>
                <Image
                  src="/download.jpeg"
                  width={40}
                  height={40}
                  className={styles.profile_pic}
                />
                <div className={styles.grid}>
                  <p>Tom</p>
                  <p>Meeting scheduled</p>
                  <p>Dec 19 at 6:11 PM</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
