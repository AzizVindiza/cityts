// import {useGetPokemonByNameQuery} from "../../redux/api";

import SectionSwiperFirst from "./SectionSwiperFirst/SectionSwiperFirst";
import SectionSearch from "./SectionSearch/SectionSearch";
import SectionCategory from "./SectionCategory/SectionCategory";
import SectionSwiperSecond from "./SectionSwiperSecond/SectionSwiperSecond";
import SectionSwiperThird from "./SectionSwiperThird/SectionSwiperThird";
import SectionRequest from "./SectionRequest/SectionRequest";
import SectionGoods from "./SectionGoods/SectionGoods";


export const HomePage = () => {
    return (
        <main className={"homePage"}>
            <SectionSwiperFirst />
            <SectionSearch/>
            <SectionCategory/>
            <SectionSwiperSecond/>
            <SectionRequest/>
            <SectionSwiperThird/>
            <SectionGoods/>
        </main>
    );
}

export default HomePage;
