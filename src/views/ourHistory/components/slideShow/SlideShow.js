import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles.module.css";
import image01 from "../../assets/gallery/atacama-01.jpg";
import image02 from "../../assets/gallery/atacama-02.jpeg";
import image03 from "../../assets/gallery/central-park-01.jpg";
import image04 from "../../assets/gallery/foz-01.jpeg";
import image05 from "../../assets/gallery/gramado-01.jpg";
import image06 from "../../assets/gallery/moeda-01.jpeg";
import image07 from "../../assets/gallery/rio-01.jpg";
import image08 from "../../assets/gallery/time-square-01.jpg";
import image09 from "../../assets/gallery/topo-do-mundo-01.jpg";

const slideImages = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
];

const SlideShow = () => {
  useEffect((): void => {
    slideImages.forEach((slideImages) => {
      const img = new Image();
      img.src = slideImages.fileName;
    });
  }, []);

  return (
    <div className={styles.slideContainer}>
      <Slide>
        {slideImages.map((index) => (
          <div className={styles.eachSlide} key="index">
            <div style={{ backgroundImage: `url(${index})` }} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
