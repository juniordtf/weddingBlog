import React from "react";
import styles from "./styles.module.css";

export default function GiftListView(): React$Element<*> {
  return (
    <div className={styles.giftListView}>
      <p className={styles.title}>Lista de Presentes</p>
      <p className={styles.bodyText}>
        {" "}
        Temos listas de presentes nos sites Icasei e QuerodeCasamento. Click nos
        links abaixo para acessá-las.
      </p>
      <div className={styles.linksArea}>
        <a
          className={styles.linkText}
          href="https://sites.icasei.com.br/raissaedjalma/pages/27050363"
        >
          Icasei
        </a>
        <a
          className={styles.linkText}
          href="https://www.querodecasamento.com.br/lista-de-casamento/raissa--djalma"
        >
          Quero de casamento
        </a>
      </div>
    </div>
  );
}
