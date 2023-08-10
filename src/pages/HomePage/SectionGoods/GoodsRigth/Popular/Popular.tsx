import React, {useContext} from 'react';
import Card from "../Card/Card";
import {StateContext} from "../../../../../Context/Context";

const Popular = () => {
    const context = useContext(StateContext)
    const list: string[] = ['Все', 'По дате', 'Сначала дорогие', 'Сначала дешевые', 'По рейтингу', 'По возрастанию скидки']
    return (

        <div className={'newSentence'}>
            <div className="container newSentence__container">
                <div className="newSentence__block">
                    <h2 className="newSentence__h2">Популярные</h2>
                </div>

                <div className="newSentence__content">
                    <div onClick={() => context?.setPopular(!context?.Popular)} className="newSentence__filter">
                        <h3 className="newSentence__h3">{context?.sortPopular}</h3>
                        <div className={"newSentence__svg"}>
                            {
                                context?.Popular ?
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
                            context?.Popular &&
                            <div className="newSentence__popUp">
                                <div className="newSentence__box">
                                    {
                                        list.map((item) => (
                                            <div onClick={() => context?.setSortPopular(item)}
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

export default Popular;