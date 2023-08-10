import React, {useContext} from 'react';
import "./newSentence.sass"
import {StateContext} from "../../../../../Context/Context";
import Card from "../Card/Card";

const NewSentence = () => {
    const context = useContext(StateContext)
    const list: string[] = ['Все', 'По дате', 'Сначала дорогие', 'Сначала дешевые', 'По рейтингу', 'По возрастанию скидки']
    return (
        <div className={'newSentence'}>
            <div className="container newSentence__container">
                <div className="newSentence__wrapper-first">
                    <h2 className="newSentence__h2">Новые предложение </h2>
                    <div className="newSentence__content">
                        <div onClick={() => context?.setSort(!context?.sort)} className="newSentence__filter">
                            <h3 className="newSentence__h3">{context?.sortElement}</h3>
                            <div className={"newSentence__svg"}>
                                {
                                    context?.sort ?
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.832 16.3333L13.9987 10.5L8.16537 16.3333L19.832 16.3333Z"
                                                  fill="#fff"/>
                                        </svg> :
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.20703 9.58333L11.9987 14.375L16.7904 9.58333L7.20703 9.58333Z"
                                                  fill="#fff"/>
                                        </svg>
                                }
                            </div>
                            {
                                context?.sort &&
                                <div className="newSentence__popUp">
                                    <div className="newSentence__box">
                                        {
                                            list.map((item) => (
                                                <div onClick={() => context?.setSortElement(item)}
                                                     className={'newSentence__flex'}>
                                                    <div className="newSentence__quater">

                                                    </div>
                                                    <div className="newSentence__item">{item}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }

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
        </div>
    );
};

export default NewSentence;