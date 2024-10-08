import React, { useEffect, useRef } from "react";

function Input({
    type = 'text',
    name,
    value,
    className,
    isFocused,
    handleChange,
    required,
    autoComplete,
    placeholder = '',
}) {

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    if (type == 'file') {
        return (<>
            <input
                type={type}
                name={name}
                id={name}
                value={value?? ''}
                className={
                    `block w-full p-1 border border-neutral-400 focus:outline-none focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 rounded-lg shadow-sm ` +
                    className
                }
                ref={input}
                onChange={(e) => handleChange(e)}
                required={required}
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
        </>)
    }

    return (
        <>
            <input
                type={type}
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
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input;
