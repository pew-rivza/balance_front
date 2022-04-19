import React from "react";

import styles from "./Button.scss";

interface ButtonProps {
  /** Текст внутри кнопки */
  value: string;
}

function Button({ value }: ButtonProps) {
  return (
    <button className={styles.button}>{ value }</button>
  )
}

export default Button;