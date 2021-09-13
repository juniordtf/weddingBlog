import React from "react";
import styles from "./styles.module.css";

export default function GiftListView(): React$Element<*> {
  return (
    <div className={styles.giftListView}>
      <p className={styles.title}>Lista de Presentes</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
    </div>
  );
}
