import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

export default function ShowInTick(props) {
    return (
        <div id="cumRap">
            <div className="container showInTicket mt-5 bg-white" >
                <Tabs tabPosition={'left'} className="row">
                    <TabPane tab={<img src="http://movieapi.cyberlearn.vn/hinhanh/cgv.png" className="lichChieu__LogoRap" alt="..." />} key="1">
                    </TabPane>
                    <TabPane tab={<img src="http://movieapi.cyberlearn.vn/hinhanh/cgv.png" className="lichChieu__LogoRap" alt="..." />} key="2">
                    </TabPane>
                    <TabPane tab={<img src="http://movieapi.cyberlearn.vn/hinhanh/cinestar.png" className="lichChieu__LogoRap" alt="..." />} key="3">
                    </TabPane>
                </Tabs>
            </div>
        </div>

    )
}
