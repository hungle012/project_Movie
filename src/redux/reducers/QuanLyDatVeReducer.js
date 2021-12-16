import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { CHUYEN_TAB, DAT_GHE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"



const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangChon: [],
    danhSachGheNguoiKhacDat:[{maGhe:50010}],
    tabActive: "1",
    widthCustom: '75%',
}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return { ...state };
        }

        case DAT_GHE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangChon];

            let index = danhSachGheCapNhat.findIndex(gheDangChon => gheDangChon.maGhe === action.gheDuocChon.maGhe);
            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }

            return { ...state, danhSachGheDangChon: danhSachGheCapNhat }
        }

        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangChon = [];
            return {...state}
        }

        case CHUYEN_TAB: {
            state.tabActive = "2";
            state.widthCustom = "100%";
            return {...state}
        }

        

        default:
            return { ...state }
    }
}