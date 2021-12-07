import React from 'react'

export default function Checkout() {
    return (
        <div className="container-fluid checkout">
            <div className="row">
                <div className="col-9 checkout__reservations">
áda
                </div>
                <div className="col-3 checkout__bills">
                    <div className="checkout__money text-center mt-3">
                        <h3>0đ</h3>
                    </div>
                    <hr />
                    <div className="checkout__info">
                        <h4 className="info--name">Name</h4>
                        <p className="info--theater">BHD Star .....</p>
                        <p className="info--time">Ngày chiếu: dádasdasfafas</p>
                    </div>
                    <hr />
                    <div className="checkout__seat row">
                        <div className="col-9">
                            <span>Ghế</span>
                        </div>
                        <div className="col-3">
                            <span>0đ</span>
                        </div>
                    </div>
                    <hr />
                    <div className="checkout__client">
                        <div className="client--email">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
