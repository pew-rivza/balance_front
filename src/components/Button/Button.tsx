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
  /** Флаг, заблокирована ли кнопка */
  disabled?: boolean;
  /** Массив классов для кнопки */
  classNames?: Array<string>;
  type?: ButtonType;
}

const Button = ({
  value,
  classNames = [],
  type = "button",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button className={utils.makeCn([styles.button, ...classNames])} type={type} {...props}>
      {value}
    </button>
  );
};

export default Button;
