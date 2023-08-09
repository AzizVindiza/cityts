// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./sectionSwiperThird.sass"
import {Swiper, SwiperSlide} from 'swiper/react';
import React, {useContext} from "react";
import {StateContext} from "../../../Context/Context";



interface SwiperTypescript {
    loop: boolean,
    slidesPerView: number;
    spaceBetween: number;
    grabCursor: boolean,
    speed? : number
}

export const SectionSwiperFirst = () => {
    const swiperParams: SwiperTypescript = {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 14,
        grabCursor: true,
        speed: 2000
    }
    return (
        <main className={"sectionSwiperThird"}>
            <div className="sectionSwiperThird__container">

                <Swiper {...swiperParams}
                    className="sectionSwiperThird__Swiper"
                >
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">4</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">5</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">6</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">7</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sectionSwiperThird__card">8</div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </main>
    );
}

export default SectionSwiperFirst;

