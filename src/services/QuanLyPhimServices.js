import { baseServices } from "./baseService";
import {GROUPID,GROUPIDSC} from '../util/settings/config';
export class QuanLyPhimServices extends baseServices{
    constructor() {
        super();
    }
    LayDanhSachBanner = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    }
    LayDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }
    LayDanhSachPhimSapChieu = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPIDSC}}`);
    }
} 
export const quanlyPhimService = new QuanLyPhimServices();