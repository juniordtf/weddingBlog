import React from "react";
import styles from "./styles.module.css";
import PartySpot from "./assets/partySpot.png";
import Pin from "./assets/pin.png";
import { MapContainer } from "../../components";

export default function PartySpotView(): React$Element<*> {
  return (
    <div className={styles.partySpotView}>
      <div className={styles.titleContainer}>
        <img src={Pin} alt="Pin" className={styles.pinImage} />
        <p className={styles.title}>Local</p>
      </div>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <img src={PartySpot} alt="Party Spot" className={styles.mainImage} />
      <div className={styles.mapContainer}>
        <MapContainer />
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}
