import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {CarouselReducers} from './reducers/CarouselReducers';
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import {QuanLyPhimReducer} from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
    // state ứng dụng
    CarouselReducers,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunk));