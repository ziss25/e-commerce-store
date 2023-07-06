import { useState, useEffect } from 'react';

import Card from '../components/Card';

const Cards = () => {
  const [Product, setAllProduct] = useState([]);

  const getAllProduct = async () => {
    const data = await (await fetch('https://api.creativeacademyid.com/product')).json();
    setAllProduct(data);
  };

  useEffect(() => {
    console.log('use effect run');
    getAllProduct();
  }, []);

  return (
    <>
      <div className="max-w-3xl mt-5 mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5">
        {Product.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Cards;
