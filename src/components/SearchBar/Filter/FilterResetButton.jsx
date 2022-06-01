import COLOR from 'styles/colors';
import IconButton from 'components/IconButton';

function FilterResetButton({ clickHandler }) {
  const ResetButtonCss = `
    position: absolute;
    top : 50%;
    right: 26px;
    transform: translateY(-50%);
    font-size: 0;
  `;

  return (
    <IconButton
      icon="xCircle"
      width="24"
      height="24"
      fill={COLOR.GREY[100]}
      stroke={COLOR.BLACK}
      css={ResetButtonCss}
      clickHandler={clickHandler}
    />
  );
}

export default FilterResetButton;
