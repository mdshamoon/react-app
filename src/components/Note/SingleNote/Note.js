import React from "react";
import styles from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
