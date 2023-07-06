import searchLogo from '../icons/search.svg';

const InputSearchMobile = ({ version }) => {
  return (
    <div className={version === 'very-mobile' ? 'w-40 h-8 border flex bg-white rounded-md p-1' : 'w-56 h-8 border flex bg-white rounded-md p-1'}>
      <img src={searchLogo} className="w-5 mr-2 " />
      <input placeholder="cari di FakeStore" className="w-full  text-sm outline-0" />
    </div>
  );
};

export default InputSearchMobile;
// w-40
