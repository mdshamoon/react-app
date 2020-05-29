import React, { useEffect } from "react";
import styles from "./Notes.module.css";
import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import EditNote from "../../components/Note/EditNote/EditNote";
import Note from "../../components/Note/SingleNote/Note";
import AddNote from "../../components/Note/AddNote/AddNote";

const mynotes = [
  {
    id: 1,
    title: "do my homework",
    text: "homework should be completed",
  },
  {
    id: 2,
    title: "do laundry",
    text: "My laundry should be done till 8 pm",
  },
  {
    id: 3,
    title: "Play PUBG",
    text: "Play PUBG for 2 hours",
  },
];

function Notes() {
  const [notes, allNotes] = useState(mynotes);
  const [lastNote, setLastNote] = useState(4);
  const [dialog, setDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [editInfo, setEditInfo] = useState({ id: 0, title: "", text: "" });

  function deleteNote(note) {
    allNotes(notes.filter((filterNote) => note.id !== filterNote.id));
  }

  function editNote(note) {
    setEditInfo({
      id: note.id,
      title: note.title,
      text: note.text,
    });

    setEditDialog(true);
  }

  function update(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    allNotes(
      notes.map((note) => {
        if (note.id == event.target.id.value) {
          return {
            id: note.id,
            title: event.target.title.value,
            text: event.target.text.value,
          };
        } else {
          return note;
        }
      })
    );
    setEditDialog(false);
  }
  function addNote(event) {
    event.preventDefault();

    const newNote = {
      id: lastNote,
      title: event.target.title.value,
      text: event.target.text.value,
    };
    allNotes([...notes, newNote]);
    setLastNote(lastNote + 1);
    setDialog(false);
  }

  const showNotes = () => {
    return notes.map((note) => {
      return (
        <Note
          key={note.id}
          onEdit={() => editNote(note)}
          onDelete={() => deleteNote(note)}
          title={note.title}
          text={note.text}
        ></Note>
      );
    });
  };

  return (
    <div className={styles.container}>
      <h1>My Notes</h1>

      <Button
        text="Add a new book"
        onClick={() => {
          setDialog(true);
        }}
      ></Button>
      <div className={styles.noteContainer}>{showNotes()}</div>
      <div className={dialog ? styles.show : styles.hide}>
        <AddNote onSubmit={addNote} />
      </div>

      <div className={editDialog ? styles.show : styles.hide}>
        <EditNote
          onSubmit={update}
          id={editInfo.id}
          title={editInfo.title}
          text={editInfo.text}
        />
      </div>
    </div>
  );
}

export default Notes;
