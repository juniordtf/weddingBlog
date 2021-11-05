import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import { WEDDING_BLOG_RECAPTCHA_KEY } from "../../config/local.env.js";

export default function Rsvp(): React$Element<*> {
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const cardinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function onChange(value) {
    console.log("Captcha value:", value);
    setIsSubmitBtnDisabled(false);
  }

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
          <div className={styles.formItemUp}>
            <div className={styles.LeftSide}>
              <label className={styles.label}>Você irá ao evento?</label>
            </div>
            <div className={styles.RightSide}>
              <label className={styles.label}>
                <input type="radio" value="Sim" name="confirmation" />
                <span>Sim</span>
              </label>
              <label className={styles.label}>
                <input type="radio" value="Não" name="confirmation" />
                <span>Não</span>
              </label>
            </div>
          </div>
          <div className={styles.formItemBottom}>
            <div className={styles.LeftSide}>
              <label for="peopleNumber" className={styles.label}>
                Quantidade de adultos incluindo você:
              </label>
            </div>
            <div className={styles.RightSide}>
              <select
                id="peopleNumber"
                name="peopleNumber"
                className={styles.dropDown}
              >
                {cardinalNumbers.map((index) => (
                  <option value={index}>{index}</option>
                ))}
              </select>
            </div>
          </div>
          <label className={styles.label}>Observações</label>
          <textarea className={styles.messageInputField} />
          <ReCAPTCHA sitekey={WEDDING_BLOG_RECAPTCHA_KEY} onChange={onChange} />
          <div className={styles.submitContainer}>
            <input
              type="submit"
              value="Enviar"
              disabled={isSubmitBtnDisabled}
              onClick={() => submit()}
            />
          </div>
        </form>
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}
