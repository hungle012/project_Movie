import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import { moment } from 'moment';
const { TabPane } = Tabs;

export default function ShowInTick(props) {
    const renderHeThongRap = () => {
        return props.heThongRapChieu?.map((heThongRap, index) => {
            return <TabPane tab={<img src={heThongRap.logo} className="lichChieu__LogoRap" width="50" alt="..." />} key={index}>
                <Tabs tabPosition={'left'}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }}>
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg" className="lichChieu_rap" width="50" height="50" alt="..." />
                                <div className="text-left pl-2">
                                    <span>{cumRap.tenCumRap}</span><br />
                                    <span>{cumRap.diaChi}</span>
                                    <p style={{ color: 'red' }}><b>[Chi Tiết]</b></p>
                                </div>
                            </div>
                        } key={index}>
                            {/* load phim tương ứng */}
                            {cumRap.danhSachPhim.slice(0,4).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5">
                                        <div style={{ display: 'flex' }}>
                                            <img width={70} height={70} src={phim.hinhAnh} alt={phim.tenPhim} />
                                            <div className="ml-2 ">
                                                <p>{phim.tenPhim}</p>
                                                <p>120 phút - TIX 9.1 - IMDb 0</p>
                                                {/* <div>
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink key={index} to="/">
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }
    return (
        <div id="cumRap">
            <section className="lichChieu container">
                <div className="lichChieu_content mt-5 bg-white" >
                    <Tabs tabPosition={'left'}>
                        {renderHeThongRap()}
                    </Tabs>
                </div>
            </section>
        </div>

    )
}
