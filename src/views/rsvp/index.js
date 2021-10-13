import React from "react";
import styles from "./styles.module.css";

export default function Rsvp(): React$Element<*> {
  return (
    <div className={styles.rsvp}>
      <p className={styles.title}>Confirme sua presença</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
    </div>
  );
}
