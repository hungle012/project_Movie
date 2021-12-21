import React from 'react';
import { NavLink } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import Tooltip from '@mui/material/Tooltip';
import { history } from '../../App'
import { TOKEN, USER_LOGIN } from '../../util/settings/config';
import { useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const CssTextField = styled(TextField)({
    "& label": {
        color: "#2196f4"
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

export default function Profile() {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    return (
        <div className='profile container-fluid'>
            <div className="profile__header">
                <div className="header--nav">
                    <nav className="navbar navbar-expand-lg">
                        <NavLink className="header--logo" to="/">
                            <img src="../img/logo.png" alt="anh_LOGO" className="mb-0" />
                        </NavLink>
                        <div className="header--tiltle">
                            <p>Thông tin tài khoản</p>
                        </div>
                        <div className="header--back">
                            <Tooltip title="Thoát" placement="top">
                                <button onClick={() => {
                                    localStorage.removeItem(USER_LOGIN);
                                    localStorage.removeItem(TOKEN);
                                    history.push('/');
                                    window.location.reload();
                                }}>
                                    <ExitToAppIcon>Filled</ExitToAppIcon>
                                </button>
                            </Tooltip>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row profile__content">
                <div className="col-2 profile--user text-center px-0">
                    <div className="user--avatar m-auto">
                        <img src="https://i.pravatar.cc/150?img=5" alt="img" />
                    </div>
                    <div className="user--info mt-3">
                        <h5>{userLogin.taiKhoan}</h5>
                        <div className='d-flex align-items-center pl-3'>
                            <InfoTwoToneIcon></InfoTwoToneIcon>
                            <p>Thông tin chung</p>
                        </div>

                    </div>
                    <div className="user--nav nav flex-column nav-pills py-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            Thông tin cá nhân
                        </a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            Lịch sử đặt vé
                        </a>
                    </div>

                </div>
                <div className="col-2"></div>
                <div className="col-10 profile--info">
                    <div className="info--blur">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="content--information tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <h4>Thông tin cá nhân</h4>
                                <div className="content--field">
                                    <div className="field--item">
                                        <CssTextField
                                            label="Tài khoản"
                                            id="taiKhoan"
                                            fullWidth
                                            variant="outlined"
                                            value={userLogin.taiKhoan}
                                        />
                                    </div>
                                    <div className="field--item">
                                        <CssTextField
                                            label="Email"
                                            id="email"
                                            fullWidth
                                            variant="outlined"
                                            value={userLogin.email}
                                        />
                                    </div>
                                    <div className="field--item">
                                        <CssTextField
                                            label="Họ tên"
                                            id="hoTen"
                                            fullWidth
                                            variant="outlined"
                                            value={userLogin.hoTen}
                                        />
                                    </div>
                                    <div className="field--item">
                                        <CssTextField
                                            label="Số điện thoại"
                                            id="soDt"
                                            fullWidth
                                            variant="outlined"
                                            value={userLogin.soDT}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="contetn--history tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <h5>Thông tin đặt vé</h5>
                                <div className="history--table">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
