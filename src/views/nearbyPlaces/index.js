import React from "react";
import styles from "./styles.module.css";

export default function NearbyPlacesView(): React$Element<*> {
  return (
    <div className={styles.nearbyPlacesView}>
      <p className={styles.title}>Onde Ficar</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
    </div>
  );
}
