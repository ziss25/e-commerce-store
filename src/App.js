import Cart from './parent/Cart';
import Footer from './parent/Footer';
import Header from './parent/Header';
import Main from './parent/Main';
import { Provider } from './utils/CategoryContext';
import { ShoppingCartProvider } from './utils/ShoppingCart';

function App() {
  return (
    <section className="relative bg-slate-100 border">
      <ShoppingCartProvider>
        <Provider>
          <Header />
          <Main />
          <Cart />
          <Footer />
        </Provider>
      </ShoppingCartProvider>
    </section>
  );
}

export default App;
