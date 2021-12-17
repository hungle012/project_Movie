import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP_ACION, SET_DANH_SACH_NGUOI_DUNG, SET_LAY_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import { history } from '../../App'
import Swal from "sweetalert2";


export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACION,
                    thongTinDangNhap: result.data.content
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1500,
                });
                // chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }
            // console.log('result', result);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại',
                text: 'Tên tài khoản hoặc mật khẩu không đúng',
                showConfirmButton: false,
                timer: 1500,
            })
            console.log('error', error);
        }
    }
}

export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(tuKhoa);
            // đưa lên reducer
            dispatch({
                type: SET_DANH_SACH_NGUOI_DUNG,
                thongTinNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(taiKhoan);
            dispatch({
                type: SET_LAY_THONG_TIN_NGUOI_DUNG,
                chiTietNguoiDung: result.data.content
            })
        } catch (error) {
            console.log('errors', error);
        }
    };
}

export const themNguoiDungAction = (formData) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.themNguoiDung(formData);
            Swal.fire(
                'Thông Báo!',
                'Thêm User Thành Công',
                'success'
            )
        } catch (error) {
            console.log('errors', error);
        }
    };
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
            //Sau khi xoá load lại danh sách người dùng mới;
            dispatch(layDanhSachNguoiDungAction())
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Người dùng này đã đặt vé xem phim không thể xóa!',
            })
        }
    };
}
