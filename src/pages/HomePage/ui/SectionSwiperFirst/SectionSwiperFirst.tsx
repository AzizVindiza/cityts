// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./sectionSwiperFirst.sass"
import {Swiper, SwiperSlide} from 'swiper/react';

// import React, { useRef, useState } from 'react';
// import required modules
import {FreeMode, Pagination} from 'swiper/modules';
import React, {useContext} from "react";
import {StateContext} from "../../../../Context/Context";


interface SwiperTypescript {
    slidesPerView: number;
    spaceBetween: number;
    freeMode: boolean;
    pagination: {
        clickable: boolean;
    }
    ;
    modules: any[];
}
export const SectionSwiperFirst  = () => {
    const context = useContext(StateContext)
    const arr : string[] = ['Афиши', 'Акции', 'Куда сходить?', 'Сертификаты', 'Промокоды', 'Для бизнеса', 'Q&A']
    const swiperParams : SwiperTypescript = {
        slidesPerView : 3,
        spaceBetween : 20,
        freeMode: true,
        pagination : {
            clickable: true,
        },
        modules : [FreeMode, Pagination]
    }
    return (
        <main className={"sectionSwiperFirst"}>
            <div className="sectionSwiperFirst__container container">
                <Swiper {...swiperParams}
                    className="mySwiper"
                >
                    {
                        arr.map((item,index) => (
                            <SwiperSlide key={index} onClick={() => context?.setCategorySwiper(index)} className={`sectionSwiperFirst__slide ${context?.categorySwiper === index ? 'sectionSwiperFirst__slide_active' : ""}`}>{item}</SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </main>
    );
}

export default SectionSwiperFirst;

