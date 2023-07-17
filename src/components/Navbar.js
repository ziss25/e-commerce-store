import { useContext, useState } from 'react';
import InputSearchMobile from './InputSearchMobile';
import TextNavbar from './TextNavbar';
import Menu from '../icons/menu.svg';
import { ShoppingCartContext } from '../utils/ShoppingCart';

const Navbar = ({ isMenu, setIsMenu, version }) => {
  const [selectedList, setSelecetedList] = useState(0);
  const { cart, setCart, cartItem } = useContext(ShoppingCartContext);
  const linkText = [
    {
      name: 'Home',
      path: '#Home',
    },
    {
      name: 'Product',
      path: '#Product',
    },
  ];

  return (
    <div className={version === 'desktop' ? 'navbarDesktop' : 'navbarMobile'}>
      <div className="">{version === 'desktop' ? <TextNavbar /> : <InputSearchMobile version={version} />}</div>

      <div className="hidden List md:flex translate-x-4">
        <ul className="menu-horizontal px-1 gap-2 md:gap-7 ">
          {linkText.map((text, index) => (
            <li key={index}>
              <a className={selectedList === index ? 'listActive' : null} href={text.path} onClick={() => setSelecetedList(index)}>
                {text.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="icon_cart ml-5 border-l-2 border-gray-100 pl-4">
          <button
            className="relative"
            onClick={() => {
              setCart(!cart);
            }}
          >
            {cartItem.length ? <p className="absolute text-white bg-[var(--primary)] -top-[5px] -right-[10px] text-sm w-5 h-5 rounded-full scale-75">{cartItem.length}</p> : null}

            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="hidden group-btn md:flex">
        <button className="btn-LogIn mr-3">Login</button>
        <button className="btn-SignIn">Sign In</button>
      </div>

      <div className="md:hidden">
        <button
          className="icon_cart mr-4 text-white relative"
          onClick={() => {
            setCart(!cart);
          }}
        >
          {cartItem.length ? <p className="absolute text-white bg-red-700 -top-[5px] -right-[10px] text-sm w-5 h-5 rounded-full scale-75">{cartItem.length}</p> : null}
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </button>
        <button
          className="hamb-menu"
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          <img className="w-5" src={Menu} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
