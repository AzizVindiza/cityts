import React from 'react';
import Aside from "./Aside/Aside";
import GoodsRight from "./GoodsRigth/GoodsRight";
import "./sectionGoods.sass"

const SectionGoods = () => {
    return (
        <div className={'sectionGoods'}>
            <Aside/>
            <GoodsRight/>
        </div>
    );
};

export default SectionGoods;