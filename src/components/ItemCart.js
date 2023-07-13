import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../utils/ShoppingCart';

const ItemCart = ({ product, increaseCartQuantity }) => {
  const { decreaseCartQuantity } = useContext(ShoppingCartContext);

  return (
    <section className="flex items-center gap-3 mb-4 justify-between">
      <div className="flex gap-5 items-center">
        <div>
          <img className="h-20 md:h-24" src={product.id.image}></img>
        </div>
        <div>
          <h3 className="text-base">{product.id.brand}</h3>
          <p className="text-xs mb-2">
            RP {product.id.price.toLocaleString('id-ID')} x {product.quantity}
          </p>
          <p className="text-xs text-[var(--primary)]">men's</p>
        </div>
      </div>
      <div className="button-group bg-white px-1 rounded-xl flex flex-col items-center shadow-xl">
        <button
          className="text-[var(--primary)]"
          onClick={() => {
            increaseCartQuantity(product.id);
          }}
        >
          +
        </button>
        <p className="text-[var(--primary)]">{product.quantity}</p>
        <button
          className="text-[var(--primary)]"
          onClick={() => {
            decreaseCartQuantity(product.id);
          }}
        >
          -
        </button>
      </div>
    </section>
  );
};

export default ItemCart;
