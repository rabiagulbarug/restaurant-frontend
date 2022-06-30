import {useCallback, useState} from "react";

export const useApi = (route) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)
    const load = useCallback(() => {
        setIsLoading(true);
        setError(undefined);
        fetch(`/api/${route}`)
            .then(res => res.json())
            .then(res => setData(res?.data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [route]);

    return [load, {data, isLoading, error}];
}