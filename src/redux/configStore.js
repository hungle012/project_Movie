import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducers } from './reducers/CarouselReducers';
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";

const rootReducer = combineReducers({
    // state ứng dụng
    CarouselReducers,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk));