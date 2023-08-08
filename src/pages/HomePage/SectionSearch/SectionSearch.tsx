import search from "./Vector (1).svg"
import "./SectionSearch.sass"

export const SectionSearch = () => (
    <div className={"sectionSearch"}>
        <div className="sectionSearch__container container">
            <label className="sectionSearch__label">
                <input placeholder={'Поиск'} type="text" className="sectionSearch__input"/>
            </label>
            <div className="sectionSearch__svg">
                <img src={search} alt="" className="sectionSearch__img"/>
            </div>
        </div>
    </div>
);

export default SectionSearch;
