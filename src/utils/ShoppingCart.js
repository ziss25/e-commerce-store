import { createContext, useState } from 'react';
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // toogle cart display
  const [cart, setCart] = useState(false);

  const increaseCartQuantity = (id) => {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  function removeFromCart(id) {
    setCartItem((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function decreaseCartQuantity(id) {
    setCartItem((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        cartItem,
        setCartItem,
        removeFromCart,
        cart,
        setCart,
        decreaseCartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
