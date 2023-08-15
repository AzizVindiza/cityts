import "./sectionCategory.sass"
import {useContext} from "react";
import {StateContext} from "../../../../Context/Context";
export const SectionCategory = () => {
    const context = useContext(StateContext)
    const arr : string[] = ['Афиши', 'Акции', 'Куда сходить?', 'Сертификаты', 'Промокоды', 'Промокоды', 'Промокоды']

    return (
        <main className={"sectionCategory"}>
            <div className="sectionCategory__container container">
                <ul className="sectionCategory__list">
                    {
                        arr.map((item,index) => (
                            <li key={index} onClick={() => context?.setCategory(index)} className={`sectionCategory__item ${context!.category === index ? "sectionCategory__item_active" : ""}`}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}

export default SectionCategory;
