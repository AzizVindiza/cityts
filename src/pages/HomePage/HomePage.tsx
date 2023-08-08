// import {useGetPokemonByNameQuery} from "../../redux/api";

import SectionSwiperFirst from "./SectionSwiperFirst/SectionSwiperFirst";
import SectionSearch from "./SectionSearch/SectionSearch";
import SectionCategory from "./SectionCategory/SectionCategory";
import SectionSwiperSecond from "./SectionSwiperSecond/SectionSwiperSecond";


export const HomePage = () => {
    return (
        <main className={"homePage"}>
            <SectionSwiperFirst />
            <SectionSearch/>
            <SectionCategory/>
            <SectionSwiperSecond/>
        </main>
    );
}

export default HomePage;
