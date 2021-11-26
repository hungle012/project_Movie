import { TextField, Button, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const CssTextField = styled(TextField)({
    "& label": {
        color: "#2196f4"
    },
    "& label.Mui-focused": {
        color: "gr#2196f4een"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        },
        "&:hover fieldset": {
            borderColor: "#2196f4"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#2196f4",
            borderWidth: 5
        }
    }
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    }

];

export default function Register(props) {
    const [currency, setCurrency] = useState();

    const handleChange1 = (event) => {
        setCurrency(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maNhom: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(6, 'Mật tối thiểu 6 ký tự').max(32, 'Mật khẩu tối đa 32 ký tự'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng'),
            soDT: Yup.string().required('Số điện thoại không được bỏ trống !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !'),
        }),
        onSubmit: (values) => {
            console.log('values', values);
        }
    })

    return (
        <div className="register">
            <div className="register__content col-7 mx-auto px-5">
                <Link to="/" exact>
                    <IconButton className="register__close nav-link" aria-label="delete" color="error" size="large">
                        <CancelIcon fontSize="large" />
                    </IconButton>
                </Link>
                <div className="register__logo">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="register__form">
                    <p className="text-center">Đăng ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="register__field row">
                            <div className="field--col col-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Tài khoản"
                                        id="taiKhoan"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={!(formik.errors.taiKhoan) ? "" : formik.errors.taiKhoan}  
                                        // error = {(formik.touched.taiKhoan) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Email"
                                        id="email"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.errors.email) ? formik.errors.email : ""}  
                                        error = {(formik.touched.email) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Họ tên"
                                        id="hoTen"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.errors.hoTen) ? formik.errors.hoTen : ""}  
                                        error = {(formik.touched.hoTen) ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="field--col col-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Mật khẩu"
                                        id="matKhau"
                                        type="password"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.errors.matKhau) ? formik.errors.matKhau : ""}  
                                        error = {(formik.touched.matKhau) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Số điện thoại"
                                        id="soDT"
                                        fullWidth
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        helperText={(formik.errors.soDT) ? formik.errors.soDT : ""}  
                                        error = {(formik.touched.soDT) ? true : false}
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Mã nhóm"
                                        id="maNhom"
                                        select
                                        fullWidth
                                        value={currency}
                                        onChange={handleChange1}
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </CssTextField>
                                </div>



                            </div>
                        </div>
                        <div className="register__button">
                            <Link to="/login" exact className="button--login">
                                <Button variant="contained">ĐĂNG NHẬP</Button>
                            </Link>
                            <Button type="submit" variant="contained">ĐĂNG KÝ</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
