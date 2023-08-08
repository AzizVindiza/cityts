// import {useGetPokemonByNameQuery} from "../../redux/api";

import SectionSwiperFirst from "./SectionSwiperFirst/SectionSwiperFirst";
import SectionSearch from "./SectionSearch/SectionSearch";
import SectionCategory from "./SectionCategory/SectionCategory";


export const HomePage = () => {
    return (
        <main className={"homePage"}>
            <SectionSwiperFirst />
            <SectionSearch/>
            <SectionCategory/>
        </main>
    );
}

export default HomePage;
