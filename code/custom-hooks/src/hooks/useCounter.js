/**
 * Custom hook
 */

import {useEffect, useState} from "react";

const useCounter = (value, operate) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
        const interval = setInterval(() => {
            if (operate === '+'){
                setCounter((prevCounter) => prevCounter + 1);
            }else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1);

        return () => clearInterval(interval);
    }, [operate]);

    return counter;
}
export default useCounter;