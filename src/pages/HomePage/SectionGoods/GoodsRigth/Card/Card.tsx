import React from 'react';
import "./card.sass"
import svg from "./image/Component 269.svg"
import svg2 from "./image/Frame 738001966.svg"
import logo from "./image/image 3.svg"
import photo from "./image/Rectangle 2565.svg"
const Card = () => {
    return (
        <div className={'card'}>
            <div className="card__logo">
                <img src={logo} alt="" className="card__logo-img"/>
            </div>
            <div className="card__wrapper">
                <div className="card__left">
                    <div className="card__first">
                        <img src={svg} alt="svg"/>
                    </div>
                    <div className="card__second">
                        <div className={'card__orange'}>до 10%</div>
                    </div>
                </div>
                <div className="card__center">
                    <div className="card__center-first">
                        <img src={svg2} alt="svg"/>
                    </div>
                    <div className="card__center-second">
                        <div className={'card__blue'}>до 5%</div>
                    </div>
                </div>
            </div>
            <div className="card__image">
                <img src={photo} alt="" className="card__img"/>
            </div>
            <div className="card__wrapp">
                <h2 className="card__h2">Футболка “NIKE”</h2>
                <div className="card__block">
                    <div className="card__right">
                        <div className="card__star">
                            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.34314 0.451782L6.54274 4.1438H10.4248L7.28414 6.42559L8.48375 10.1176L5.34314 7.83581L2.20252 10.1176L3.40213 6.42559L0.261512 4.1438H4.14353L5.34314 0.451782Z"
                                    fill="#FFC700"/>
                            </svg>

                        </div>
                        <div className="card__num">4.5</div>
                    </div>
                    <div className="card__heart">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5334 1C9.16661 1 8 3.36363 8 3.36363C8 3.36363 6.8334 1 4.46665 1C2.54321 1 1.02006 2.63016 1.00037 4.57536C0.960271 8.6131 4.16224 11.4845 7.6719 13.8977C7.76865 13.9643 7.88298 14 8 14C8.11703 14 8.23135 13.9643 8.32811 13.8977C11.8374 11.4845 15.0394 8.6131 14.9996 4.57536C14.9799 2.63016 13.4568 1 11.5334 1Z"
                                stroke="#707070" strokeWidth="1.18658" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>
            </div>
            <div className="card__cost">
                <p className="card__price">7000c</p>
                <p className="card__throuth">9500с</p>
            </div>
            <p className="card__text">Привнесите стиль и комфорт в свой повседневный гардероб с нашей футболкой и комфорт в свой повсе  и комфорт в  l,a  и комфорт в свой...</p>
            <div className="card__last">
                <h4 className="card__h4">Опубликовано: 26.06.2023</h4>
                <h4 className="card__h4">Куплено 671</h4>
            </div>
        </div>
    );
};

export default Card;