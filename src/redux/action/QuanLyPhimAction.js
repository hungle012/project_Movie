import { quanlyPhimService } from '../../services/QuanLyPhimServices';
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from '../types/QuanLyPhimType';
export const layDanhSachPhimDangChieuAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.LayDanhSachPhim();
            // đưa lên reducer
            dispatch({
                type: SET_FILM_DANG_CHIEU,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const layDanhSachPhimSapChieuAction = () => {
    return async (dispatch) => {
        try {
            const result = await quanlyPhimService.LayDanhSachPhim();
            // đưa lên reducer
            dispatch({
                type: SET_FILM_SAP_CHIEU,
                arrFilmSapChieu: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
