import COLOR from 'styles/colors';
import IconButton from 'components/IconButton';

function FilterResetButton() {
  return (
    <IconButton icon="xCircle" width="24" height="24" fill={COLOR.GREY[100]} stroke={COLOR.BLACK} />
  );
}

export default FilterResetButton;
