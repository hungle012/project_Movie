import { baseServices } from "./baseService";
export class QuanLyNguoiDungService extends baseServices{
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
} 
export const quanLyNguoiDungService = new QuanLyNguoiDungService();