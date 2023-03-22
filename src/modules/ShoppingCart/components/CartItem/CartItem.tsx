import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../../../../store/hooks';
import { selectGoodId } from '../../../Goods/features/selectors';
import { removeItem, updateItem } from '../../features/cartSlice';
import { CartItem as ICartItem } from '../../features/models';
import { CartItemStyled } from './CartItemStyled';

interface CartItemProps {
  item: ICartItem;
}

function CartItem({ item }: CartItemProps) {
  const good = useSelector((state) => selectGoodId(state, item.id));
  const [amount, setAmount] = useState<number>(item.amount);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => dispatch(updateItem({ ...item, amount })), 500);

    return () => {
      clearTimeout(id);
    };
  }, [amount]);

  if (!good) {
    throw new Error('Invalid good');
  }

  const handleOnDelete = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <CartItemStyled>
      <div>
        <h4>{good.name}</h4>
        <h5>{good.price}</h5>
        <input
          type="number"
          min={0}
          value={amount}
          onChange={(e) => setAmount(+e.currentTarget.value)}
        />
      </div>
      <button onClick={handleOnDelete}>X</button>
    </CartItemStyled>
  );
}

export default CartItem;
