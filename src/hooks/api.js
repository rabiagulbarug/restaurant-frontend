import {useCallback, useState} from "react";

export const useApi = (route) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)
    const load = useCallback(({authToken, body, method, query = new URLSearchParams()}) => {
        setIsLoading(true);
        setError(undefined);
        fetch(`/api/${route}?${query?.toString()}`, {
            method: method ?? 'GET',
            body: body ? JSON.stringify(body) : undefined,
            headers: authToken ? {'Authorization': `Bearer ${authToken}`} : undefined,
        })
            .then(res => res.json())
            .then(res => setData(res?.data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [route]);

    return [load, {data, isLoading, error}];
}