import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import testimonial3Img1 from '../../assets/images/testimonial/men.jpg';
import testimonial3Img2 from '../../assets/images/testimonial/women.jpg';

import TextAnimation from '../../components/elements/TextAnimation';

interface TestimonialItem {
    id: number;
    image: string;
    name: string;
    role: string;
    rating: number;
    text: string;
  
}

const testimonialItems: TestimonialItem[] = [
    {
        id: 1,
        image: testimonial3Img1,
        name: 'Rajesh Kumar',
        role: 'Operations Manager',
        rating: 5,
        text: 'Outstanding quality and reliable electronic components. Their products helped improve the efficiency of our industrial automation systems significantly.',
    
    },
    {
        id: 2,
        image: testimonial3Img2,
        name: 'Priya Sharma',
        role: 'Smart Solutions Integrator',
        rating: 5,
        text: 'The smart home controllers and energy monitoring devices are highly efficient and easy to integrate. Excellent support from their technical team',
        
    },
    {
        id: 3,
        image: testimonial3Img1,
        name: 'Arvind Reddy',
        role: 'Production Head',
        rating: 5,
        text: 'We have been using their power supply units and control panels for our manufacturing facility, and the performance has been exceptional.',
    
    },
    {
        id: 4,
        image: testimonial3Img2,
        name: 'Sneha Patel',
        role: 'Technology Consultant',
        rating: 5,
        text: 'Professional team with innovative solutions. Their IoT-based devices perfectly matched our project requirements.',
        
    },
       {
        id: 5,
        image: testimonial3Img1,
        name: 'Vikram Singh',
        role: 'Electrical Contractor',
        rating: 5,
        text: 'Their voltage stabilizers and smart switches offer excellent reliability and safety. Highly recommended for industrial and residential applications.',
        
    },
];

const TestimonialsOne: React.FC = () => {
    return (
        <section className="testimonial-three">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <h6 className="section-title__tagline">
                        <span className="section-title__tagline-border"></span>Testimonials
                    </h6>
                    <h3 className="section-title__title title-animation">
                        <TextAnimation> What Our Clients Say</TextAnimation>
                    </h3>
                </div>

                <div className="testimonial-three__carousel  ">
                    <Swiper
                        slidesPerView={3}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}

                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            992: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {testimonialItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="item">
                                    <div className="testimonial-three__single">
                                        <div className="testimonial-three__img-box">
                                            <div className="testimonial-three__img">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                        <div className="testimonial-three__content">
                                            <div className="testimonial-three__name-box">
                                                <h3>
                                                   {item.name}
                                                </h3>
                                                <p>{item.role}</p>
                                            </div>
                                            <div className="testimonial-three__ratting">
                                                {Array.from({ length: item.rating }).map((_, index) => (
                                                    <span key={index} className="fas fa-star"></span>
                                                ))}
                                            </div>
                                            <p className="testimonial-three__text">{item.text}</p>
                                        </div>
                                        <div className="testimonial-three__quote">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsOne;