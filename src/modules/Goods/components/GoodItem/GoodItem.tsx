import { useState } from 'react';
import { useDispatch } from '../../../../store/hooks';
import { addItem } from '../../../ShoppingCart/features/cartSlice';
import { Good } from '../../features/models';
import { GoodItemStyled } from './GoodItemStyled';

interface GoodItemProps {
  good: Good;
}

function GoodItem({ good }: GoodItemProps) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(0);

  const handleOnAdd = () => {
    dispatch(addItem({ id: good.id, amount }));
  };

  return (
    <GoodItemStyled>
      <div>
        <h4>{good.name}</h4>
        <h5>{good.price}</h5>
      </div>
      <input
        type="number"
        value={amount}
        min={0}
        onChange={(e) => setAmount(+e.currentTarget.value)}
      />
      <button onClick={handleOnAdd}>+</button>
    </GoodItemStyled>
  );
}

export default GoodItem;
