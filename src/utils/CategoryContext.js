import { createContext, useState, useEffect } from 'react';
const CategoryContext = createContext();

const Provider = ({ children }) => {
  const [AllCategory, setAllCategory] = useState([]);
  const getAllCategory = async () => {
    const data = await (await fetch('https://api.creativeacademyid.com/category')).json();
    setAllCategory(data);
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  return <CategoryContext.Provider value={AllCategory}>{children}</CategoryContext.Provider>;
};

export { CategoryContext, Provider };
