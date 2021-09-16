import React from "react";
import styles from "./styles.module.css";

export default function MessagesView(): React$Element<*> {
  return (
    <div className={styles.messagesView}>
      <p className={styles.title}>Recados</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
    </div>
  );
}
