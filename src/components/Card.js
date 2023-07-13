import { useContext } from 'react';
import { ShoppingCartContext } from '../utils/ShoppingCart';

const Card = ({ product, index }) => {
  const { increaseCartQuantity } = useContext(ShoppingCartContext);

  const { brand, description, price, category, image } = product;
  const harga = `Rp ${price.toLocaleString('id-ID')}`;

  const handlerSelectedCart = () => {
    increaseCartQuantity(product);
  };

  return (
    <div className="card bg-base-100 shadow-md rounded-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="body-card p-2">
        <p className="text-xs text-[#aeaeae]">{category}</p>
        <h2 className="card-title mt-1 mb-1">{brand}</h2>
        <p className="text-sm text-[#aeaeae] ">{description}</p>
        <div className="footer-card flex justify-between mt-4 items-center">
          <p className="price font-semibold ">{harga}</p>
          <button className="items-center flex px-2 text-[var(--primary)] bg-[var(--primary-accent)] " onClick={() => handlerSelectedCart()}>
            <p className="text-sm mr-1">Buy</p>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
