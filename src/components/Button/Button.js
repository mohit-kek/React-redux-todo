import React from 'react';
import { getClass } from '../../utils/util';
import "./Button.css";

const Button = ({ children, type, variant, ...rest }) => {
    return (
        <button className={`button button-${variant}`} type={type === 'submit' ? 'submit' : 'button'} {...rest}>{children} </button>
    )
}

function SelectButton({ children, ...rest }) {
    return (
        <select className={`button button-select `} {...rest}>
            {children}
        </select>
    )
}

export { SelectButton };
export default Button;