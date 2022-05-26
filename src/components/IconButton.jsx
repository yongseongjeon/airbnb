import { ReactComponent as Check } from 'assets/check.svg';
import { ReactComponent as Prev } from 'assets/chevron-left.svg';
import { ReactComponent as Next } from 'assets/chevron-right.svg';
import { ReactComponent as Heart } from 'assets/heart.svg';
import { ReactComponent as Menu } from 'assets/menu.svg';
import { ReactComponent as MinusCircle } from 'assets/minus-circle.svg';
import { ReactComponent as Minus } from 'assets/minus.svg';
import { ReactComponent as PauseCircle } from 'assets/pause-circle.svg';
import { ReactComponent as PlusCircle } from 'assets/plus-circle.svg';
import { ReactComponent as Plus } from 'assets/plus.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Star } from 'assets/star.svg';
import { ReactComponent as User } from 'assets/user.svg';
import { ReactComponent as XCircle } from 'assets/x-circle.svg';

const iconComponents = {
  check: Check,
  prev: Prev,
  next: Next,
  heart: Heart,
  menu: Menu,
  minusCircle: MinusCircle,
  minus: Minus,
  pauseCircle: PauseCircle,
  plusCircle: PlusCircle,
  plus: Plus,
  search: Search,
  star: Star,
  user: User,
  xCircle: XCircle,
};

function IconButton({ icon, fill, stroke, clickHandler, disabled }) {
  const Icon = iconComponents[icon];
  if (!Icon) {
    throw new Error(`${icon} 컴포넌트를 찾을 수 없습니다. `);
  }
  return (
    <button type="button" onClick={clickHandler} disabled={disabled}>
      <Icon fill={fill} stroke={stroke} />
    </button>
  );
}

export default IconButton;
