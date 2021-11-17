import React, { useState, useEffect } from "react";
import { db } from "../../services/firebase.js";
import { ref, get, set, query, onValue } from "firebase/database";
import styles from "./styles.module.css";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import ReCAPTCHA from "react-google-recaptcha-enterprise";
import { WEDDING_BLOG_RECAPTCHA_KEY } from "../../config/local.env.js";

const emptyList: Object = [];

export default function MessagesView(): React$Element<*> {
  const [messages, setMessages] = useState(emptyList);
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const timeStamp = format(new Date(), "dd/MM/yyyy HH:mm:ss");

  async function getMessages() {
    const dbRef = ref(db, "/messages");
    await get(query(dbRef));
    onValue(query(dbRef), (snapshot) => {
      const messagesSnapshot = snapshot.val();
      const messages = Object.values(messagesSnapshot);
      setMessages(messages);
    });
  }

  // Push Function
  const Push = () => {
    sendMessage();
    setSender("");
    setEmail("");
    setContent("");
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
  }

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
          <ReCAPTCHA sitekey={WEDDING_BLOG_RECAPTCHA_KEY} onChange={onChange} />
          <div className={styles.submitContainer}>
            <input type="submit" value="Publicar" onClick={() => Push()} />
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
