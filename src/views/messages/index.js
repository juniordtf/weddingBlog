import React, { useState, useEffect } from "react";
import { getDatabase } from "firebase/database";
import styles from "./styles.module.css";
import { format } from "date-fns";

const emptyList: Object = [];

export default function MessagesView(): React$Element<*> {
  const [messages, setMessages] = useState(emptyList);
  const [messagesFireBase, setMessagesFireBase] = useState(emptyList);
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const database = getDatabase();
  const timeStamp = format(new Date(), "dd/MM/yyyy HH:mm:ss");
  const message = {
    $key: "",
    sender,
    content,
    email,
    lastModif: timeStamp,
  };

  async function getMessagesFromFireBase() {
    try {
      const data = database.ref("messages");
      setMessagesFireBase(data);
    } catch {
      console.log("Error retrieving messages");
    }
  }

  // Push Function
  const pushMessage = () => {
    database.ref("messages").set(message).catch(alert);
  };

  async function getMessages() {
    try {
      const result = await JSON.parse(localStorage.getItem("messages"));
      console.log(result);
      setMessages(result);
    } catch {
      console.log("Error retrieving messages");
    }
  }

  useEffect((): void => {
    getMessages();
    getMessagesFromFireBase();
  }, []);

  function submit() {
    var updatedMessages = null;
    pushMessage();

    if (messages === null) {
      updatedMessages = [message];
    } else {
      updatedMessages = messages.concat(message);
    }

    console.log("Updated messages", updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    setSender("");
    setEmail("");
    setContent("");
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
          <div className={styles.submitContainer}>
            <input type="submit" value="Publicar" onClick={() => submit()} />
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

      {messagesFireBase != null ? (
        messagesFireBase.map((item, index) => (
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
