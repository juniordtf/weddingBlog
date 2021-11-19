import React, { useState } from "react";
import styles from "./styles.module.css";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import Swal from "sweetalert2";
import {
  WEDDING_BLOG_RECAPTCHA_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_USER_ID,
} from "../../config/local.env.js";
import emailjs from "emailjs-com";

export default function Rsvp(): React$Element<*> {
  const cardinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const confirmationOptions = ["Sim", "Não"];
  const initialData = {
    from_name: "",
    to_name: "Raissa e Djalma",
    email: "",
    confirmation: "",
    peopleNumber: "",
    message: "",
  };
  const [toSend, setToSend] = useState(initialData);
  const [isRecaptchaTokenValid, setRecaptchaTokenValid] = useState(false);
  let errors = {};

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptchaTokenValid(true);
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (handleValidation(toSend)) {
      if (isRecaptchaTokenValid) {
        emailjs
          .send(
            EMAIL_JS_SERVICE_ID,
            EMAIL_JS_TEMPLATE_ID,
            toSend,
            EMAIL_JS_USER_ID
          )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            errors = {};
            setToSend(initialData);
            Swal.fire(
              "Formulário enviado!",
              "Obrigado pelo contato.",
              "success"
            );
          })
          .catch((err) => {
            console.log("FAILED...", err);
            errors = {};
            Swal.fire(
              "Formulário não pôde ser enviado!",
              "Tente novamente mais tarde.",
              "error"
            );
          });
      }
      setRecaptchaTokenValid(false);
    } else {
      let text = "";

      if (errors.name !== undefined) text = errors.name + "<br />";
      if (errors.email !== undefined) text += errors.email + "<br />";
      if (errors.confirmation !== undefined)
        text += errors.confirmation + "<br />";

      new Swal({
        title: "Erro",
        type: "error",
        html: text,
        icon: "error",
      });
    }
  };

  function handleValidation(toSend) {
    let formIsValid = true;

    //Name
    if (toSend.from_name.trim() === "") {
      formIsValid = false;
      errors["name"] = "O nome é obrigatório";
    }

    if (toSend.from_name.trim() !== "" && toSend.from_name !== undefined) {
      if (!toSend.from_name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "O campo nome deve conter apenas letras";
      }
    }

    //Email
    if (toSend.email.trim() === "") {
      formIsValid = false;
      errors["email"] = "O email é obrigatório";
    }

    if (toSend.email.trim() !== "" && toSend.email !== undefined) {
      let lastAtPos = toSend.email.lastIndexOf("@");
      let lastDotPos = toSend.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          toSend.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          toSend.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "O email fornecido não é válido";
      }
    }

    //Confirmation
    if (toSend.confirmation !== "Sim" && toSend.confirmation !== "Não") {
      formIsValid = false;
      errors["confirmation"] = "Por favor, informe se irá à festa";
    }

    return formIsValid;
  }

  return (
    <div className={styles.rsvp}>
      <p className={styles.title}>Confirme sua presença</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <div className={styles.messageInputContainer}>
        <form onSubmit={sendEmail}>
          <label className={styles.label}>Nome Completo</label>
          <input
            className={styles.inputField}
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputField}
            type="text"
            placeHolder="exemplo@mail.com"
            name="email"
            value={toSend.email}
            onChange={handleChange}
          />
          <div className={styles.formItemUp}>
            <div className={styles.LeftSide}>
              <label className={styles.label}>Você irá ao evento?</label>
            </div>
            <div className={styles.RightSide}>
              {confirmationOptions.map((index) => (
                <label className={styles.label}>
                  <input
                    type="radio"
                    name="confirmation"
                    value={index}
                    onChange={handleChange}
                  />
                  <span>{index}</span>
                </label>
              ))}
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
                value={toSend.peopleNumber}
                onChange={handleChange}
                className={styles.dropDown}
              >
                {cardinalNumbers.map((index) => (
                  <option value={index}>{index}</option>
                ))}
              </select>
            </div>
          </div>
          <label className={styles.label}>Observações</label>
          <textarea
            className={styles.messageInputField}
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <div className={styles.recaptcha}>
            <ReCAPTCHA
              sitekey={WEDDING_BLOG_RECAPTCHA_KEY}
              onChange={onChange}
            />
          </div>
          <div className={styles.submitContainer}>
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
      <div className={styles.emptyDiv} />
    </div>
  );
}
