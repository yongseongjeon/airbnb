const WIDTH = 365;
const HEIGHT = 100;
const X_COUNT = 11;

const CANVAS_SIZE = {
  WIDTH,
  HEIGHT,
  X_COUNT,
  X_INTERVAL: WIDTH / X_COUNT,
  START_POINT: { X: 0, Y: HEIGHT },
  END_POINT: { X: WIDTH, Y: HEIGHT },
};

export default CANVAS_SIZE;
