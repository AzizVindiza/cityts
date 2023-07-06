import './Header.sass';

export interface HeaderProps {
}

const Header = ({}: HeaderProps) => (
    <header className={"header"} data-testid="Header">
        <div className="container">
            Header Section
        </div>
    </header>
);

export default Header;
