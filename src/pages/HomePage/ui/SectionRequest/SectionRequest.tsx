import React from "react";
import "./sectionRequest.sass"
import oval from "./Component 265.svg"
import svg from "./Mask group.svg"
export const SectionRequest = () => (
    <main className={"sectionRequest"} data-testid="SectionRequest">
        <div className="container sectionRequest__container">
            <div className="sectionRequest__wrapper">
                <div className="sectionRequest__left">
                    <h2 className="sectionRequest__h2">Популярные запросы</h2>
                    <div className="sectionRequest__inner">
                        <div className="sectionRequest__svg">
                            <img src={svg} alt=""/>
                        </div>
                        <h3 className="sectionRequest__h3">Посмотреть на карте</h3>
                    </div>
                </div>
                <div className="sectionRequest__right">
                    <img src={oval} alt="" className="sectionRequest__img"/>
                </div>
            </div>
        </div>
    </main>
);

export default SectionRequest;
