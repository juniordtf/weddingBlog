// @flow
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import SerraDaMoeda from "./assets/serraDaMoeda.png";
import HeartDivider from "./assets/heart-divider.png";
import { useWindowSize } from "../../hooks";

export default function HomeView(): React$Element<*> {
  const [isMobile, setIsMobile] = useState(true);

  useEffect((): void => {
    getWidth();
  }, []);

  async function getWidth() {
    try {
      const result = await JSON.parse(localStorage.getItem("isMobile"));
      console.log(result);
      setIsMobile(result);
    } catch {
      console.log("Error retrieving messages");
    }
  }

  return (
    <div className={styles.homeView}>
      <img src={SerraDaMoeda} alt="Mountains" className={styles.mainImage} />
      <p className={styles.title}>Raíssa & Djalma</p>
      <p className={styles.title2}>03.09.22</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
        est sem. Morbi facilisis feugiat ante vitae ultrices. Sed dictum
        vehicula condimentum. Aenean et mi rutrum, placerat dolor a, viverra
        elit. Donec efficitur dui vel enim viverra pharetra. Donec a arcu ut
        arcu faucibus mollis. Nullam vehicula sed massa in gravida. Etiam
        rhoncus molestie ex eu vehicula. Nulla sit amet imperdiet turpis.
        Praesent dapibus erat nec interdum auctor. Mauris placerat dui eget
        lectus sagittis, a faucibus quam ultrices. Donec libero purus, malesuada
        ac bibendum eu, porta et urna. Suspendisse potenti. Sed facilisis non
        felis vitae ultrices. Sed euismod arcu sit amet massa auctor elementum.
        Phasellus nec lorem ante. Praesent ac augue risus. Quisque malesuada leo
        eget augue imperdiet condimentum.
      </p>
      <iframe
        className={styles.youtubeVideo}
        width={isMobile ? 300 : 520}
        src="https://www.youtube.com/embed/jiQiJ0WURZI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
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
