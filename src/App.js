import { useState } from 'react';
import MenuListMobile from './components/MenuListMobile';
import Navbar from './components/Navbar';

function App() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <section className="bg-slate-100 border h-[2000px]">
      <Navbar setIsMenu={setIsMenu} isMenu={isMenu} />
      <MenuListMobile isMenu={isMenu} setIsMenu={setIsMenu} />
      <main className="max-w-2xl mx-auto">
        {/* <div id="Home" className="h-96 bg-blue-500 pt-16">
          Home
        </div>
        <div id="Product" className="h-96 bg-green-500 pt-16">
          Product
        </div>
        <div id="Catagory" className="h-96 bg-red-500 pt-16 mb-20">
          Category
        </div> */}
      </main>
    </section>
  );
}

export default App;
