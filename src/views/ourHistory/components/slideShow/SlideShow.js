import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles.module.css";

const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const SlideShow = () => {
  return (
    <div className={styles.slideContainer}>
      <Slide>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
