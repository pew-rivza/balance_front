import React from "react";
import utils from "utils";
import styles from "./Checkbox.scss";

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  /** Флаг, отмечен ли чекбокс */
  checked: boolean;
  /** Обработчик смены состояния чекбокса */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Флаг, заблокирован ли чекбокс */
  disabled?: boolean;
  /** Массив классов для чекбокса */
  classNames?: Array<string>;
}

const Checkbox = ({ classNames = [], ...props }: CheckboxProps) => {
  return (
    <div className={styles["checkbox-container"]}>
      <input
        type="checkbox"
        className={utils.makeCn([styles.checkbox, ...classNames])}
        {...props}
      />
    </div>
  );
};

export default Checkbox;
