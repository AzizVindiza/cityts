import NewSentence from "./NewSentense/NewSentence";
import Supply from "./Supply/Supply";
import Popular from "./Popular/Popular";
import React from "react";
import "./goodsRigth.sass"

const GoodsRight = () => {

    return (
        <div className={'goodsRight'}>
            <div className="container goodsRight__container">
                <div className="goodsRight__left">
                    <div className={'goodsRight__allProduct'}>
                        <div className="goodsRight__wrapp">
                            <div className="goodsRight__box">
                                <h2 className="goodsRight__category">Одежда</h2>
                                <div className="goodsRight__close">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.2L11.3 4.5L8 7.8L4.7 4.5L4 5.2L7.3 8.5L4 11.8L4.7 12.5L8 9.2L11.3 12.5L12 11.8L8.7 8.5L12 5.2Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="goodsRight__box">
                                <h2 className="goodsRight__category">Одежда</h2>
                                <div className="goodsRight__close">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.2L11.3 4.5L8 7.8L4.7 4.5L4 5.2L7.3 8.5L4 11.8L4.7 12.5L8 9.2L11.3 12.5L12 11.8L8.7 8.5L12 5.2Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="goodsRight__box">
                                <h2 className="goodsRight__category">Одежда</h2>
                                <div className="goodsRight__close">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 5.2L11.3 4.5L8 7.8L4.7 4.5L4 5.2L7.3 8.5L4 11.8L4.7 12.5L8 9.2L11.3 12.5L12 11.8L8.7 8.5L12 5.2Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goodsRight__filter-block">
                        <div className="goodsRight__lines">
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 2H20" stroke="#EC9611" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M1 8H20" stroke="#EC9611" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M1 14H20" stroke="#EC9611" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="14.5" cy="2" r="1.5" fill="#F7F7F7" stroke="#EC9611"/>
                                <circle cx="7" cy="8" r="1.5" fill="#F7F7F7" stroke="#EC9611"/>
                                <circle cx="12" cy="14" r="1.5" fill="#F7F7F7" stroke="#EC9611"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <NewSentence/>
                <Supply/>
                <Popular/>
            </div>
        </div>
    );
};

export default GoodsRight;