/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import { useContext, useRef } from 'react';
import IconButton from 'components/IconButton';
import CANVAS_SIZE from 'constants/canvasSize';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import PRICE_RANGE from 'constants/priceRange';
import { FilterContext } from 'store/FilterContext';

function RangeSliderController({ lowInput, highInput, setLowInputValue, setHighInputValue }) {
  const { setLowPrice, setHighPrice } = useContext(FilterContext);

  const lowButton = useRef(null);
  const highButton = useRef(null);
  const priceInterval = Math.round(PRICE_RANGE.MAX / CANVAS_SIZE.WIDTH);
  const MIN_DISTANCE_OF_BTNS = 10;
  return (
    <ControlWrap>
      <Input
        type="range"
        min={0}
        max={CANVAS_SIZE.WIDTH}
        defaultValue={0}
        ref={lowInput}
        onInput={lowPriceHandler}
      />
      <Input
        type="range"
        min={0}
        max={CANVAS_SIZE.WIDTH}
        defaultValue={CANVAS_SIZE.WIDTH}
        ref={highInput}
        onInput={highPriceHandler}
      />
      <ControlButton className="low" ref={lowButton}>
        <IconButton
          icon="pauseCircle"
          width="100%"
          height="100%"
          fill={COLOR.WHITE}
          stroke={COLOR.BLACK}
        />
      </ControlButton>
      <ControlButton className="high" ref={highButton}>
        <IconButton
          icon="pauseCircle"
          width="100%"
          height="100%"
          fill={COLOR.WHITE}
          stroke={COLOR.BLACK}
        />
      </ControlButton>
    </ControlWrap>
  );

  function lowPriceHandler({ target }) {
    const MAX = target.max;
    target.value = Math.min(
      target.value,
      Math.floor(highInput.current.value) - MIN_DISTANCE_OF_BTNS,
    );
    const percent = Math.floor((target.value / MAX) * 100);
    lowButton.current.style.left = `${percent}%`;
    const updateLowPrice = priceInterval * target.value;
    setLowPrice(updateLowPrice);
    setLowInputValue(target.value);
  }

  function highPriceHandler({ target }) {
    const MAX = Number(target.max);
    target.value = Math.max(
      target.value,
      Math.floor(lowInput.current.value) + MIN_DISTANCE_OF_BTNS,
    );
    const percent = Math.floor((target.value / MAX) * 100);
    highButton.current.style.right = `${100 - percent}%`;
    const newHighPrice = priceInterval * target.value;
    const updateHighPrice = newHighPrice >= PRICE_RANGE.MAX ? PRICE_RANGE.MAX : newHighPrice;
    setHighPrice(updateHighPrice);
    setHighInputValue(target.value);
  }
}

export default RangeSliderController;

const ControlButton = styled.div`
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  font-size: 0;

  &.low {
    left: 0;
    transform: translate(-50%, 50%);
  }

  &.high {
    right: 0;
    transform: translate(50%, 50%);
  }

  button {
    font-size: 0;
  }
`;

const ControlWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Input = styled.input`
  position: absolute;
  left: -10px;
  right: -10px;
  bottom: 0;
  height: 20px;
  transform: translateY(50%);
  z-index: 2;
  pointer-events: none;
  opacity: 0;

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;
