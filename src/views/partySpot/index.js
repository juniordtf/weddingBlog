import React from "react";
import styles from "./styles.module.css";
import PartySpot from "./assets/partySpot.png";

export default function PartySpotView(): React$Element<*> {
  return (
    <div className={styles.partySpotView}>
      <p className={styles.title}>Local</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <img src={PartySpot} alt="Party Spot" className={styles.mainImage} />
    </div>
  );
}
