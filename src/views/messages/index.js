import React from "react";
import styles from "./styles.module.css";

export default function MessagesView(): React$Element<*> {
  return (
    <div className={styles.messagesView}>
      <p className={styles.title}>Recados</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <div className={styles.messageInputContainer}>
        <form>
          <label className={styles.label}>Nome</label>
          <input className={styles.inputField} type="text" />
          <label className={styles.label}>Email</label>
          <input className={styles.inputField} type="text" />
          <label className={styles.label}>Recado</label>
          <textarea className={styles.messageInputField} />
          <div className={styles.submitContainer}>
            <input type="submit" value="Publicar" />
          </div>
        </form>
      </div>
      <div className={styles.emptyDiv} />
      <div className={styles.card}>
        <p className={styles.sender}>Bruna Aguiar</p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum
          maximus enim eu condimentum. Sed vel elementum nisl. Nulla facilisi.
          Curabitur et erat felis. Ut sit amet turpis a nisl tempor sagittis
          quis sed sapien. Class aptent taciti sociosqu ad.
        </p>
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}
