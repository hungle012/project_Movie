import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACION, SET_LAY_THONG_TIN_NGUOI_DUNG, SET_DANH_SACH_NGUOI_DUNG } from "../types/QuanLyNguoiDungType"

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: [],
    chiTietNguoiDung: {}
}


export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case DANG_NHAP_ACION : {
            const {thongTinDangNhap} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN,thongTinDangNhap.accessToken)

            return {...state, userLogin:thongTinDangNhap}
        }
        case SET_DANH_SACH_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}
        }
        case SET_LAY_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return {...state}
        }
        default:
            return { ...state }
    }
}