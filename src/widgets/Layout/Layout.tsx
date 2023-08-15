import Header from "./../Layout/Header/Header";
import Footer from "./Footer/ui/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => (
    <main className={"layout"} data-testid="Layout">
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
);

export default Layout;
