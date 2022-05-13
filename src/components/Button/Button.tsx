import React from "react";
import utils from "utils";
import styles from "./Button.scss";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Текст внутри кнопки */
  value: string;
  /** Обработчик клика на кнопку */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /** Массив классов для кнопки */
  classNames?: Array<string>;
  type?: ButtonType;
}

type ButtonType = "button" | "submit" | "reset";

const Button = ({ value, classNames = [], onClick, type  = "button", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className={utils.makeCn([styles.button, ...classNames])}
      onClick={onClick}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;
