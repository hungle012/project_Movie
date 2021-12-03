import { GROUPID } from "../util/settings/config";
import { baseServices } from "./baseService";
export class QuanLyRapService extends baseServices{
    constructor() {
        super();
    }
    layThongTinLichChieu = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
} 
export const  quanLyRapService = new QuanLyRapService();