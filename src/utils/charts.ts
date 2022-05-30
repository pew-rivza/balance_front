const cache: Map<string, CanvasGradient> = new Map();
let width: number;
let height: number;

function getLinearGradient(context: any, colorStart: string, colorEnd: string): CanvasGradient {
  const { chart } = context;
  const { ctx, chartArea } = chart;
  if (!chartArea) {
    return null;
  }

  const chartWidth: number = chartArea.right - chartArea.left;
  const chartHeight: number = chartArea.bottom - chartArea.top;
  if (width !== chartWidth || height !== chartHeight) {
    cache.clear();
  }

  let gradient = cache.get(colorStart + colorEnd);

  if (!gradient) {
    width = chartWidth;
    height = chartHeight;

    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, colorStart);
    gradient.addColorStop(0, colorEnd);

    cache.set(colorStart + colorEnd, gradient);
  }

  return gradient;
}

export default { getLinearGradient };
