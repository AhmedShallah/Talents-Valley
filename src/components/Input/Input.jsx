import React from "react";

const Input = ({ value, label, name, placeholder, type, onChange, style }) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
        />
    );
};

export default Input;
