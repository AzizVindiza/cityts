import search from "./Vector (1).svg"
import "./headerSearch.sass"

export const SectionSearch = () => (
    <div className={"headerSearch"}>
        <div className="headerSearch__container">
            <label className="headerSearch__label">
                <input placeholder={'Поиск'} type="text" className="headerSearch__input"/>
            </label>
            <div className="headerSearch__svg">
                <img placeholder={'Поиск'} src={search} alt="" className="sectionSearch__img"/>
            </div>
        </div>
    </div>
);

export default SectionSearch;
