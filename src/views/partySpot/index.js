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
      <p className={styles.centeredText}>Fazenda Topo da Serra, Moeda/MG.</p>
      <img src={PartySpot} alt="Party Spot" className={styles.mainImage} />
      <p className={styles.bodyText}>
        Caso deseje utilizar GPS basta buscar no Google Maps ou Waze a frase
        "fazenda topo da serra moeda". A localização da fazenda é mostrada
        abaixo.
      </p>
      <div className={styles.mapContainer}>
        <MapContainer />
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}
