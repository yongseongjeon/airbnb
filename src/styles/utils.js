import { css } from 'styled-components';

const POSITION_CENTER = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BOX_SHADOW = {
  100: 'box-shadow: 0px 4px 10px #3333331a, 0px 0px 4px #3333331a;',
  200: 'box-shadow: 0px 0px 4px #3333331a, 0px 2px 4px #00000040; backdrop-filter: blur(4px);',
};

export { POSITION_CENTER, BOX_SHADOW };
