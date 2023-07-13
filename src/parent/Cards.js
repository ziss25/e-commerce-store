import { useState, useEffect } from 'react';

import Card from '../components/Card';

const Cards = () => {
  const cartProduct = [];
  const [Product, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    const data = await (await fetch('https://api.creativeacademyid.com/product')).json();
    setAllProduct(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
      <div className="max-w-3xl mt-5 mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
        {Product.map((product, index) => (
          <Card key={product.id} product={product} index={index} cartProduct={cartProduct} />
        ))}
      </div>
    </>
  );
};

export default Cards;
