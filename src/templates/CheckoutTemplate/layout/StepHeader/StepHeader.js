import React from 'react'

export default function StepHeader() {
    return (
        <div>
            <div className="stepHeader row">
                <div className="stepHeader__content col-10 pr-5">
                    <div>
                        <span>01 </span>CHỌN LOẠI VÉ
                    </div>
                    <div>
                        <span>02 </span> CHỌN GHẾ &amp; THANH TOÁN
                    </div>
                    <div>
                        <span>03 </span>KẾT QUẢ ĐẶT VÉ
                    </div>
                </div>
                <div className="stepHeader__detail col-2 pl-5">
                    <div className="user">
                        <a href="">
                            <i className="fas fa-user" />
                        </a>
                    </div>
                    <div className="user-name">
                        <p className="">
                            Người dùng
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}
