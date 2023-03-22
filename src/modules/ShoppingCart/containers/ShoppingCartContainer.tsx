import { useSelector } from '../../../store/hooks';
import { selectGoods } from '../../Goods/features/selectors';
import CartItem from '../components/CartItem/CartItem';
import { selectCart } from '../features/selectors';
import { ShoppingCartContainerStyled } from './ShoppingCartContainerStyled';

function ShoppingCartContainer() {
  const { items } = useSelector(selectCart);
  const { goods } = useSelector(selectGoods);

  let totalPrice = 0;

  for (const item of items) {
    const good = goods.find((g) => g.id === item.id);

    if (good) {
      totalPrice += good.price * item.amount;
    }
  }

  return (
    <ShoppingCartContainerStyled>
      {items.map((i) => (
        <CartItem key={i.id} item={i} />
      ))}
      <p>Total price: {totalPrice}</p>
    </ShoppingCartContainerStyled>
  );
}

export default ShoppingCartContainer;
