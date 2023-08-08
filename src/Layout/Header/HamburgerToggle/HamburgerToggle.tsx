import './HamburgerToggle.sass';
import {useContext} from "react";
import {StateContext} from "../../../Context/Context";
import svg from "./Group 151742.svg"



const HamburgerToggle = () => {
    const  context = useContext(StateContext)
    // We use Context to open and close the burger menu
    const  handleClick = () => {
        context?.setChangeBurger(!context?.changeBurger)

    }
    // Use handleClick for change state
    return (
        <>
            <div onClick={handleClick} className={`hamburgerToggle ${context?.changeBurger ? "hamburgerToggle_active" : ""}`} data-testid="HamburgerToggle">
                <img src={svg} className={'hamburgerToggle__svg'} alt=""/>
            </div>
            <div onClick={handleClick} className={`hamburgerToggle hamburgerToggle_second ${context?.changeBurger ? "hamburgerToggle_active" : ""}`} data-testid="HamburgerToggle">
                <div className="hamburgerToggle__block">
                    <img src={svg} className={'hamburgerToggle__svg hamburgerToggle__svg_second'} alt=""/>
                </div>
                <h1 className='hamburgerToggle__title'>Каталог</h1>
            </div>
        </>

    );
}

export default HamburgerToggle;
