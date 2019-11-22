import React from "react";
import {RouteProps} from 'react-router';
import {Route, Redirect} from "react-router-dom";
import auth from "../services/auth";

export const ProtectedRoute: React.FC<RouteProps> = ({component: Component, ...rest}) => {
    if (!Component) return null;
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
