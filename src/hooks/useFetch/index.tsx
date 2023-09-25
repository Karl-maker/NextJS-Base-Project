import { useState } from 'react';

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
