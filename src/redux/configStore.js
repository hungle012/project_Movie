import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {CarouselReducers} from './reducers/CarouselReducers'
const rootReducer = combineReducers({
    // state ứng dụng
    CarouselReducers
})
export const store = createStore(rootReducer,applyMiddleware(thunk));