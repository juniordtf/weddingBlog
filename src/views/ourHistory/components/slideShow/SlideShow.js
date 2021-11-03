import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles.module.css";

const slideImages = [
  "https://drive.google.com/uc?id=10wSlJwr3xh-rW6bcYI4XDtCv9bRYQRLG",
  "https://drive.google.com/uc?id=1-GBO8GIJJZhABTMw2-KwGziWnhSPGLEZ",
  "https://drive.google.com/uc?id=1-XJT3omGN8QaAgCEaN4MKHukqpWdx3et",
  "https://drive.google.com/uc?id=1-xacd5m8BCA4C2SCkKG3vZG-ES3xNOhh",
  "https://drive.google.com/uc?id=1-xtZOKeWfNVdWgqILd4Kk7XlIRorxgUp",
  "https://drive.google.com/uc?id=1-yB_zOn02get5tzMXysPYz5rh7vTXlCw",
  "https://drive.google.com/uc?id=10-wwyD3gSYaKfB8ilmU4SyBw8OWoEsGx",
  "https://drive.google.com/uc?id=1-yqt7GZGNMSlVhlYU-GfYTQsf72jsNmq",
];

const SlideShow = () => {
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
