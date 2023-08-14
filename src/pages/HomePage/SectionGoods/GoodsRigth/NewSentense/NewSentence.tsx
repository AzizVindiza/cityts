import React, {useContext, useEffect, useRef} from 'react';
import "./newSentence.sass"
import {StateContext} from "../../../../../Context/Context";
import Card from "../Card/Card";

const NewSentence = () => {
    const context = useContext(StateContext)
    const list: string[] = ['Все', 'По дате', 'Сначала дорогие', 'Сначала дешевые', 'По рейтингу', 'По возрастанию скидки']

    // Create a ref for the element to detect outside clicks
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event : any) => {
            if (ref && !ref.current!.contains(event.target) && context?.sort) {
                context.setSort(false)
            }
        }
        // When user click any place in document
        document.addEventListener('click', handleClickOutside)

        return () : void => {
            // Clean it on rerender
            document.removeEventListener('click', handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, context?.sort, context!.setSort, context])



    return (
        <div className={'newSentence'}>
            <div className="container newSentence__container">
                <div className="newSentence__content">
                    <h2 className="newSentence__h2">Новые предложение </h2>
                    <div ref={ref} onClick={(event) => {
                        event.preventDefault()
                        context?.setSort(!context?.sort)
                    }} className="newSentence__filter">
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
                                            <div key={item} onClick={() => context?.setSortElement(item)}
                                                 className={'newSentence__flex'}>
                                                <div
                                                    className={`newSentence__square ${context.sortElement === item && 'newSentence__square_active'}`}>

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
                <div className="newSentence__wrapper">
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