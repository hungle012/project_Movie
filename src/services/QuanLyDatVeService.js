import { baseServices } from "./baseService";

export class QuanLyDatVeService extends baseServices{
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    
} 
export const quanLyDatVeService = new QuanLyDatVeService();