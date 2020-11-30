import React from "react";
import Bulletin from "./Bulletin";
import styles from './board.module.css'
const Board = (props) => {
  return (
    <div className={styles.wrapper}>
      <Bulletin count={props.count}/>
    </div>
  );
};

export default Board;
