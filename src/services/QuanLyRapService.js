import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseService";
export class QuanLyRapService extends baseServices{
    constructor() {
        super();
    }
    layDanhSachHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
} 
export const  quanLyRapService = new QuanLyRapService();