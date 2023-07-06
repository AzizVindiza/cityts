import './Header.sass';
import {NavLink} from "react-router-dom";
import logo from "./logo.png"
import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import {StateContext} from "../../Context/Context";
import {useContext} from "react";
export interface HeaderProps {
}

const Header = ({}: HeaderProps) => {
     const states = useContext(StateContext)
    return (

        <header className={"header"} data-testid="Header">
            <div className="container header__container">
                <h1 className="header__h1">
                    <NavLink className={'header__logo'} to={'/'}>
                        <img src={logo} alt="" className="header__img"/>
                    </NavLink>

                    <h2 className="header__h2">
                        дисконтная карта
                        для скидок
                        {states!.activeMenu ? "hello": "world"}
                    </h2>
                </h1>
                <HamburgerToggle/>
            </div>
        </header>
    );

}

export default Header;
