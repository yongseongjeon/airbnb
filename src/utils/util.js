/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/indent */
const pipe =
  (...funcs) =>
  (initValue) =>
    funcs.reduce((res, func) => func(res), initValue);

export default pipe;
