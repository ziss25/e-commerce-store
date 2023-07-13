import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CaroselBanner = () => {
  const [banners, setBanner] = useState([]);
  const getBanners = async () => {
    const data = await (await fetch('https://api.creativeacademyid.com/banner')).json();
    setBanner(data);
  };
  useEffect(() => {
    // console.log('use effect run');
    getBanners();
  }, []);

  return (
    <div className="Carosel">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaroselBanner;
