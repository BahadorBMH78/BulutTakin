import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";

export default function NavMenu({ minimize, setMinimize }) {
  ////////////////////////////////////////////////////// constants ///////////////////////////////
  const items = [
    { name: "Dashboard", icon: "/home.svg" },
    { name: "Report", icon: "/report.svg" },
    { name: "Bank", icon: "/bank.svg" },
    { name: "Email", icon: "/email.svg" },
    { name: "Group", icon: "/group.svg" },
    { name: "List", icon: "/list.svg" },
    { name: "Finance", icon: "/finance.svg" },
  ];

  const [active, setActive] = useState({
    Dashboard: true,
    Report: false,
    Bank: false,
    Email: false,
    Group: false,
    List: false,
    Finance: false,
    Settings: false,
  });

  ////////////////////////////////////////////////////// functions ///////////////////////////////

  const setActiveTab = (tabName) => {
    setActive((prevState) => {
      const newTabsState = {};
      Object.keys(prevState).forEach((key) => {
        newTabsState[key] = false;
      });
      newTabsState[tabName] = true;
      setActive(newTabsState);
    });
  };

  ////////////////////////////////////////////////////// render ///////////////////////////////

  return (
    <main className={styles.main}>
      <aside
        className={styles.aside}
        style={{ width: minimize ? "90px" : "205px" }}
      >
        <div className={styles.logo}>
          <Image src="/logo.svg" width={46} height={27} />
        </div>
        <div className={styles.circle} onClick={() => setMinimize(!minimize)}>
          <Image
            src="/Vector.svg"
            width={10}
            height={12}
            style={{ transform: minimize ? "rotate(180deg)" : "none" }}
          />
        </div>
        <div className={styles.nav}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.itemsContainer}
                onClick={() => setActiveTab(item.name)}
              >
                <div className={styles.item}>
                  <div
                    className={styles.active}
                    style={{
                      opacity: active && active[item.name] ? 1 : 0,
                    }}
                  />
                  <div
                    className={styles.icon}
                    style={{ paddingLeft: minimize ? "20px" : 0 }}
                  >
                    <Image src={item.icon} fill />
                  </div>
                  <div className={styles.name}>
                    <p>{item.name}</p>
                    <div
                      className={styles.underLine}
                      style={{
                        opacity: active && active[item.name] ? 1 : 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.settings}>
          <div
            className={styles.itemsContainer}
            onClick={() => setActiveTab("Settings")}
          >
            <div className={styles.item}>
              <div
                className={styles.active}
                style={{
                  opacity: active && active["Settings"] ? 1 : 0,
                }}
              />
              <div
                className={styles.icon}
                style={{ paddingLeft: minimize ? "20px" : 0 }}
              >
                <Image src="/settings.svg" fill />
              </div>
              <div
                className={styles.name}
                style={{ opacity: minimize ? 0 : 1 }}
              >
                <p>Settings</p>
                <div
                  className={styles.underLine}
                  style={{
                    opacity: active && active["Settings"] ? 1 : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
