import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import present from "./3d-render-gift-box-with-ribbon-present-package 1.svg"
import present2 from "./3d-render-gift-box-with-ribbon-present-package 2.svg"
import vector from "./Vector (1).svg"
import vector2 from "./solar_share-bold.svg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./sectionSwiperSecond.sass"

interface SwiperType {
    slidesPerView : number
    spaceBetween: number;
    pagination: { clickable: boolean; };
    modules: any[];
    breakpoints: {
        // when window width is >= 320px
        393: {
            slidesPerView: number,
            spaceBetween?: number,
            slideToClickedSlide?: boolean,
        },
        // when window width is >= 480px
        481: {
            slidesPerView: number,
            spaceBetween: number,
            slideToClickedSlide?: boolean,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: number,
            spaceBetween: number,
            slideToClickedSlide?: boolean,
        }
    }
}

const SectionSwiperSecond : React.FC = () => {
    const swiperType: SwiperType = {
        slidesPerView : 3,
        spaceBetween: 30,
        pagination: {
            clickable: true,
        },
        modules: [Pagination],
        breakpoints: {
            // when window width is >= 393px
            393: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 481px
            481: {
                slidesPerView: 1,
                spaceBetween: 30,
                slideToClickedSlide: true,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slideToClickedSlide: true,
            }
        }

    };

    return (
        <div className={'SectionSwiperSecond'}>
            <div className="container SectionSwiperSecond__container">
                <Swiper {...swiperType}
                        className="SectionSwiperSecond__mySwiper"
                >
                    <SwiperSlide >
                        <div className="SectionSwiperSecond__block">
                            <div className="SectionSwiperSecond__picture">
                                <img src={present} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__pic">
                                <img src={present2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector">
                                <img src={vector} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector2">
                                <img src={vector2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <h2 className="SectionSwiperSecond__h2">Делитесь компаниями друзьям и получайте бонусы за их
                                покупки!</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="SectionSwiperSecond__block">
                            <div className="SectionSwiperSecond__picture">
                                <img src={present} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__pic">
                                <img src={present2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector">
                                <img src={vector} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector2">
                                <img src={vector2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <h2 className="SectionSwiperSecond__h2">Делитесь компаниями друзьям и получайте бонусы за их
                                покупки!</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="SectionSwiperSecond__block">
                            <div className="SectionSwiperSecond__picture">
                                <img src={present} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__pic">
                                <img src={present2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector">
                                <img src={vector} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector2">
                                <img src={vector2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <h2 className="SectionSwiperSecond__h2">Делитесь компаниями друзьям и получайте бонусы за их
                                покупки!</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="SectionSwiperSecond__block">
                            <div className="SectionSwiperSecond__picture">
                                <img src={present} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__pic">
                                <img src={present2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector">
                                <img src={vector} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <div className="SectionSwiperSecond__vector2">
                                <img src={vector2} alt="" className="SectionSwiperSecond__img1"/>
                            </div>
                            <h2 className="SectionSwiperSecond__h2">Делитесь компаниями друзьям и получайте бонусы за их
                                покупки!</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SectionSwiperSecond;