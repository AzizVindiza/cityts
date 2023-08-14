import './Btn.sass';
import React from "react";

export interface BtnProps extends  React.HTMLProps<HTMLButtonElement>{
    children: string
    title : string,
    type : "button" | "submit" | "reset",
    theme : string

}

const Btn = ({title,theme,type}: BtnProps) => (
    <button  type={type} className={"btn"}>
        {title}
    </button>
);

export default Btn;
