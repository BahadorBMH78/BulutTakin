import Image from "next/image";
import styles from "./../index.module.css";
import Card from "@/components/card";
import Button from "../../button";

export default function Aside() {
  ////////////////////////////////////////////////////// constants ///////////////////////////////
  const header_items = [
    "/calendar.svg",
    "/notification-bing.svg",
    "/message-notif.svg",
  ];

  const toDoList = [0, 0, 0, 0];

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <div>
      <Card type="aside" width="303px" height="fit-content">
        <div className={styles.stats}>
          <div className={styles.header}>
            {header_items.map((item, index) => {
              return <Image key={index} src={item} width={28} height={28} />;
            })}
            <Image
              src={"/download.jpeg"}
              width={42}
              height={42}
              className={styles.profile_pic}
            />
            <Image
              src={"/arrow-down.svg"}
              width={24}
              height={24}
              className={styles.profile_pic}
            />
          </div>
          <div className={styles.inner_card}>
            <div className={styles.status_container}>
              <h1>Formation status</h1>
              <h2>In progress</h2>
              <div className={styles.progress_bar}>
                <div className={styles.progress}></div>
              </div>
              <h2>Estimated processing</h2>
              <h3>4-5 business days</h3>
              <Button title="View status" />
            </div>
          </div>
          <h1>Your to-Do list</h1>
          <div className={styles.toDoList}>
            {toDoList.map((item, index) => {
              return (
                <div key={index} className={styles.toDoItem}>
                  <Image src="/bookmark.svg" width={40} height={40} />
                  <div>
                    <h2>Run payroll</h2>
                    <h4>Mar 4 at 6:00 pm</h4>
                  </div>
                </div>
              );
            })}
            <div>
              <h2>Board meeting</h2>
              <h3>Feb 22 at 6:00 PM</h3>
              <p>
                You have been invited to attend a meeting of the Boeard
                Diretors.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
