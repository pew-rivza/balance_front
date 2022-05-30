import React from "react";
import utils from "utils";
import consts from "consts";
import { Ran } from "typings";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import styles from "./AreaProgress.scss";

ChartJS.register(ArcElement);

interface AreaProgressProps {
  /** Значение в % прогресса сферы от 0 до 100 */
  value: Ran<101>;
  /** Массив классов для контейнера с компонентом */
  classNames?: Array<string>;
}

const colors = [{ start:  consts.gradientMain_color_light, end: consts.gradientMain_color_dark}, { start:  consts.gradientBasic_color_light, end: consts.gradientBasic_color_dark}];

const AreaProgress = ({ value, classNames = [] }: AreaProgressProps): JSX.Element => {
  const data = {
    datasets: [{
      data: [value, 100-value],
      borderWidth: 0,
    }],
  };

  const options: any = {
    // На случай, если нужно будет отключить анимацию
    // animation: null,
    elements: {
      arc: {
        backgroundColor: function(context: any) {
          const start = colors[context.dataIndex].start;
          const end = colors[context.dataIndex].end;
          return utils.getLinearGradient(context, start, end);
        },
      }
    }
  }



  return (
    <div className={utils.makeCn([styles["area-progress"], ...classNames])}>
      <div className={styles.value}>{value}%</div>
      <div className={styles["pie-container"]}>
        <Pie
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default AreaProgress;
