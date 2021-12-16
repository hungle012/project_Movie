import { baseServices } from "./baseService";
import { GROUPID } from '../util/settings/config';
export class QuanLyNguoiDungService extends baseServices {
    constructor() {
        super();
    }
    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    }
    layDanhSachNguoiDung = (tuKhoa = '') => {
        if (tuKhoa !== '') {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`)

        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    layDanhSachLoaiNguoiDung = () => {
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
    }
    themNguoiDung = (formData) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, formData)
    }
    capNhatThongTinNguoiDung = (formData) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData);
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();