import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Card, Loading, Result } from '~/components';
import { cartProductsPriceSelector } from '~/store/reducer/productReducer';
import useCart from '~/hooks/useCart';
import { ProductList } from '~/assets/styles/layout/Product';
import { NOT_FOUND_MESSAGE } from '~/constants/notfound';
import { numberWithComma } from '~/utils/price';
import { CartWrapper, Payment, PaymentInfo } from './Styled';
import { ActionButton } from '~/assets/styles/common/actions';

const CartContainer = () => {
  const { cartProducts, loading, handleDecrement, handlePayments } = useCart();
  const { primeTotal, generalTotal, productTotal } = useSelector(cartProductsPriceSelector);
  const isNotNullCart = !!cartProducts.length;

  return (
    <CartWrapper className={cn({ 'is-small': cartProducts.length <= 2 })}>
      {loading && <Loading />}
      {!isNotNullCart ? (
        <Result title={NOT_FOUND_MESSAGE.CART} />
      ) : (
        <>
          <ProductList>
            {cartProducts.map((product) => (
              <Card key={product.id} product={product} isCart onDecrement={handleDecrement} />
            ))}
          </ProductList>
          <Payment>
            <PaymentInfo>
              <div className='price prime'>
                <strong>
                  <i className='prime'>prime</i>
                  과일
                </strong>
                <span>{numberWithComma(primeTotal)}원</span>
              </div>
              <div className='price default'>
                <strong>일반 과일</strong>
                <span>{numberWithComma(generalTotal)}원</span>
              </div>
              <div className='price total'>
                <strong>총 상품금액</strong>
                <span>{numberWithComma(productTotal)}원</span>
              </div>
              <ActionButton
                type='button'
                className='yellow'
                onClick={() => handlePayments(cartProducts)}
              >
                결제하기
              </ActionButton>
            </PaymentInfo>
          </Payment>
        </>
      )}
    </CartWrapper>
  );
};

export default CartContainer;
