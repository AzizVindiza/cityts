import './Header.sass';
import logo from "./logo.png"
import HamburgerToggle from "./HamburgerToggle/HamburgerToggle";
import HeaderSearch from "./HeaderSearch/HeaderSearch";



const Header = () => {
    return (

        <header className={"header"} data-testid="Header">
            <div className="container header__container">
                <div className="header__cart header__cart_second ">
                    <div className="header__logo">
                        <img src={logo} alt="" className="header__img"/>
                    </div>
                    <h2 className="header__h2">Единая карта лояльности</h2>
                </div>
                <HamburgerToggle/>
                <div className="header__cart">
                    <div className="header__logo">
                        <img src={logo} alt="" className="header__img"/>
                    </div>
                    <h2 className="header__h2">Единая карта лояльности</h2>
                </div>
                <HeaderSearch/>
                <div className="header__reg">
                   <h3 className="header__h3">Регистрация</h3>
                </div>
            </div>
        </header>
    );

}

export default Header;
