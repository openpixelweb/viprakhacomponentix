import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';


import { Link } from 'react-router';
import SectionWrapper from '../../components/elements/SectionWrapper';
const MainSlider: React.FC = () => {
    
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionWrapper className="main-slider" id='home'>
            <div className="main-slider__carousel  ">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 0 ? 'active' : ''}`}>
                            <div className="main-slider__shape-bg" ></div>
                           
                          
                            <div   className="main-slider__bg-box">
                                <div className="main-slider__bg one" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                 
                                    <h2 className="main-slider__title">Powering Industries. <br />Enhancing Everyday Living.
                                    </h2>
                                    <p className="main-slider__text">We manufacture high-performance industrial electronic components that drive innovation across industries <br></br>and seamlessly integrate into modern household technologies.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link to="/products" className="thm-btn">View More <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 1 ? 'active' : ''}`}>
                            <div className="main-slider__shape-bg" ></div>
                         
                           
                            <div className="main-slider__bg-box">
                                <div className="main-slider__bg two" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                
                                    <h2 className="main-slider__title">Smart Electronics for <br />a Connected World</h2>
                                    <p className="main-slider__text">From industrial automation to intelligent home systems, <br />our solutions bridge technology and daily living with precision and reliability.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link to="/about" className="thm-btn">Learn More <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${activeIndex === 2 ? 'active' : ''}`}>
                            <div className="main-slider__shape-bg" ></div>
                           
                        
                            <div className="main-slider__bg-box">
                                <div className="main-slider__bg three" >
                                </div>
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                   
                                    <h2 className="main-slider__title">Built for Industry. <br />Designed for Performance.</h2>
                                    <p className="main-slider__text">Robust and reliable electronic components engineered to meet the demanding needs of modern industries.</p>
                                    <div className="main-slider__btn-box">
                                        <div className="main-slider__btn">
                                            <Link to="/contact" className="thm-btn">Get in Touch <span
                                                className="icon-arrow-right"></span></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="owl-nav">
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span className="icon-arrow-right"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        type="button"
                        role="presentation"
                        className="owl-next"
                    >
                        <span className="icon-arrow-right"></span>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MainSlider;
