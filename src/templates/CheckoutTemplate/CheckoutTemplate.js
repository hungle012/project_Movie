import { Fragment } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";
import StepHeader from "./layout/StepHeader/StepHeader";

const CheckoutTemplate = (props) => {
    const { Component, ...restProps } = props;

    // if (!localStorage.getItem(USER_LOGIN)) {
    //     return <Redirect to="/login" />
    // }


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <StepHeader />
            <Component {...propsRoute} />
        </Fragment>
    }} />
}

export default CheckoutTemplate;