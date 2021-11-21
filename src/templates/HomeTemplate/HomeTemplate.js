import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./layout/Header/Header";
import HomeCarousel from "./layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = (props) => {
    const {Component,...restProps} = props;


    return <Route {...restProps} render={(propsRoute) => {
        return <Fragment>
            <Header/>
            <HomeCarousel/>
            <Component {...propsRoute}/>
        </Fragment>
    }}/>
}