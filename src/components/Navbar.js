import { useEffect, useState } from 'react';
import InputSearchMobile from './InputSearchMobile';
import TextNavbar from './TextNavbar';
import Menu from '../icons/menu.svg';

const Navbar = ({ setIsMenu, isMenu }) => {
  const linkText = [
    {
      name: 'Home',
      path: '#Home',
    },
    {
      name: 'Product',
      path: '#Product',
    },
    {
      name: 'Catagory',
      path: '#Catagory',
    },
  ];

  const [selectedList, setSelecetedList] = useState(0);
  const [version, setVersion] = useState('desktop');

  const trackScreen = () => {
    const screen = window.screen.width;
    if (screen >= 768) return setVersion('desktop');
    setVersion('mobile');
  };

  window.addEventListener('resize', () => {
    trackScreen();
  });

  useEffect(() => {
    trackScreen();
  }, []);

  return (
    <div className={version === 'desktop' ? 'navbarDesktop' : 'navbarMobile'}>
      <div className="">{version === 'desktop' ? <TextNavbar /> : <InputSearchMobile />}</div>

      {version === 'desktop' ? (
        <div className="List md:flex">
          <ul className=" menu-horizontal px-1 gap-2 md:gap-7 ">
            {linkText.map((text, index) => (
              <li key={index}>
                <a className={selectedList === index ? 'listActive' : null} href={text.path} onClick={() => setSelecetedList(index)}>
                  {text.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {version === 'desktop' ? (
        <div className="group-btn">
          <button className="btn-LogIn mr-3">Login</button>
          <button className="btn-SignIn">Sign In</button>
        </div>
      ) : null}

      {version === 'mobile' ? (
        <div className="">
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
      ) : null}
    </div>
  );
};

export default Navbar;
