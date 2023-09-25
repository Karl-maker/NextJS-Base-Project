import { useState } from 'react';

/**
 * useFetch Hook
 *
 * This custom hook is used for making asynchronous data fetch requests. It manages
 * the fetch operation, loading state, and the result data.
 *
 * @returns {Object} An object containing the fetched result, loading state, and a fetch function.
 *
 * @example
 * // Usage example:
 * const { result, loading, fetch } = useFetch();
 *
 * // Use the 'fetch' function to initiate a data fetch operation:
 * fetch(async () => {
 *   const response = await fetch('https://api.example.com/data');
 *   const data = await response.json();
 *   return data;
 * });
 *
 * // 'result' contains the fetched data, and 'loading' indicates the loading state.
 */

const useFetch = () => {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false); // Initialize as false

    const fetch = (getResourceFunction: Function) => {
        setLoading(true);
        getResourceFunction()
            .then((data: any) => {
                setResult(data);
                setLoading(false);
            })
            .catch((error: any) => {
                setLoading(false);
            });
    };

    return {
        result,
        loading,
        fetch,
    };
}

export default useFetch;
