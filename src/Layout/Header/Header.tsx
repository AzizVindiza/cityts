import styles from './Header.module.sass';



const Header = () => (
    <header className={styles.header} data-testid="Header">
        <div className="container">
            Header Section
        </div>
    </header>
);

export default Header;
