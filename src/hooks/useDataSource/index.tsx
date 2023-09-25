import { useState, useEffect } from 'react';

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