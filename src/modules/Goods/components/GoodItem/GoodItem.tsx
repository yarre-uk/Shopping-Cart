import { Good } from '../../features/models';
import { GoodItemStyled } from './GoodItemStyled';

interface GoodItemProps {
  good: Good;
}

function GoodItem({ good }: GoodItemProps) {
  return (
    <GoodItemStyled>
      <h4>{good.name}</h4>
      <h5>{good.price}</h5>
    </GoodItemStyled>
  );
}

export default GoodItem;
