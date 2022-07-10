import {useContext, useEffect, useState} from "react";
import {useApi} from "../hooks/api";

const AuthenticationContext = React.createContext(null);

const useAuth = () => {
    const authContext = useContext(AuthenticationContext);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [load, {data: user, error, isLoading}] = useApi('/auth/me');

    useEffect(() => {
        load({authToken: token});
    }, []);

    return {token, user, isLoading, error};
};