import React from "react";
import utils from "utils";
import styles from "./Button.scss";

// eslint-disable-next-line no-undef
type ButtonType = JSX.IntrinsicElements["button"]["type"];
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Текст внутри кнопки */
  value: string;
  /** Обработчик клика на кнопку */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  /** Массив классов для кнопки */
  classNames?: Array<string>;
  type?: ButtonType;
}

const Button = ({ value, classNames = [], onClick, type = "button", ...props }: ButtonProps) => {
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
