import { TextField, Button, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


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

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
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
                    <form action="">
                        <div className="register__field row">
                            <div className="field--col col-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Tài khoản"
                                        fullWidth
                                        variant="outlined"
                                        id="taiKhoan"
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Email"
                                        fullWidth
                                        variant="outlined"
                                        id="email"
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Họ tên"
                                        fullWidth
                                        variant="outlined"
                                        id="hoTen"
                                    />
                                </div>
                            </div>
                            <div className="field--col col-6">
                                <div className="field--row">
                                    <CssTextField
                                        label="Mật khẩu"
                                        type="password"
                                        fullWidth
                                        variant="outlined"
                                        id="TaiKhoan"
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        label="Số điện thoại"
                                        fullWidth
                                        variant="outlined"
                                        id="soDT"
                                    />
                                </div>
                                <div className="field--row">
                                    <CssTextField
                                        id="maNhom"
                                        select
                                        fullWidth
                                        label="Mã nhóm"
                                        value={currency}
                                        onChange={handleChange}
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
