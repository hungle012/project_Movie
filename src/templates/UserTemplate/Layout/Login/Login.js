import { Checkbox, FormControlLabel, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup'


const TextFieldCustom = styled(TextField)({
    '& input + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:valid:hover + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:invalid:hover + fieldset': {
        borderColor: '#2196f4',
        borderWidth: 5,
    },
    '& input:valid:focus + fieldset': {
        borderWidth: 5,
        borderColor: '#2196f4',
    },
    '& input:invalid:focus + fieldset': {
        borderWidth: 5,
        borderColor: '#2196f4'
    },
    '& label': {
        color: '#2196f4',
    },
    '& label.Mui-focused ': {
        color: '#2196f4',
    }
});
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

export default function Login() {

    return (
        <div className="login">
            <div className="login__content col-4 mx-auto px-5">
                <Link to="/" exact>
                    <IconButton className="login__close nav-link" aria-label="delete" color="error" size="large">
                        <CancelIcon fontSize="large" />
                    </IconButton>
                </Link>
                <div className="login__logo">
                    <img src="./img/logo.png" alt="" />
                </div>

                <div className="login__form pt-4">
                    <p className="text-center">Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
                    <form action="">
                        <div className="login__acc login__field">
                            <TextFieldCustom
                                label="Tài khoản"
                                fullWidth
                                variant="outlined"
                                id="taiKhoan"
                            />
                        </div>
                        <div className="login__pass login__field">
                            <CssTextField
                                label="Mật khẩu"
                                type="password"
                                fullWidth
                                variant="outlined"
                                id="matKhau"
                            />
                        </div>
                        <FormControlLabel control={<Checkbox defaultUnChecked />} label="Remember me" />
                        <div className="login__button">
                            <Button type="submit" variant="contained">ĐĂNG NHẬP</Button>
                            <Link to="/register" exact className="button--register">
                                <Button variant="contained">ĐĂNG KÝ</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    )
}
