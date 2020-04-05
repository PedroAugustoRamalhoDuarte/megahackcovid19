import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redorect, Route, Redirect } from "react-router-dom";

const CustomRoute = props => {
    const [returnedRoute, setReturnedRoute] = useState("");
    useEffect(() => {
        switch (props.condition) {
            case "paciente":
                return setReturnedRoute(
                    props.user.role === "paciente" ? (
                        <Route {...props} />
                    ) : (
                            <Redirect to="/index" />
                        )
                );
            case "medico":
                return setReturnedRoute(
                    props.user.role === "medico" ? (
                        <Route {...props} />
                    ) : (
                            <Redirect to="/index" />
                        )
                );
            default:
                return setReturnedRoute(<Route {...props} />);
        }
    }, [props.user]);
    return returnedRoute;
}

const mapStateToProps = state => ({
    user: state.userReducer
});
export default connect(
    mapStateToProps,
    null
)(CustomRoute);