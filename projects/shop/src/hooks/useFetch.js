import { useCallback, useState } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendHttpRequest = useCallback(async (requestOptions, manageData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestOptions.endpoint, {
                method: requestOptions.method ? requestOptions.method : "GET",
                headers: requestOptions.headers ? requestOptions.headers : {},
                body: requestOptions.body ? JSON.stringify(requestOptions.body) : null,
            });
            console.log(await response)
            if (!response.ok) {
                throw new Error("Query error...");
            }

            const data = await response.json();
            manageData(data);
        } catch (err) {
            setError(err.message || "Something went wrong...");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendHttpRequest,
    };
};

export default useFetch;