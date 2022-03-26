import React from "react";

const Button = ({ children, buttonOnClick, active }) => (
    <button onClick={() => buttonOnClick()} disabled={active}>
        {children}
    </button>
);
export default Button;