import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput(
    { className = '', children, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    return (
        <select
            {...props}
            className={
                "border-gray-300 dark:border-gray-700 dark:bg-white/60 dark:text-gray-950 " +
                "focus:border-white/50 focus:ring-black rounded-md shadow-sm " +
                className
            }
            ref={input}
        >
            {children}
        </select>
    );
});
