import React from "react";
import styles from "./styles.module.css";
import HistoryDecorator from "./assets/history-decorator.png";
import Groom from "./assets/groom.png";
import Bride from "./assets/bride.png";
import SlideShow from "./components/slideShow/SlideShow";

export default function OurHistoryView(): React$Element<*> {
  return (
    <div className={styles.ourHistoryView}>
      <p className={styles.title}>Nossa História</p>
      <img
        src={HistoryDecorator}
        alt=" History Decorator"
        className={styles.decorator}
      />
      <div className={styles.mainImagesContainer}>
        <img src={Bride} alt=" Bride" className={styles.leftImage} />
        <img src={Groom} alt=" Groom" className={styles.rightImage} />
      </div>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec maximus
        est, id aliquet orci. Sed lacus mauris, placerat dignissim ante a,
        semper tempus sem. Cras cursus nec neque condimentum pharetra. Ut
        posuere faucibus scelerisque. Suspendisse quis leo ac tortor egestas
        laoreet. Pellentesque faucibus finibus nisl, eu volutpat neque ornare
        molestie. Duis lacinia nunc non ullamcorper lacinia. Duis justo dui,
        venenatis ac lectus et, pellentesque ornare est. Mauris dictum sagittis
        tincidunt. Quisque auctor, lacus sed finibus consectetur, lorem risus
        ullamcorper augue, nec consequat neque nisi ut lorem. Phasellus euismod
        est vehicula neque aliquet blandit. Aliquam justo dolor, pharetra eu
        nulla pharetra, mollis scelerisque lacus. Nam posuere tellus sit amet
        nulla dapibus, id eleifend est bibendum. Phasellus porta gravida tellus
        in venenatis. Phasellus eu nisi accumsan, iaculis elit non, sodales
        odio. Proin ac aliquet diam. Quisque tincidunt laoreet turpis, sed
        sollicitudin quam facilisis in. Cras commodo congue tellus, commodo
        fermentum sem varius vel. Aliquam at sem non elit tincidunt molestie.
        Fusce auctor facilisis elit ac sollicitudin.
      </p>
      <SlideShow />
      <div className={styles.emptyDiv} />
    </div>
  );
}
