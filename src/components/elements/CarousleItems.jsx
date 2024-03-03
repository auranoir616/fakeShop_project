// Carousel.js
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import page1 from'../../assets/page1.png';
import page2 from'../../assets/page2.png';
import page3 from'../../assets/page3.png';
const CarouselItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className='w-full h-full'>
        <img src={page1} alt="Slide 1" style={{ height: '770px' }} className='w-full h-4/5' />
      </div >
      <div className='w-full h-full'>
        <img src={page2} alt="Slide 2" style={{ height: '770px' }}  className='w-full h-4/5' />
      </div>
      <div className='w-full h-full'>
        <img src={page3} alt="Slide 3" style={{ height: '770px' }}  className='w-full h-4/5' />
      </div>
      {/* Tambahkan gambar atau konten lainnya sesuai kebutuhan */}
    </Slider>
  );
};

export default CarouselItems;
