import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../utils/ShoppingCart';

const TestContext = () => {
  const { cartItem, removeFromCart } = useContext(ShoppingCartContext);

  // useEffect(() => {
  //   // console.log(cartItem);
  // });

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            {cartItem.map((product, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.id.image} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.id.brand}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.id.description}
                  <br />
                  <span className="badge badge-ghost badge-sm">{product.id.category}</span>
                </td>
                <td>
                  {product.id.price} x {product.quantity}
                </td>
                <th>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => {
                      removeFromCart(product.id);
                    }}
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TestContext;
