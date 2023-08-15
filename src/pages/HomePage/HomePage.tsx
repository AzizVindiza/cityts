// import {useGetPokemonByNameQuery} from "../../redux/api";

import SectionSwiperFirst from "./ui/SectionSwiperFirst/SectionSwiperFirst";
import SectionSearch from "./ui/SectionSearch/SectionSearch";
import SectionCategory from "./ui/SectionCategory/SectionCategory";
import SectionSwiperSecond from "./ui/SectionSwiperFirst/SectionSwiperSecond/SectionSwiperSecond";
import SectionSwiperThird from "./ui/SectionSwiperThird/SectionSwiperThird";
import SectionRequest from "./ui/SectionRequest/SectionRequest";
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
