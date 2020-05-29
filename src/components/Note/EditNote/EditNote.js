import React from "react";
import styles from "./EditNote.module.css";

const EditNote = (props) => {
  return (
    <div className={styles.container}>
      <form onSubmit={props.onSubmit} className={styles.form}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={() => props.title}
          value={props.title}
          placeholder="Write yout Title"
        ></input>

        <label>Note</label>
        <input
          type="text"
          name="text"
          onChange={(self) => self.target.value}
          value={props.text}
          placeholder="Write yout Note"
        ></input>
        <br></br>
        <button>Add a New Note</button>
      </form>
    </div>
  );
};

export default EditNote;
