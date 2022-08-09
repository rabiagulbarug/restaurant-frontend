import {useCallback, useEffect, useReducer, useState} from 'react';
import {useRouter} from "next/router";
import {useAuth} from "../../hooks/use-auth";

const LoginPage = () => {
    const [values, setValue] = useReducer((state, action) => {
        switch (action.type) {
            case 'username':
                return {...state, username: action.payload};
            case 'password':
                return {...state, password: action.payload};
            default:
                return state;
        }
    },{username: 'rabia', password: 'rabia123'});

    const {login, user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        const {username, password} = values;
        login(username, password);
    }, [values]);

    return(
            <div className="card card-info col-6">
                <div className="card-header">
                    <h3 className="card-title">Horizontal Form</h3>
                </div>
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="form-group row">
                            <label htmlFor="username" defaultValue={values.username}
                                   onChange={e => setValue({type: 'username', payload: e.target.value})}
                                   className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="username"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" defaultValue={values.password}
                                   onChange={e => setValue({type: 'password', payload: e.target.value})}
                                   className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-info">Sign in</button>
                        <button type="submit" className="btn btn-default float-right">Cancel</button>
                    </div>
                </form>
            </div>
    );
}

LoginPage.getLayout = page => {page}

export default LoginPage;