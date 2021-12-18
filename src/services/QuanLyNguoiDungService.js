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
    layThongTinNguoiDung = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
    }
    themNguoiDung = (values) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`,values);
    }
    capNhatThongTinNguoiDung = (formData) => {
        return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, formData);
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }

}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();