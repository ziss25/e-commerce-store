import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AllCategory = () => {
  const [AllCategory, setAllCategory] = useState([]);

  const getAllCategory = async () => {
    const data = await (await fetch('https://api.creativeacademyid.com/category')).json();
    setAllCategory(data);
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className="Allcategory mt-4">
      <button className="border text-sm text-white bg-[var(--primary)] px-3 py-1 rounded-md mb-4 text-xs font-semibold md:text-sm">Product Category</button>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        grabCursor={true}
        className="mySwiper"
      >
        {AllCategory.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-18 flex flex-col rounded-md overflow-hidden">
              <img src={category.image} />
              <div className="bg-[var(--primary-accent)] text-[var(--primary)] text-center">
                <h1 className=" text-[10px]">{category.description}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AllCategory;
