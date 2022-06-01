/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from 'react';
import { FilterContext } from 'store/FilterContext';
import COLOR from 'styles/colors';
import { getRangeCount, getYpoint } from './calculate';

const canvasWidth = 365;
const canvasheight = 100;
const xRangeCount = 11;
const xInterver = canvasWidth / xRangeCount;
const defaultStart = { x: 0, y: 100 };
const defaultEnd = { x: canvasWidth, y: canvasheight };

function Canvas({ accommodationPrice }) {
  const canvasRef = useRef(null);
  const { highPrice } = useContext(FilterContext);
  const priceInterval = highPrice / xRangeCount;
  const priceRangeCounts = getRangeCount({
    rangeCount: xRangeCount,
    priceArray: accommodationPrice,
    highPrice,
    priceInterval,
  });
  const maxPriceCount = Math.max(...priceRangeCounts);

  function drawDefaultGraph() {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');

    canvasContext.beginPath();
    canvasContext.moveTo(defaultStart.x, defaultStart.y);
    priceRangeCounts.forEach((data, index) => {
      const xPoint = xInterver * (index + 1);
      const yPoint = getYpoint(canvasheight, maxPriceCount, data);
      const prevX = xInterver * index;
      const prevY = getYpoint(canvasheight, maxPriceCount, priceRangeCounts[index - 1]);
      const controlX = (prevX + xPoint) / 2; // 제어점 X = (start x + end x ) / 2

      if (index === 0) {
        canvasContext.bezierCurveTo(xPoint / 2, 100, xPoint / 2, yPoint, xPoint, yPoint);
      } else {
        canvasContext.bezierCurveTo(controlX, prevY, controlX, yPoint, xPoint, yPoint);
      }
    });
    canvasContext.lineTo(defaultEnd.x, defaultEnd.y);
    canvasContext.fillStyle = COLOR.GREY[200];
    canvasContext.fill();
  }

  useEffect(() => {
    drawDefaultGraph();
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasheight} />;
}

export default Canvas;
