import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const emptyList: Object = [];
const messagesMock = [
  {
    id: 1,
    sender: "Bruna Aguiar",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum maximus enim eu condimentum. Sed vel elementum nisl. Nulla facilisi. Curabitur et erat felis. Ut sit amet turpis a nisl tempor sagittis quis sed sapien. Class aptent taciti sociosqu ad.",
    date: "",
    email: "",
  },
  {
    id: 2,
    sender: "Anna e João",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor vehicula aliquam. Aliquam tortor neque, eleifend non sapien vitae, gravida bibendum felis. Aenean commodo posuere leo, pulvinar pharetra eros congue ut. Mauris vitae est lectus. Integer eu elit malesuada, egestas orci vitae, convallis est. Aenean quis sem nunc. Donec nec ornare risus. Nulla cursus euismod accumsan. Aenean et diam ac nisi vulputate accumsan et vitae lacus. Donec vitae ligula malesuada, maximus lorem at, volutpat justo. Donec nunc massa, vestibulum in congue condimentum, tempor eu arcu. Integer quis nulla semper, commodo diam in, porta enim.",
    date: "",
    email: "",
  },
];

export default function MessagesView(): React$Element<*> {
  const [messages, setMessages] = useState(emptyList);
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

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
  }, []);

  function submit() {
    var message = {
      id: 3,
      sender,
      content,
      date: "",
      email,
    };

    var updatedMessages = null;

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
    </div>
  );
}
