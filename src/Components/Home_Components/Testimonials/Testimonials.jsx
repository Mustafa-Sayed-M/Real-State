import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadSection from '../../Shared/HeadSection';
import TestimonialCard from './Components/TestimonialCard';
import testimonials from '../../../Data/testimonials.json';

function Testimonials() {
    return (
        <section className='testimonials py-7' id='testimonials'>
            <div className='container'>
                {/* Header Section */}
                <HeadSection
                    title={'What Our Clients Say'}
                    description={'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'}
                    link={{
                        to: '/',
                        text: 'View All Testimonials'
                    }}
                />
                {/* Testimonials Slider */}
                <div className='testimonials-slider'>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            991: { slidesPerView: 3 }
                        }}
                    >
                        {
                            testimonials.map((testimonial, index) => <SwiperSlide key={index}>
                                <TestimonialCard testimonialData={testimonial} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;