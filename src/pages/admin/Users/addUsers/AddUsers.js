import React, { useEffect,useState } from 'react';
import {
    Form,
    Input,
    Select,
    Button
} from 'antd';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { quanLyNguoiDungService } from '../../../../services/QuanLyNguoiDungService';
import { GROUPID } from '../../../../util/settings/config';
import { themNguoiDungAction } from '../../../../redux/action/QuanLyNguoiDungAction';

export default function AddUsers(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom:'',
            maLoaiNguoiDung: '',
            hoTen:''
        },
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUPID;
            // tạo đối tượng formdata => đưa giá trị value từ formik vào formdata
            let formData = new FormData();
            // gọi dự liệu gửi các giá trị từ formdata về backend xử lý
            dispatch(themNguoiDungAction(formData));
        }
    })
    const [state, setState] = useState({
        danhSachNguoiDung: [],
    })
    useEffect(async () => {
        try {
            let result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
            setState({
                ...state,
                danhSachNguoiDung: result.data.content
            })
        } catch (error) {
        }
    }, [])
    const handleChangeMaNguoiDung = (value) => {
        formik.setFieldValue('maLoaiNguoiDung',value)
    }
    const convertSelectMND = () => {
        return state.danhSachNguoiDung?.map((mnd, index) => {
            return { label: mnd.tenLoai, value: mnd.maLoaiNguoiDung }
        })
    }
    
    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
        >
            <h3>Thêm Người Dùng </h3>
            <Form.Item label="Tài Khoản">
                <Input name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </Form.Item>
            <Form.Item label="Mật Khẩu">
                <Input name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </Form.Item>
            <Form.Item label="Email">
                <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </Form.Item>
            <Form.Item label="Số Điện Thoại">
                <Input name="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </Form.Item>
            <Form.Item label="Họ Tên">
                <Input name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </Form.Item>
            <Form.Item name="maLoaiNguoiDung" label="Mã loại người dùng">
                <Select placeholder="Chọn loại người dùng" options={convertSelectMND()} onChange={handleChangeMaNguoiDung} onBlur={formik.handleBlur} >
                </Select>
            </Form.Item>
            <Form.Item label="Tác vụ">
            <Button htmlType='submit'>Thêm Users</Button>
            </Form.Item>
        </Form>
    )
}
