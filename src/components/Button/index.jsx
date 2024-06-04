import React from "react";
import './styles.module.css';

export const Button = ({ title, ...rest }) => {
    return <button {...rest}>
        {title}
    </button>
};