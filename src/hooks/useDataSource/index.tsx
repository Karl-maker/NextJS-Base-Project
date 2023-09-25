import { useState, useEffect } from 'react';

/**
 * useDataSource Hook
 *
 * This custom hook is used for fetching data asynchronously. It accepts a
 * resource-fetching function and returns the fetched data and loading state.
 *
 * @param {Function} getResourceFunction - A function that fetches the desired resource.
 *
 * @returns {Object} An object containing the fetched result and loading state.
 *
 * @example
 * // Usage example:
 * const { result, loading } = useDataSource(async () => {
 *   const response = await fetch('https://api.example.com/data');
 *   const data = await response.json();
 *   return data;
 * });
 *
 * // 'result' contains the fetched data, and 'loading' indicates the loading state.
 */

const useDataSource = (getResourceFunction: Function) => {

    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async() =>{
            setLoading(true);
            setResult(await getResourceFunction());
            setLoading(false);
        })();
    }, []);

    return {
        result,
        loading
    }

}

export default useDataSource;