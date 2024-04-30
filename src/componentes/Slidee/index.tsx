import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './slide.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Espacamento from 'componentes/Espacamento';


register();

const Slidee = () => {
  const images = [
    { id: '1', image: '/img/backgroundnoblur1500x500.png' },
  ];

  return (
    <>
      <Swiper className={style.swiper}
        slidesPerView={1}
        navigation
      // autoplay={{delay: 4000}}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt='Slider' className={style['slide-item']}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <Espacamento />
      <Espacamento />
    </>
  );
};

export default Slidee;