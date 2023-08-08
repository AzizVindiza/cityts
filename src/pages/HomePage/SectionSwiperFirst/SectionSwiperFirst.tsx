// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./sectionSwiperFirst.sass"
import {Swiper, SwiperSlide} from 'swiper/react';

// import React, { useRef, useState } from 'react';
// import required modules
import {FreeMode, Pagination} from 'swiper/modules';
import React from "react";


interface SwiperTypescript {
    children: Element[];
    slidesPerView: number;
    spaceBetween: number;
    freeMode: boolean;
    pagination: {
        clickable: boolean;
    }
    ;
    modules: any[];
    className: string;
}
export const SectionSwiperFirst  = () => {
    const arr : string[] = ['Афиши', 'Акции', 'Куда сходить?', 'Сертификаты', 'Промокоды', 'Промокоды', 'Промокоды']

    return (
        <main className={"sectionSwiperFirst"}>
            <div className="sectionSwiperFirst__container container">
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={30}
                    // freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        arr.map((item) => (
                            <SwiperSlide className={'sectionSwiperFirst__slide'}>{item}</SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </main>
    );
}

export default SectionSwiperFirst;

