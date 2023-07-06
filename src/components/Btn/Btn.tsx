import './Btn.sass';

export interface BtnProps {
    title : string,
    theme : string,
    type : "button" | "submit" | "reset"
}

const Btn = ({title,theme,type}: BtnProps) => (
    <button type={type} className={"btn"} data-testid="Btn">
        {title}
    </button>
);

export default Btn;
