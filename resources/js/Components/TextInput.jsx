import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
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
            className={
                'border-gray-200 bg-white/60 text-gray-950 focus:border-white/50 focus:ring-black rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
