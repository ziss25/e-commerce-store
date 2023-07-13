import React, { useContext, useEffect, useState } from 'react';
import ItemCart from '../components/ItemCart';
import { ShoppingCartContext } from '../utils/ShoppingCart';

const Cart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);
  const { cartItem, removeFromCart, increaseCartQuantity } = useContext(ShoppingCartContext);
  const [totals, setTotals] = useState(0);
  let countTotal = 0;

  const totalAllProducts = () => {
    // untuk sementara jumlah semua cart product nya
    cartItem.map((item) => {
      countTotal += item.id.price * item.quantity;
    });
    setTotals(`Rp ${countTotal.toLocaleString('id-ID')}`);
  };

  useEffect(() => {
    totalAllProducts();
  });

  return (
    <>
      <div className={cart ? 'cart cartActive' : 'cart'}>
        <div className="relative wrapped w-full h-full p-2 shadow-md">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCart(!cart);
              }}
            >
              <i className="fa fa-times text-2xl" aria-hidden="true"></i>
            </button>
            <h4>Cart Product</h4>
          </div>

          <div className="h-full">
            <hr className="mb-2" />
            <div className="product-cart-parent p-3 max-h-80 overflow-auto md:max-h-96">
              {cartItem.length === 0 ? <h1>tidak ada items</h1> : null}
              {cartItem.map((product, index) => (
                <ItemCart key={index} product={product} increaseCartQuantity={increaseCartQuantity} />
              ))}
            </div>
            <hr className="mt-2" />

            <div className="checkout-grop px-2 absolute bottom-0 py-2 right-0 left-0 flex flex-col justify-end gap-5 px-3 bg-white">
              <div className="total font-bold text-xl flex justify-between px-1">
                <h2>Total</h2>
                <h3 className="text-[var(--primary)]">{totals}</h3>
              </div>
              <button
                className="btn w-full bg-[var(--primary)] text-white"
                onClick={() => {
                  alert('fitur not avaible');
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pembungkus agar redup aja dikit */}
      <div className={cart === true ? 'box-blackActive' : 'box-black'}></div>
    </>
  );
};

export default Cart;
