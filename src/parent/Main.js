import AllCategory from '../components/AllCategory';
import Cards from '../parent/Cards';
import CaroselBanner from '../components/CaroselBanner';
import SearchProduct from '../components/SearchProduct';

const Main = () => {
  return (
    <main className="max-w-2xl mx-auto p-2">
      <div id="Home" className="pt-20 ">
        <CaroselBanner />
        <AllCategory />
      </div>
      <div id="Product" className="pt-8 mb-2 md:pt-16">
        <SearchProduct />
        <Cards />
      </div>
    </main>
  );
};

export default Main;
