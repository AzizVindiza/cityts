import './Footer.sass';

export interface FooterProps {
}

const Footer = ({}: FooterProps) => (
    <footer className={"footer"} data-testid="Footer">
        <div className="container">
            Footer Section
        </div>
    </footer>
);

export default Footer;
