import React from "react";
import styles from "./AddNote.module.css";

const AddNote = (props) => {
  return (
    <div className={styles.container}>
      <form onSubmit={props.onSubmit} className={styles.form}>
        <label>Title</label>
        <input type="text" name="title" placeholder="Write yout Title"></input>

        <label>Note</label>
        <input type="text" name="text" placeholder="Write yout Note"></input>
        <br></br>
        <button>Add a New Note</button>
      </form>
    </div>
  );
};

export default AddNote;
