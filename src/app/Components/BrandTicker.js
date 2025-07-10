import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const BrandTicker = () => {
  return (
    <>
      <section className='logoSlider'>
        <div className='container'>
          <Swiper
            spaceBetween={30}
            slidesPerView={7}
            // slidesToScroll={1}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1920: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide><Image src="images/logo/logo1.svg" alt="logo" width={183} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo2.svg" alt="logo" width={105} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo3.svg" alt="logo" width={91} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo4.svg" alt="logo" width={113} height={25} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo5.svg" alt="logo" width={144} height={25} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo6.svg" alt="logo" width={73} height={30} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo7.svg" alt="logo" width={151} height={25} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo1.svg" alt="logo" width={183} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo2.svg" alt="logo" width={105} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo3.svg" alt="logo" width={91} height={26} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo4.svg" alt="logo" width={113} height={25} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo5.svg" alt="logo" width={144} height={25} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo6.svg" alt="logo" width={73} height={30} /></SwiperSlide>
            <SwiperSlide><Image src="images/logo/logo7.svg" alt="logo" width={151} height={25} /></SwiperSlide>

          </Swiper>
        </div>
      </section>
    </>
  )
}

export default BrandTicker