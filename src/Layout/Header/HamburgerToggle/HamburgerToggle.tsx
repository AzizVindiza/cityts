import './HamburgerToggle.sass';

export interface HamburgerToggleProps {
}

const HamburgerToggle = ({}: HamburgerToggleProps) => (
    <div className={"hamburgerToggle hamburgerToggle_active"} data-testid="HamburgerToggle">
        <div className="hamburgerToggle__line"></div>
        <div className="hamburgerToggle__line hamburgerToggle_short"></div>
        <div className="hamburgerToggle__line"></div>
    </div>
);

export default HamburgerToggle;
