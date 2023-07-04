import searchLogo from '../icons/search.svg';

const InputSearchMobile = () => {
  return (
    <div className="w-56 border flex bg-white rounded-md p-1">
      <img src={searchLogo} className="w-5 mr-2" />
      <input placeholder="cari di zissStore" className="w-full  text-sm outline-0" />
    </div>
  );
};

export default InputSearchMobile;
