import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../../../store/hooks';
import GoodItem from '../../components/GoodItem/GoodItem';
import { getGoodsFetch } from '../../features/goodsSlice';
import { selectGoods } from '../../features/selectors';

function GoodsContainer() {
  const { goods, isLoading } = useSelector(selectGoods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodsFetch());
  }, []);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (!isLoading && goods.length != 0) {
    content = goods.map((good) => <GoodItem key={good.id} good={good} />);
  } else {
    content = <p>Error</p>;
  }

  return (
    <>
      <h4>Goods</h4>
      {content}
    </>
  );
}

export default GoodsContainer;
