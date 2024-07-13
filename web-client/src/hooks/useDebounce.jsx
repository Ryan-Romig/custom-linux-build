import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that debounces a value.
 * will only return after the delay has passed without the value changing.
 * @param {any} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds before updating the debounced value.
 * @returns {any} - The debounced value.
 */
const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState("");
    const timerRef = useRef();

    useEffect(() => {
        timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [value, delay]);

    return debouncedValue;
};
export default useDebounce;
