import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { useFormik } from 'formik';
import { DatePicker } from 'antd';
import { InputNumber } from 'antd';
import moment from 'moment';
import { quanLyRapService } from '../../../../services/QuanLyRapService';
import { quanLyDatVeService } from '../../../../services/QuanLyDatVeService';
import Swal from 'sweetalert2';

export default function Showtime(props) {
    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (values) => {
            // console.log('values', values);
            try {
                const result = await quanLyDatVeService.taoLichChieu(values);
                Swal.fire(
                    'Thông Báo!',
                    'Thêm Lịch Chiếu Thành Công',
                    'success'
                )
            } catch (error) {
                console.log('error', error.response?.data)
            }
        }
    })
    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })

    useEffect(async () => {
        try {
            let result = await quanLyRapService.layThongTinHeThongRap();
            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
        } catch (error) {
        }
    }, [])
    console.log('hệ thống rạp chiếu', state.heThongRapChieu);
    const handleChangeHeThongRap = async (value) => {
        // từ hệ thống rạp call api lấy thông tin rạp
        try {
            let result = await quanLyRapService.layThongTinCumRap(value);
            //Gán giá trị cụm rạp vào state.cumRap
            setState({
                ...state,
                cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log('error', error.response?.data);
        }
    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap', value)
    }

    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeDate = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onchangeInputNumber = (value) => {
        formik.setFieldValue('giaVe', value)
    }

    const convertSelectHTR = () => {
        // state.heThongRapChieu?.map((htr, index) => ({ label: htr.tenHeThongRap, value: htr.tenHeThongRap }))
        return state.heThongRapChieu?.map((htr, index) => {
            return { label: htr.tenHeThongRap, value: htr.maHeThongRap }
        })
    }

    let movie = {};
    if (localStorage.getItem('filmParams')) {
        movie = JSON.parse(localStorage.getItem('filmParams'));
    }

    return (
        <div className="container">
            <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'nowrap ' }}>
                <div className="title">
                    <h3 className="text-2xl">Tạo lịch chiếu - {movie.tenPhim}</h3>
                    <img src={movie.hinhAnh} alt='...' width={300} height={300} />
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onSubmitCapture={formik.handleSubmit}
                    style={{ width: '85%', paddingTop: '50px' }}
                >
                    <Form.Item label="Hệ thống rạp">
                        <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>
                    <Form.Item label="Cụm rạp">
                        <Select options={state.cumRapChieu?.map((cumRap, index) => ({ label: cumRap.tenCumRap, value: cumRap.maCumRap }))} placeholder="Chọn cụm rạp" onChange={handleChangeCumRap} />
                    </Form.Item>

                    <Form.Item label="Ngày chiếu giờ chiếu">
                        <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>

                    <Form.Item label="Giá vé">
                        <InputNumber min={75000} max={150000} onChange={onchangeInputNumber} />
                    </Form.Item>
                    <Form.Item label="Chức năng">
                        <Button htmlType="submit">Tạo lịch chiếu</Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
