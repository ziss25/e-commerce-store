import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CategoryContext } from '../utils/CategoryContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AllCategory = () => {
  const category = useContext(CategoryContext);

  return (
    <div className="Allcategory mt-4">
      <button className="border text-md text-white bg-[var(--primary)] px-4 py-2 rounded-md mb-4 text-xs font-semibold md:text-sm">Product Category</button>
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
        {category.map((category, index) => (
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
