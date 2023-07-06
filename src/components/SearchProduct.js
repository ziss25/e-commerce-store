import React from 'react';

const SearchProduct = () => {
  return (
    <div className="searchProduct">
      <h3 className="text-center text-2xl font-semibold mb-2">All Products</h3>
      <div className="hidden md:block">
        <input className="w-5/6 py-1 px-4 border-none" placeholder="search something..." />
        <button className="w-1/6 p-1 text-white bg-[var(--primary)] font-semibold">Search</button>
      </div>
    </div>
  );
};

export default SearchProduct;
