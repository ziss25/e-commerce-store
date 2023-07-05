import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MenuListMobile from '../components/MenuListMobile';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [version, setVersion] = useState('desktop');

  const trackScreen = () => {
    const screen = window.screen.width;
    if (screen <= 375) return setVersion('very-mobile');
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
    <>
      <Navbar isMenu={isMenu} setIsMenu={setIsMenu} version={version} setVersion={setVersion} />
      <MenuListMobile isMenu={isMenu} setIsMenu={setIsMenu} />
    </>
  );
};

export default Header;
