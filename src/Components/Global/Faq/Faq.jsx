import React from 'react';
import FaqCard from './Components/FaqCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadSection from '../../Shared/HeadSection';
import faqs from '../../../Data/faqs.json';
import 'swiper/css';

function Faq() {
    return (
        <section className='faq py-7' id='faq'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={'Frequently Asked Questions'}
                    description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
                    link={{
                        to: '/',
                        text: `View All FAQ’s`
                    }}
                />
                {/* Faqs Slider */}
                <div className='faq-slider'>
                    <Swiper
                        spaceBetween={15}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            991: { slidesPerView: 3 }
                        }}
                    >
                        {faqs.map((faq, index) => <SwiperSlide key={index}>
                            <FaqCard faqData={faq} />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Faq;