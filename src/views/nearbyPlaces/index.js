import React from "react";
import styles from "./styles.module.css";
import Hotel01 from "./assets/flor-da-vida.png";
import Hotel02 from "./assets/hotel_moedense.png";

export default function NearbyPlacesView(): React$Element<*> {
  return (
    <div className={styles.nearbyPlacesView}>
      <p className={styles.title}>Onde Ficar</p>
      <p className={styles.bodyText}>
        A fazenda Topo da Serra está localizada na Serra de Moeda a 55 km de
        Belo Horizonte. Entretanto, por questões de conforto e praticidade é
        recomendável se hospedar em Moeda. Sendo assim, recomendamos as
        seguintes opções de hospedagem:
      </p>
      <div className={styles.row}>
        <img
          src={Hotel01}
          alt=" Hotel Serra da Moeda"
          className={styles.leftImage}
        />
        <div className={styles.bodyContent}>
          <p className={styles.headingText}>Pousada Flor da Vida</p>

          <p className={styles.cardText}>
            Endereço: Área Rural, Fazenda Bela Vista, Moeda/MG
          </p>
          <p className={styles.cardText}>Instagram: @flordavidaholistico</p>
        </div>
      </div>
      <div className={styles.row}>
        <img src={Hotel02} alt=" Hotel Moedense" className={styles.leftImage} />
        <div className={styles.bodyContent}>
          <p className={styles.headingText}>Hotel Moedense</p>
          <p className={styles.cardText}>
            Endereço: Av. do Prateado, 200 - Moeda, MG, 35470-000
          </p>
          <p className={styles.cardText}>Telefone: (31) 3575-1030</p>
          <p className={styles.cardText}>Instagram: @hotelmoedense</p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.headingText}>Vans</p>
        <p className={styles.bodyText}>
          As vans são uma ótima opção para quem quiser voltar pra casa no mesmo
          dia sem correr riscos na estrada. Além disso, para os que se
          hospedarem em Moeda haverá vans para levar e buscar nas pousadas.
        </p>
      </div>
    </div>
  );
}
