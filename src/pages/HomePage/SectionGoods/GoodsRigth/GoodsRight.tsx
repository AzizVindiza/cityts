import React from 'react';
import "./goodsRigth.sass"
import Card from "./Card/Card";
import Supply from "./Supply/Supply";
import Popular from "./Popular/Popular";

const GoodsRight = () => {
    return (
        <div className={'goodsRight'}>
            <div className="container goodsRight__container">
                <div className="goodsRight__block">
                    <h2 className="goodsRight__h2">Новые предложение </h2>
                    <div className="goodsRight__filter">
                        <h3 className="goodsRight__h3">По дате</h3>
                        <div className="goodsRight__svg">
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.20703 9.58333L11.9987 14.375L16.7904 9.58333L7.20703 9.58333Z"
                                      fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="goodsRight__wrapper">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <Supply/>
            <Popular/>
        </div>
    );
};

export default GoodsRight;