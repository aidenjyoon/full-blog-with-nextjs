import { useState, useEffect } from "react";

import styles from "./ContactForm.module.scss";
import Notification from "../ui/Notification";

const sendContactData = async (contactDetails) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestErrorMessage, setRequestErrorMessage] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestErrorMessage(null);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus("pending");

    var currentTime = new Date();

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
        date: currentTime.toISOString(),
      });

      setRequestStatus("success");

      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestErrorMessage(error.message);
      setRequestStatus("error");
    }
  };

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message:
        requestErrorMessage || "An error occured trying to send a message",
    };
  }

  return (
    <>
      <section className={styles.contact}>
        <h1>How can I help you?</h1>

        <form className={styles.form} onSubmit={sendMessageHandler}>
          <div className={styles.contactInfo}>
            <div className={styles.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                required
                value={enteredEmail}
                onChange={(e) => setEnteredEmail(e.target.value)}
              />
            </div>

            <div className={styles.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={enteredName}
                onChange={(e) => setEnteredName(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              value={enteredMessage}
              onChange={(e) => setEnteredMessage(e.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <button>Send Message</button>
          </div>
        </form>

        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    </>
  );
};

export default ContactForm;
