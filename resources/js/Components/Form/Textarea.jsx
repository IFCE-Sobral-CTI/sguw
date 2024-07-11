import React, { useEffect, useRef } from "react";

function Textarea({
    name,
    value,
    className,
    isFocused,
    handleChange,
    required,
    placeholder = '',
}) {

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <>
            <textarea
                name={name}
                id={name}
                value={value?? ''}
                className={
                    `w-full border-neutral-400 focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 rounded-lg shadow-sm ` +
                    className
                }
                ref={input}
                onChange={(e) => handleChange(e)}
                required={required}
                placeholder={placeholder}
            />
        </>
    )
}

export default Textarea;
