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
        Tudo começou em 2012, na despedida de um amigo em comum. No início era
        só uma amizade, mas graças ao incidente com a mesa da Xênia (rsrs), a
        amizade abriu espaço para um beijo, e, em janeiro de 2013, nosso namoro
        começou.
      </p>
      <p className={styles.bodyText}>
        Poucos meses depois, veio o intercâmbio do Djalma para os Estados Unidos
        e a distância, que nas férias de 2013/2014 foi encurtada.
      </p>
      <p className={styles.bodyText}>
        Desde então foram muitos momentos felizes, muitas outras viagens,
        festas, bares, celebrações e séries do Netflix.
      </p>
      <p className={styles.bodyText}>
        Até que em outubro de 2019 veio o pedido de casamento. Agora queremos
        celebrar com vocês a nossa união e desejamos poder escrever muitas belas
        histórias juntos!
      </p>
      <div className={styles.emptyDiv2} />
      <SlideShow />
      <div className={styles.emptyDiv} />
    </div>
  );
}
