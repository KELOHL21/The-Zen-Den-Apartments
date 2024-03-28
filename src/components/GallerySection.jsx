import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const GallerySection = () => {
    const slides = [
        {
            url:'/public/assets/asset1.jpg',
            name:'Living Room'
        },
        {
            url:'/public/assets/asset2.jpg',
            name:'Bathroom'
        },
        {
            url:'/public/assets/asset3.jpg',
            name:'Kitchen'
        },
        {
            url:'/public/assets/asset6.jpg',
            name:'Bedroom'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

    return ( 
        <div className="flex flex-col p-2 sm:flex sm:justify-between sm:flex-row  lg:justify-center lg:space-x-[2em]">
        
        <div className="flex flex-col">
    
          <h2 className="text-[12px] py-5 px-4 font-semibold tracking-widest uppercase text-gray-400">Gallery</h2>

            <h2 className="text-[12px] px-5 py-5 sm:max-w-[70%] md:max-w-[80%]">  Explore our captivating gallery to envision yourself immersed in the modern elegance and serenity of our apartment building.</h2>

        </div>

        <div className='max-w-[900px] h-[680px] sm:h-[500px] md:max-w-[1200px] w-full m-auto py-5  relative group mr-5 '>  
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full duration-500 bg-center bg-cover rounded-2xl'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center py-2 top-4'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      </div>
     );
}
 
export default GallerySection;