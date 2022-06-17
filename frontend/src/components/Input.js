import React from "react";

const Input = (props) => {
    const { name, label, error, onChange } = props;
    const className = error ? "form-control is-invalid" : "form-control";
    return (
        <div className="form-group mt-3">
            <label>{label}</label>
            <input className={className} name={name} onChange={onChange} />
            <div className="invalid-feedback">{error}</div>
        </div>
    )
}

export default Input;