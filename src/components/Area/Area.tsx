import React from "react";
import utils from "utils";
import styles from "./Area.scss";

interface AreaProps {
  /** Уникальный ID сферы */
  id: number;
  /** Название сферы */
  name: string;
  /** Название иконки для сферы */
  icon: string;
  /** Массив классов для сферы */
  classNames?: Array<string>;
}

const Area = ({ id, name, icon, classNames = [] }: AreaProps): JSX.Element => {
  return (
    <div className={utils.makeCn([styles.area, ...classNames])}>
      id: {id}, name: {name}, icon: {icon}
    </div>
  );
};

export default Area;
