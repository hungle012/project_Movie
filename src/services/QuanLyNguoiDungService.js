import { baseServices } from "./baseService";
import {GROUPID} from '../util/settings/config';
export class QuanLyNguoiDungService extends baseServices{
    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'', matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
} 
export const quanLyNguoiDungService = new QuanLyNguoiDungService();