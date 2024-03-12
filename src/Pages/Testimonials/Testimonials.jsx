import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div className='h-96 py-20'>
      <div className="text-center ">
        <h2 className="text-5xl font-bold font-[sora] my-5 p-2 gradient-text">
        My Client&apos;s Stories
        </h2>
       
      </div>


      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        loopfillgroupwithblank="true"
        speed={2000} 
        effect={"slide"} 
        grabCursor={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: true,
          }}
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
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Testimonials;