import { Fragment } from "react";
import { Route } from "react-router";
import StepHeader from "./layout/StepHeader/StepHeader";

export const CheckoutTemplate = (props) => {
    const { Component, ...restProps } = props;


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <StepHeader/>
            <Component {...propsRoute}/>
        </Fragment>
    }} />
}