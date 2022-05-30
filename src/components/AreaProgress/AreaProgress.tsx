import React from "react";
import utils from "utils";
import consts from "consts";
import { Ran } from "typings";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import styles from "./AreaProgress.scss";

ChartJS.register(ArcElement);

interface AreaProgressProps {
  /** Значение в % прогресса сферы от 0 до 100 */
  value: Ran<101>;
  /** Массив классов для контейнера с компонентом */
  classNames?: Array<string>;
}

const colors = [
  { start: consts.gradientMainColorLight, end: consts.gradientMainColorDark },
  { start: consts.gradientBasicColorLight, end: consts.gradientBasicColorDark },
];

const AreaProgress = ({ value, classNames = [] }: AreaProgressProps): JSX.Element => {
  // @ts-ignore: сравнение со строкой нужно для сторибука
  const isComplete: boolean = value === 100 || value === "100";

  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        borderWidth: 0,
      },
    ],
  };

  const options: any = {
    // На случай, если нужно будет отключить анимацию
    // animation: null,
    elements: {
      arc: {
        backgroundColor(context: any) {
          const start = isComplete ? consts.gradientSuccessColorLight : colors[context.dataIndex].start;
          const end =  isComplete ? consts.gradientSuccessColorDark : colors[context.dataIndex].end;
          return utils.getLinearGradient(context, start, end);
        },
      },
    },
  };

  return (
    <div className={utils.makeCn([styles["area-progress"], ...classNames])}>
      <div className={styles.value}>{value}%</div>
      <div className={utils.makeCn([styles["pie-container"], isComplete && styles.complete])}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default AreaProgress;
