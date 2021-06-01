import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Icon, Button, Modal } from 'rsuite';
import { NavLink } from 'react-router-dom';

const pricingDetail = {
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '0.4px',
    color: 'black',
}

const Order = (props) => {
    {
        /***********************************************************************************/
        /***********************************************************************************/
        /*************Order Deatil Related Items******************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }

    const [orderDetail, setShowOrderDetail] = React.useState(false);
    function closeOrderDetail() {
        setShowOrderDetail(false);
    }
    function openShowOrderDetail() {
        setShowOrderDetail(true);
    }
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            {
                /**************************************************************************************************/
                /**************************************************************************************************/
                /********************************** WEB UI ORDER DESIGN *****************************************/
                /**************************************************************************************************/
                /**************************************************************************************************/
            }
            <div className="mt-80 container d-none d-md-block">
                <div className="container ml-15">
                    <h3 style={{ fontWeight: '600' }}>Order History</h3>
                    <h6 style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '500' }}>3 orders</h6>

                    {/*..........................CARD CONTAINER START..............................*/}

                    <div className="mt-30">
                        <div className="order-card" style={{ padding: '10px' }}>
                            <div className="text-warning d-flex align-items-center mt-10">
                                <Icon icon="dot-circle-o" />
                                <p className="ml-10" style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Dispatched</p>
                            </div>
                            <div className="row mt-20 mb-10">
                                <div className="col-md-7">
                                    <div className="d-flex">
                                        <img src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="70px" width="70px" />
                                        <div className="ml-10">
                                            <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Arrives Tomorrow</h5>
                                            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>26th January 2021</p>
                                            <h6 style={{ fontWeight: 'bold' }}>7pm-8pm</h6>
                                        </div>
                                    </div>
                                    <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.5)' }} />
                                    <div className="d-flex">
                                        <img src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="70px" width="70px" />
                                        <div className="ml-10">
                                            <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Placed on</h5>
                                            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>25th January 2021</p>
                                            <h6 style={{ fontWeight: 'bold' }}>7:25 PM</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <NavLink to="/track">
                                        <Button appearance="primary" className="w-100" style={{ backgroundColor: '#30252F' }}>Track Order</Button>
                                    </NavLink>
                                    <Button onClick={() => { openShowOrderDetail() }} className="mt-10 w-100" appearance="ghost" style={{ border: '1px solid #30252F', color: '#30252F', fontWeight: 'bold' }}>View Order details</Button>
                                    <div className="mt-20">
                                        <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Payment Method:- </h5>
                                        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>Cash on Delivery</p>
                                        <h6 className="mt-10" style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Total amount (to be paid) : <span style={{ color: '#12CF69' }}>$200</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ....................REPEATED CONTENT ....................................*/}
                        <div className="order-card" style={{ padding: '10px' }}>
                            <div className="text-danger d-flex align-items-center mt-10">
                                <Icon icon="dot-circle-o" />
                                <p className="ml-10" style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Cancelled</p>
                            </div>
                            <div className="row mt-20 mb-10">
                                <div className="col-md-7 ">
                                    <div className="d-flex">
                                        <img src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="70px" width="70px" />
                                        <div className="ml-10">
                                            <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Arrives Tomorrow</h5>
                                            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>----------</p>
                                            <h6>------</h6>
                                        </div>
                                    </div>
                                    <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.5)' }} />
                                    <div className="d-flex">
                                        <img src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="70px" width="70px" />
                                        <div className="ml-10">
                                            <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Placed on</h5>
                                            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>25th January 2021</p>
                                            <h6 style={{ fontWeight: 'bold' }}>7:25 PM</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <Button appearance="primary" className="w-100" style={{ backgroundColor: '#30252F' }}>Track Order</Button>
                                    <Button className="mt-10 w-100" appearance="ghost" style={{ border: '1px solid #30252F', color: '#30252F', fontWeight: 'bold' }}>View Order details</Button>
                                    <div className="mt-20">
                                        <h5 style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Payment Method:- </h5>
                                        <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.4)', fontWeight: '700', letterSpacing: '0.5px' }}>Card Payment</p>
                                        <h6 className="mt-10" style={{ fontWeight: 'bold', letterSpacing: '0.2px' }}>Total amount (paid) : <span style={{ color: '#12CF69' }}>$200</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                /**************************************************************************************************/
                /**************************************************************************************************/
                /********************************** MOBILE UI ORDER DESIGN *****************************************/
                /**************************************************************************************************/
                /**************************************************************************************************/
            }

            <div className="mt-60 container-fluid d-sm-block d-md-none">
                <div className="container-fluid">
                    <h4 style={{ fontWeight: '600' }}>Order History</h4>
                    <h6 style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '500' }}>3 orders</h6>

                    {/*..........................CARD CONTAINER START..............................*/}

                    <div className="ml-0 mr-0 mt-30">
                        <div className="mb-20" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', padding: '10px' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '700', fontSize: '14px' }}>Order id: #13FD02</p>
                                <Button className="mt-10 p-0" appearance="link" style={{ color: 'red', fontWeight: 'bold', fontSize: '14px' }}>View details</Button>
                            </div>
                            <div className=" mt-10 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img style={{ borderRadius: '50%' }} src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="60px" width="60px" />
                                    <div>
                                        <p className="ml-10 overflow-hidden" style={{ width: '140px', overflow: 'hidden', color: 'rgba(0,0,0,1.0)', fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Navy Blue Printed Maxi Sustainable Dress</p>
                                        <p className="ml-10 mt-0" style={{ overflow: 'hidden', color: 'rgba(0,0,0,0.4)', fontWeight: '700', fontSize: '14px' }}>+ 4 items</p>
                                        <p className="ml-10 mt-0" style={{ overflow: 'hidden', color: 'rgba(0,0,0,0.4)', fontWeight: '700', fontSize: '14px' }}>12:50 PM</p>
                                    </div>
                                </div>
                                <p style={{ color: 'green', fontWeight: '700', fontSize: '14px' }}>$200</p>
                            </div>
                            <hr style={{ borderTop: '1px dashed grey' }} className="mb-10" />
                            <div className="d-flex align-items-center justify-content-between">
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '700', fontSize: '14px' }}>March 21, 2021</p>
                                <div className="d-flex align-items-center mt-10" style={{ color: 'orange' }}>
                                    <Icon icon="dot-circle-o" />
                                    <p className="ml-10" style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Dispatched</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*..........................CARD CONTAINER REPEATED..............................*/}

                    <div className="ml-0 mr-0 mt-30">
                        <div className="mb-20" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', padding: '10px' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '700', fontSize: '14px' }}>Order id: #13FD02</p>
                                <Button className="mt-10 p-0" appearance="link" style={{ color: 'red', fontWeight: 'bold', fontSize: '14px' }}>View details</Button>
                            </div>
                            <div className=" mt-10 d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center justify-content-between">
                                    <img style={{ borderRadius: '50%' }} src="imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp" alt="laundary" height="60px" width="60px" />
                                    <div>
                                        <p className="ml-10 overflow-hidden" style={{ width: '140px', overflow: 'hidden', color: 'rgba(0,0,0,1.0)', fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Navy Blue Printed Maxi Sustainable Dress</p>
                                        <p className="ml-10 mt-0" style={{ overflow: 'hidden', color: 'rgba(0,0,0,0.4)', fontWeight: '700', fontSize: '14px' }}>+ 4 items</p>
                                        <p className="ml-10 mt-0" style={{ overflow: 'hidden', color: 'rgba(0,0,0,0.4)', fontWeight: '700', fontSize: '14px' }}>12:50 PM</p>
                                    </div>
                                </div>
                                <p style={{ color: 'green', fontWeight: '700', fontSize: '14px' }}>$200</p>
                            </div>
                            <hr style={{ borderTop: '1px dashed grey' }} className="mb-10" />
                            <div className="d-flex align-items-center justify-content-between">
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontWeight: '700', fontSize: '14px' }}>March 21, 2021</p>
                                <div className="d-flex align-items-center mt-10" style={{ color: 'orange' }}>
                                    <Icon icon="dot-circle-o" />
                                    <p className="ml-10" style={{ fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.3px' }}>Dispatched</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* ORDER DETAIL MODAL **********************************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Modal overflow={true} className="modal-checkout-size" show={orderDetail} size="sm" onHide={closeOrderDetail}>
                <Modal.Header>
                    <Modal.Title>
                        <h5 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '5px' }}>Order id: #367BSD2</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mr-10">
                        {
                            /*******************************************************************************/
                            /****************************PRODUCT DESCRIBE **********************************/
                            /*******************************************************************************/

                        }
                        <div className="d-flex justify-content-between mb-10" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', padding: '10px' }}>
                            <div className="d-flex">
                                <div className="">
                                    <img src="./imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="105px" width="80px" style={{ borderRadius: '10px' }} alt="product" />
                                </div>
                                <div className="ml-10">
                                    <h6 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '1px' }}>BlackBerry</h6>
                                    <p style={{ fontSize: '14px', color: 'black', fontWeight: '400' }}>Men Blue Regular Fit Self Design Casual Shirt</p>
                                    <p className="mt-0" style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>Casual Shirt</p>
                                    <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.5)' }} />
                                    <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>Size : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.9)', fontWeight: '700' }}>S</span> &nbsp;&nbsp; Qty : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.9)', fontWeight: '700' }}>1</span></p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '16px', color: 'black', fontWeight: '700' }}>₹320</p>
                                <div className="d-flex">
                                    <p className="mt-0" style={{ fontSize: '15px', textDecoration: 'line-through', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>₹1000</p>
                                    <p className="mt-0" style={{ marginLeft: '8px', fontSize: '15px', color: 'red', fontWeight: '500' }}>51% OFF</p>
                                </div>
                            </div>
                        </div>
                        {
                            /*******************************************************************************/
                            /****************************PRODUCT DESCRIBE **********************************/
                            /*******************************************************************************/

                        }
                        <div className="d-flex justify-content-between mb-10" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', padding: '10px' }}>
                            <div className="d-flex">
                                <div className="">
                                    <img src="./imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="105px" width="80px" style={{ borderRadius: '10px' }} alt="product" />
                                </div>
                                <div className="ml-10">
                                    <h6 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '1px' }}>BlackBerry</h6>
                                    <p style={{ fontSize: '14px', color: 'black', fontWeight: '400' }}>Men Blue Regular Fit Self Design Casual Shirt</p>
                                    <p className="mt-0" style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>Casual Shirt</p>
                                    <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.5)' }} />
                                    <p style={{ fontSize: '14px', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>Size : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.9)', fontWeight: '700' }}>S</span> &nbsp;&nbsp; Qty : <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.9)', fontWeight: '700' }}>1</span></p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '16px', color: 'black', fontWeight: '700' }}>₹320</p>
                                <div className="d-flex">
                                    <p className="mt-0" style={{ fontSize: '15px', textDecoration: 'line-through', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>₹1000</p>
                                    <p className="mt-0" style={{ marginLeft: '8px', fontSize: '15px', color: 'red', fontWeight: '500' }}>51% OFF</p>
                                </div>
                            </div>
                        </div>
                        {
                            /*******************************************************************************/
                            /****************************PERSONAL DESCRIBE **********************************/
                            /*******************************************************************************/

                        }
                        <div className="mt-20 mb-20 ">
                            <h5 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.5px' }}>Personal Detail</h5>
                            <hr className="mt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                            <p style={{ fontWeight: '700', fontSize: '15px', color: 'rgba(0,0,0,0.6)' }}><Icon icon="user" style={{ fontSize: '18px', color: '#30252F' }} />&nbsp; Siddharth Kumar</p>
                            <p style={{ fontWeight: '700', fontSize: '15px', color: 'rgba(0,0,0,0.6)' }}><Icon icon="phone" style={{ fontSize: '18px', color: '#30252F' }} />&nbsp; +91 9076652887</p>
                            <p style={{ fontWeight: '700', fontSize: '15px', color: 'rgba(0,0,0,0.6)' }}><Icon icon="map-marker" style={{ fontSize: '18px', color: '#30252F' }} />&nbsp; M II/112, Sector-C, Jankipuram Yojana, Sitapur Road, Lucknow, Uttar Pradesh, 226021</p>

                        </div>
                        {
                            /*******************************************************************************/
                            /****************************PAYMENT DESCRIBE **********************************/
                            /*******************************************************************************/

                        }
                        <div className="position-sticky">
                            <h5 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.5px' }}>Payment Summary</h5>
                            <hr className="mt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={pricingDetail}>Total MRP</p>
                                <p style={{ fontWeight: '600' }}>₹720</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={pricingDetail}>Discounted on MRP</p>
                                <p style={{ fontWeight: '500', fontSize: '14px', color: 'green' }}>-₹420</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p style={pricingDetail}>Apply Coupon</p>
                                <p style={{ fontWeight: '700', fontSize: '14px', color: '#30252F' }}>GET50</p>
                            </div>
                            <div className="mt-10 d-flex justify-content-between align-items-center">
                                <p style={pricingDetail}>Shipping</p>
                                <p style={{ color: 'green', fontWeight: 'bold', fontSize: '14px' }}>Free</p>
                            </div>
                            <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.3)' }} />
                            <div className="d-flex justify-content-between align-items-center back">
                                <p style={{ fontWeight: '700', color: 'black' }}>Total Amount</p>
                                <p style={{ fontWeight: '700', fontSize: '15px', color: 'black' }}>-₹420</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="w-100" onClick={closeOrderDetail} style={{ backgroundColor: '#30252F' }} appearance="primary">Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default Order
