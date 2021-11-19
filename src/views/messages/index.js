import React, { useState, useEffect } from "react";
import { db } from "../../services/firebase.js";
import { ref, get, set, query, onValue } from "firebase/database";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import Swal from "sweetalert2";
import { WEDDING_BLOG_RECAPTCHA_KEY } from "../../config/local.env.js";

const emptyList: Object = [];

export default function MessagesView(): React$Element<*> {
  const [messages, setMessages] = useState(emptyList);
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isRecaptchaTokenValid, setRecaptchaTokenValid] = useState(false);
  const timeStamp = format(new Date(), "dd/MM/yyyy HH:mm:ss");
  let errors = {};

  async function getMessages() {
    const dbRef = ref(db, "/messages");
    await get(query(dbRef));
    onValue(query(dbRef), (snapshot) => {
      const messagesSnapshot = snapshot.val();
      const messages = Object.values(messagesSnapshot);
      sortMessagesByDate(messages);
    });
  }

  function sortMessagesByDate(retrievedMessages) {
    var sortedMessages = retrievedMessages
      .sort((a, b) => {
        return (
          new Date(a.lastModif).getTime() - new Date(b.lastModif).getTime()
        );
      })
      .reverse();

    setMessages(sortedMessages);
  }

  // Push Function
  const Push = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      if (isRecaptchaTokenValid) {
        sendMessage();
        setSender("");
        setEmail("");
        setContent("");
        errors = {};
      }
    } else {
      let text = "";

      if (errors.name !== undefined) text = errors.name + "<br />";
      if (errors.email !== undefined) text += errors.email + "<br />";
      if (errors.content !== undefined) text += errors.content + "<br />";

      new Swal({
        title: "Erro",
        type: "error",
        html: text,
        icon: "error",
      });
    }

    setRecaptchaTokenValid(false);
  };

  async function sendMessage() {
    const messageId = uuidv4();
    set(ref(db, "messages/" + messageId), {
      sender,
      content,
      email,
      lastModif: timeStamp,
    });
  }

  useEffect((): void => {
    getMessages();
  }, []);

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptchaTokenValid(true);
  }

  function handleValidation() {
    let formIsValid = true;

    //Name
    if (sender.trim() === "") {
      formIsValid = false;
      errors["name"] = "O nome é obrigatório";
    }

    if (sender.trim() !== "" && sender !== undefined) {
      if (!sender.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "O campo nome deve conter apenas letras";
      }
    }

    //Email
    if (email.trim() === "") {
      formIsValid = false;
      errors["email"] = "O email é obrigatório";
    }

    if (email.trim() !== "" && email !== undefined) {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "O email fornecido não é válido";
      }
    }

    //Confirmation
    if (content.trim() === "") {
      formIsValid = false;
      errors["content"] = "Por favor, insira um comentário";
    }

    return formIsValid;
  }

  return (
    <div className={styles.messagesView}>
      <p className={styles.title}>Recados</p>
      <p className={styles.bodyText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
        mauris et magna tempus euismod. Quisque fermentum enim a tellus.
      </p>
      <div className={styles.messageInputContainer}>
        <form onSubmit={Push}>
          <label className={styles.label}>Nome</label>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.label}>Recado</label>
          <textarea
            className={styles.messageInputField}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.recaptcha}>
            <ReCAPTCHA
              sitekey={WEDDING_BLOG_RECAPTCHA_KEY}
              onChange={onChange}
            />
          </div>
          <div className={styles.submitContainer}>
            <input type="submit" value="Publicar" />
          </div>
        </form>
      </div>
      <div className={styles.emptyDiv} />
      {messages != null ? (
        messages.map((item, index) => (
          <div
            className={index % 2 ? styles.evenCard : styles.oddCard}
            key={index}
          >
            <p className={styles.sender}>{item.sender}</p>
            <p className={styles.content}>{item.content}</p>
            <p className={styles.timeStamp}>
              {item.lastModif.substring(0, 16)}
            </p>
          </div>
        ))
      ) : (
        <div>
          <p className={styles.bodyText}>
            Nenhuma mensagem ainda. Seja o primeiro a nos deixar um recado!
          </p>
        </div>
      )}

      <div className={styles.emptyDiv} />
    </div>
  );
}
