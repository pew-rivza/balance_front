import React from "react";
import styles from "./AreaProgress.scss";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement);

type Ran<T extends number> = number extends T ? number :_Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;

interface AreaProgressProps {
  /** Значение в % прогресса сферы от 0 до 100 */
  value: Ran<101>;
}

const AreaProgress = ({ value }: AreaProgressProps) => {
  const cache = new Map();
  // @ts-ignore
  let width, height, gradient;
  // @ts-ignore
  function getGradient(ctx, chartArea, c1, c2) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    // @ts-ignore
    if (width !== chartWidth || height !== chartHeight) {
      // @ts-ignore
      cache.clear();
    }
    let gradient = cache.get(c1 + c2);
    if (!gradient) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(1, c1);
      gradient.addColorStop(0, c2);
      cache.set(c1 + c2, gradient);
    }

// @ts-ignore
    return gradient;
  }

  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [value, 100-value],
        borderWidth: 0,
      },
    ],
  };

  const colors = [{ start:  "#BCE6E7", end: "#5CACB8"}, { start:  "#FFFFFF", end: "#E5E8EF"}];

  const options = {
    elements: {
      arc: {
        // @ts-ignore
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }

          const start = colors[context.dataIndex].start;
          const end = colors[context.dataIndex].end;
          return getGradient(ctx, chartArea, start, end);
        },
      }
    }
  }

  return (
    <div className={styles["area-progress"]}>
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

// TODO: отпуфакторить это говно
