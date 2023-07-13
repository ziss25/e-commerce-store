import { useContext } from 'react';
import { CategoryContext } from '../utils/CategoryContext';
import close from '../icons/close.svg';

const MenuListMobile = ({ isMenu, setIsMenu }) => {
  let classMenu;
  if (isMenu) {
    classMenu = 'menuList animateMenuList animateMenuList__active px-2';
  } else {
    classMenu = 'menuList animateMenuList';
  }

  const category = useContext(CategoryContext);
  return (
    <div className={classMenu}>
      <div className=" header-menuList flex items-center mt-2">
        <button
          onClick={() => {
            setIsMenu(!isMenu);
          }}
          className=" px-2 py-1 text-white "
        >
          <img src={close} className="w-7" />
        </button>
        <h3 className="font-semibold ml-3">Menu utama</h3>
      </div>

      <div className="buttons mt-2 w-full mx-auto gap-5 grid grid-cols-2">
        <button className="btn btn-sm bg-[var(--primary)] text-white join-item rounded-sm text-xs">Login</button>
        <button className="btn btn-sm  join-item rounded-sm text-xs text-[var(--primary)] bg-[var(--primary-accent)]">Sign In</button>
      </div>

      <div className="Category px-1 my-3">
        <h3 className="font-semibold">All Category</h3>
        <ul className="px-2">
          {category.map((data, index) => (
            <li className="border p-3 mt-5 flex items-center rounded-md" key={index}>
              <img className="w-8 mr-5" src={data.image} />
              <p className="text-md">{data.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuListMobile;
