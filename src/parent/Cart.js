import React, { useContext, useEffect, useState } from 'react';
import ItemCart from '../components/ItemCart';
import { ShoppingCartContext } from '../utils/ShoppingCart';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, setCart } = useContext(ShoppingCartContext);
  const { cartItem, increaseCartQuantity, setCartItem } = useContext(ShoppingCartContext);
  const [totals, setTotals] = useState(0);
  let countTotal = 0;

  const totalAllProducts = () => {
    // untuk sementara jumlah semua cart product nya
    cartItem.map((item) => {
      countTotal += item.id.price * item.quantity;
    });
    setTotals(`Rp ${countTotal.toLocaleString('id-ID')}`);
  };

  const saveLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(cartItem));
  };

  useEffect(() => {
    totalAllProducts();
    saveLocalStorage();
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
              <i className="fa fa-times text-2xl text-[var(--primary)]" aria-hidden="true"></i>
            </button>
            <h4>Cart Product</h4>
          </div>

          <div className="grid cart-product-grid">
            <div className="product-cart-parent  border-y-2 overflow-auto p-2">
              {cartItem.length === 0 ? <h1 className="text-center">tidak ada items</h1> : null}
              {cartItem.map((product, index) => (
                <ItemCart key={index} product={product} increaseCartQuantity={increaseCartQuantity} />
              ))}
            </div>

            <div className="checkout-grop px-2 bg-white">
              <div className="total font-bold text-lg flex justify-between mb-3">
                <h2>Total</h2>
                <h3 className="text-[var(--primary)]">{totals}</h3>
              </div>
              <button
                className="btn w-full bg-[var(--primary)] text-white"
                onClick={() => {
                  Swal.fire({
                    title: 'buy success!',
                    text: 'terimaKasih telah berbelanja di fakeStore',
                    icon: 'success',
                    confirmButtonText: 'ok',
                  });
                  setTimeout(() => {
                    setCartItem([]);
                  }, 2000);
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
