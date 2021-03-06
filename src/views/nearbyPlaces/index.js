import React from "react";
import styles from "./styles.module.css";
import Hotel01 from "./assets/pousadaMaravilhas.jpeg";
import Hotel02 from "./assets/cachoeiras-da-serra.jpeg";
import Hotel03 from "./assets/hotel_moedense.png";
import Hotel04 from "./assets/pousadaMoedaReal.jpeg";

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
          alt="Pousada Maravilhas"
          className={styles.leftImage}
        />
        <div className={styles.bodyContent}>
          <p className={styles.headingText}>Pousada Maravilhas da Serra</p>
          <p className={styles.cardText}>Endereço: Área Rural, Moeda/MG</p>
          <p className={styles.cardText2}>
            Reservas: 31 98584-0438 - falar com Natália.
          </p>
          <p className={styles.cardText}>Instagram: @pousadamaravilhas</p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          src={Hotel04}
          alt="Estalagem Moeda Real"
          className={styles.leftImage}
        />
        <div className={styles.bodyContent}>
          <p className={styles.headingText}>Pousada Estalagem Moeda Real</p>
          <p className={styles.cardText}>
            Estrada de Azevedo, s/n - Azevedo, Moeda/MG
          </p>
          <p className={styles.cardText2}>
            Reservas: 31 99626-3795 - falar com Jean.
          </p>
          <p className={styles.cardText}>Instagram: @estalagemmoedareal</p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          src={Hotel02}
          alt="Cachoeiras da Serra"
          className={styles.leftImage}
        />
        <div className={styles.bodyContent}>
          <p className={styles.headingText}>Cachoeiras da Serra</p>
          <p className={styles.cardText}>
            Endereço: Rod. Paulo Alves do Carmo, Km4 - Velha, Moeda/MG
          </p>
          <p className={styles.cardText2}>Reservas: 31 3309-7415</p>
          <p className={styles.cardText}>Instagram: @cachoeiras_da_serra</p>
        </div>
      </div>
      <div className={styles.row}>
        <img src={Hotel03} alt=" Hotel Moedense" className={styles.leftImage} />
        <div className={styles.bodyContent2}>
          <p className={styles.headingText}>Hotel Moedense</p>
          <p className={styles.cardText}>
            Endereço: Av. do Prateado, 200 - Moeda/MG
          </p>
          <p className={styles.cardText}>Telefone: (31) 3575-1030</p>
          <p className={styles.cardText}>Instagram: @hotelmoedense</p>
        </div>
      </div>
      <div className={styles.content2}>
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
