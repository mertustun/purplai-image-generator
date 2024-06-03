import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel_slider/carousel_1.png'
import carousel2 from '../assets/carousel_slider/carousel_2.png'
import carousel3 from '../assets/carousel_slider/carousel_3.png'
import carousel4 from '../assets/carousel_slider/carousel_4.png'
import carousel5 from '../assets/carousel_slider/carousel_5.png'
import '../App.css'

const CarouselController = () => {
  const [index, setIndex] = useState(2);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carousel_controller = [carousel1, carousel2, carousel3, carousel4, carousel5]

  return (
    <div className='carousel-controller'>
      <h3 className='title-carousel'>Get Inspired</h3>
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-slider'>
        {carousel_controller.map((item, i) => (
          <Carousel.Item key={i}>
            <img src={item} alt={`carousel_image_${i}`} className='img-fluid rounded-2' />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselController