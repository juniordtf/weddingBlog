import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles.module.css";

const slideImages = [
  "https://drive.google.com/uc?id=10wSlJwr3xh-rW6bcYI4XDtCv9bRYQRLG",
  "https://drive.google.com/uc?id=1-GBO8GIJJZhABTMw2-KwGziWnhSPGLEZ",
  "https://drive.google.com/uc?id=1-XJT3omGN8QaAgCEaN4MKHukqpWdx3et",
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
