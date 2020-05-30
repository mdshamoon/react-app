import React from "react";
import styles from "./EditNote.module.css";

const EditNote = (props) => {
  return (
    <div className={styles.container}>
      <form onSubmit={props.onSubmit} className={styles.form} key={props.id}>
        <input name="id" value={props.id} hidden readOnly></input>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={props.title}
          placeholder="Write yout Title"
        ></input>

        <label>Note</label>
        <input
          type="text"
          name="text"
          defaultValue={props.text}
          placeholder="Write yout Note"
        ></input>
        <br></br>
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditNote;
