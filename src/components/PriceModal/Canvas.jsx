/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from 'react';
import CANVAS_SIZE from 'constants/canvasSize';
import COLOR from 'styles/colors';
import PRICE_RANGE from 'constants/priceRange';
import { FilterContext } from 'store/FilterContext';
import { getRangeCount, getYpoint } from './calculate';

function Canvas({ accommodationPrice }) {
  const { lowInputValue, highInputValue } = useContext(FilterContext);
  const canvasRef = useRef(null);
  const priceInterval = PRICE_RANGE.MAX / CANVAS_SIZE.X_COUNT;
  const priceRangeCounts = getRangeCount({
    rangeCount: CANVAS_SIZE.X_COUNT,
    priceArray: accommodationPrice,
    highPrice: PRICE_RANGE.MAX,
    priceInterval,
  });
  const maxPriceCount = Math.max(...priceRangeCounts);
  const START_POINT = CANVAS_SIZE.START_POINT;
  const END_POINT = CANVAS_SIZE.END_POINT;

  useEffect(drawGraph, []);

  useEffect(fillGraph, [lowInputValue, highInputValue]);

  return <canvas ref={canvasRef} width={CANVAS_SIZE.WIDTH} height={CANVAS_SIZE.HEIGHT} />;

  function drawGraph() {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');

    canvasContext.beginPath();
    canvasContext.moveTo(START_POINT.X, START_POINT.Y);
    priceRangeCounts.forEach((data, index) => {
      const xPoint = CANVAS_SIZE.X_INTERVAL * (index + 1);
      const yPoint = getYpoint(CANVAS_SIZE.HEIGHT, maxPriceCount, data);
      const prevX = CANVAS_SIZE.X_INTERVAL * index;
      const prevY = getYpoint(CANVAS_SIZE.HEIGHT, maxPriceCount, priceRangeCounts[index - 1]);
      const controlX = (prevX + xPoint) / 2; // 제어점 X = (start x + end x ) / 2

      if (index === 0) {
        canvasContext.bezierCurveTo(xPoint / 2, 100, xPoint / 2, yPoint, xPoint, yPoint);
      } else {
        canvasContext.bezierCurveTo(controlX, prevY, controlX, yPoint, xPoint, yPoint);
      }
    });
    canvasContext.lineTo(END_POINT.X, END_POINT.Y);
    fillGraph(canvasContext);
  }

  function fillGraph() {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    const targetLow = lowInputValue / CANVAS_SIZE.WIDTH;
    const targetHigh = highInputValue / CANVAS_SIZE.WIDTH;
    const gradientColor = canvasContext.createLinearGradient(
      START_POINT.X,
      START_POINT.Y,
      END_POINT.X,
      END_POINT.Y,
    );
    canvasContext.clearRect(0, 0, CANVAS_SIZE.WIDTH, CANVAS_SIZE.HEIGHT);
    gradientColor.addColorStop(0, COLOR.GREY[200]);
    gradientColor.addColorStop(targetLow, COLOR.GREY[200]);
    gradientColor.addColorStop(targetLow, COLOR.BLACK);
    gradientColor.addColorStop(targetHigh, COLOR.BLACK);
    gradientColor.addColorStop(targetHigh, COLOR.GREY[200]);
    gradientColor.addColorStop(1, COLOR.GREY[200]);
    canvasContext.fillStyle = gradientColor;
    canvasContext.fill();
  }
}

export default Canvas;
