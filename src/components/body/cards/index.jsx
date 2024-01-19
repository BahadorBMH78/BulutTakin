import Image from "next/image";
import styles from "./../index.module.css";
import Card from "@/components/card";
import useWindowDimensions from "../../getDimensions";
import Chart from "@/components/chart";
import Emails from "./emails";

export default function Body() {
  ////////////////////////////////////////////////////// constants ///////////////////////////////
  const { width } = useWindowDimensions();
  const cards = [
    { name: "Your bank balance", balance: "$143.223" },
    { name: "Your Tax", balance: "$43.110" },
    { name: "Employees working today", balance: "24" },
    { name: "This week`s card spending", balance: "$3.287" },
  ];
  ////////////////////////////////////////////////////// functions ///////////////////////////////

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <div className={styles.half1}>
      <div className={styles.cardsRow}>
        {cards.map((item, index) => {
          return (
            <Card
              width={width <= 1700 ? "150px" : "196px"}
              height={width <= 1700 ? "124px" : "162px"}
              key={index}
            >
              <div
                className={styles.cardBody}
                style={{ gap: width <= 1700 ? "0px" : "25px" }}
              >
                <Image src="/wallet.svg" width={24} height={24} />

                <p className={styles.balance}>{item.balance}</p>
                <p className={styles.title}>{item.name}</p>
              </div>
            </Card>
          );
        })}
      </div>
      <div className={styles.cardsRow}>
        <div className={styles.cardsColumn}>
          <Card height="110px" width="190px">
            <div
              className={styles.secondCardBody}
              style={{ gap: width <= 1700 ? "8px" : "25px" }}
            >
              <h2 className={styles.headTitle}>New Clients</h2>
              <div className={styles.percentageGreen}>
                <div>
                  <p>+18.7%</p>
                </div>
              </div>
              <p className={styles.number}>54</p>
            </div>
          </Card>
          <Card height="110px" width="190px">
            <div className={styles.secondCardBody} style={{ gap: "8px" }}>
              <h2 className={styles.headTitle}>New Clients</h2>
              <div className={styles.percentageRed}>
                <div>
                  <p>-2.7%</p>
                </div>
              </div>
              <p className={styles.number}>54</p>
            </div>
          </Card>
        </div>
        <div className={styles.chartContainer}>
          <Card width="100%" height="100%" noPadding>
            <Chart />
          </Card>
        </div>
      </div>
      <Emails />
    </div>
  );
}
