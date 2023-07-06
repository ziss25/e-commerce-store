import { useState } from 'react';
import InputSearchMobile from './InputSearchMobile';
import TextNavbar from './TextNavbar';
import Menu from '../icons/menu.svg';

const Navbar = ({ isMenu, setIsMenu, version }) => {
  const [selectedList, setSelecetedList] = useState(0);
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
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </div>
      </div>

      <div className="hidden group-btn md:flex">
        <button className="btn-LogIn mr-3">Login</button>
        <button className="btn-SignIn">Sign In</button>
      </div>

      <div className="md:hidden">
        <button className="icon_cart mr-4 text-white">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
        </button>
        <button className="mr-4">
          <i className="fa fa-envelope text-white" aria-hidden="true"></i>
        </button>
        <button className="mr-4">
          <i className="fa fa-bell text-white" aria-hidden="true"></i>
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
