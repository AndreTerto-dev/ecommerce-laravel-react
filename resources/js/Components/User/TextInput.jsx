import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ placeholder = '', type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            placeholder={placeholder}
            className={
                'border border-gray-300 rounded-lg w-full p-3 ' +
                className
            }
            ref={input}
        />
    );
});
