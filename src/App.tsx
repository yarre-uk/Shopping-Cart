import {
  decrement,
  incrementFetch,
} from './modules/ShoppingCart/features/cartSlice';
import { selectCount } from './modules/ShoppingCart/features/selectors';
import { useDispatch, useSelector } from './store/hooks';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleOnIncrement = () => {
    dispatch(incrementFetch());
  };

  const handleOnDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleOnIncrement}>Inc</button>
      <button onClick={handleOnDecrement}>Dec</button>
    </div>
  );
}

export default App;
