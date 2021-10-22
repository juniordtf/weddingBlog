import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function Rsvp(): React$Element<*> {
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");

  function submit() {}

  return (
    <div className={styles.rsvp}>
      <p className={styles.title}>Confirme sua presença</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <div className={styles.messageInputContainer}>
        <form>
          <label className={styles.label}>Nome Completo</label>
          <input
            className={styles.inputField}
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputField}
            type="text"
            placeHolder="exemplo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.label}>Você irá ao evento?</label>
          <label>
            <input type="radio" value="Sim" name="confirmation" />
            <span>Sim</span>
          </label>
          <label>
            <input type="radio" value="Não" name="confirmation" />
            <span>Não</span>
          </label>
          <div className={styles.submitContainer}>
            <input type="submit" value="Enviar" onClick={() => submit()} />
          </div>
        </form>
      </div>
    </div>
  );
}
