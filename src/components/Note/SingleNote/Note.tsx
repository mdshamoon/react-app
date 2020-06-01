import React from "react";
import styles from "./Note.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  myMargin: {
    marginRight: theme.spacing(1),
  },
}));

const Note = (props: any) => {
  const classes = useStyles();
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>

        <Button
          variant="contained"
          size="small"
          onClick={props.onEdit}
          className={classes.myMargin}
        >
          Edit
        </Button>

        <Button
          onClick={props.onDelete}
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Note;
