// @flow
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import SerraDaMoeda from "./assets/serraDaMoeda.png";
import HeartDivider from "./assets/heart-divider.png";
import { CountDown } from "../../components";

export default function HomeView(): React$Element<*> {
  const [isMobile, setIsMobile] = useState(true);
  const [mobileWidth, setMobileWidth] = useState(320);

  useEffect((): void => {
    getWidth();
  }, []);

  async function getWidth() {
    try {
      const result = await JSON.parse(localStorage.getItem("isMobile"));
      console.log(result);
      setIsMobile(result);

      if (result) {
        const width = await JSON.parse(localStorage.getItem("mobileWidth"));
        console.log(width);
        setMobileWidth(width);
      }
    } catch {
      console.log("Error retrieving mobile with");
    }
  }

  return (
    <div className={styles.homeView}>
      <img src={SerraDaMoeda} alt="Mountains" className={styles.mainImage} />
      <p className={styles.title}>Raíssa & Djalma</p>
      <p className={styles.title2}>03.09.22 às 16 hrs</p>
      <CountDown
        timeTillDate="09 03 2022, 4:00 pm"
        timeFormat="MM DD YYYY, h:mm a"
      />
      <p className={styles.bodyText}>
        Como vocês já sabem, um dos dias mais marcantes da nossa história está
        chegando!
      </p>
      <p className={styles.bodyText}>
        Vocês fazem parte dessa história e já compartilhamos muitos momentos
        especiais juntos. Assim, ficaremos muito felizes em desfrutar desse dia
        com vocês!
      </p>
      <p className={styles.bodyText}>
        Criamos esse site para que vocês possam ter acesso às principais
        informações a respeito da cerimônia e da celebração do nosso casamento.
      </p>
      <p className={styles.bodyText}>
        Por isso, além de um pouquinho da nossa história, aqui vocês também
        encontrarão dicas de hospedagem, deslocamento, salões de beleza, traje
        etc.
      </p>
      <p className={styles.bodyText}>
        Ah, é importante confirmar sua presença. Contamos com sua ajuda
        preenchendo os dados necessários no campo "Confirme sua presença". (Por
        favor, lembrem-se disso! ❤)
      </p>
      <p className={styles.bodyText}>
        A contagem regressiva começa e aguardamos ansiosos!
      </p>
      <iframe
        className={styles.youtubeVideo}
        width={isMobile ? mobileWidth - 20 : 520}
        src="https://www.youtube.com/embed/-HGX_phi6WA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <img
        src={HeartDivider}
        alt="Heart Divider"
        className={styles.bottomImage}
      />
      <div className={styles.emptyDiv} />
    </div>
  );
}
