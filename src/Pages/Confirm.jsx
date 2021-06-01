import React from 'react'
import Footer from '../Component/Footer/Footer'
import { Divider, Icon, Table, Button, IconButton } from 'rsuite'
import { Link } from 'react-router-dom'

const { Column, HeaderCell, Cell } = Table;
const headingStyle = {
    color: '#30252F',
    fontWeight: '700',
    letterSpacing: '0.6',
    fontSize: '15px',
};

const contentStyle = {
    color: 'rgba(0,0,0,0.5)',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px',
}


const fakeData = [
    {
        'id': '1',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '1000',
        'discounted': '900',
        'status': 'available',
    },
    {
        'id': '2',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '900',
        'discounted': '750',
        'status': 'Not Availbale',
    },
    {
        'id': '2',
        'product-pic': 'imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg',
        'product-name': 'Women Black & Off-White Tropical Printed A-Line Dress',
        'original': '900',
        'discounted': '750',
        'status': 'Not Availbale',
    },
];

const Confirm = () => {
    return (
        <React.Fragment>
            {
                /********************************************************************************/
                /********************************************************************************/
                /********************************* HEADER SECTION***************************/
                /********************************************************************************/
                /********************************************************************************/
            }
            <div className="d-none d-md-block header-2">
                <div className="container" style={{ padding: '17px' }}>
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex">
                            <Link className="d-flex align-items-center" to="/" style={{ fontSize: '16px', fontWeight: 'bold' }}><Icon icon="angle-left" style={{ fontSize: '25px' }} />&nbsp; Go Back</Link>
                        </div>
                        <div className="col-md-6 d-flex align-items-end justify-content-end">
                            <div style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '0.4px' }}>WELCOME! Siddharth</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                /********************************************************************************/
                /********************************************************************************/
                /********************************* BODY SECTION***************************/
                /********************************************************************************/
                /********************************************************************************/
            }
            <div className="container d-none d-md-block mt-80 mb-20">
                <h2 className="text-success">Hey.., Siddharth</h2>
                <div className="d-flex mt-20 mb-30" style={{ border: '1px dashed green', borderRadius: '7px', padding: '15px' }}>
                    <Icon icon="check-circle" size="3x" style={{ color: 'green' }} />
                    <div className="ml-40">
                        <h5 className="text-success mb-10" style={{ fontWeight: 'bold' }}>Thank you, We've received your order.</h5>
                        <p style={{ fontWeight: '600', color: 'rgba(0,0,0,0.5)' }}>We'll send a confirmation of this order to siddharth.kumar2018@vitstudent.ac.in</p>
                    </div>
                </div>
                <h6 className="mb-30" style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)' }}>27 March 2018 23:25pm</h6>
                <h5 className="w-25" style={{ fontWeight: '600', textAlign: 'center', color: 'white', backgroundColor: '#30252F', padding: '7px', borderRadius: '30px' }}>Order Number : #12BVCS89</h5>
                {/* <hr className="mt-0" style={{ borderTop: '1px solid rgba(0,0,0,0.4)' }} /> */}
                <div className="row mb-30">
                    <div className="col-md-4">
                        <div className="mt-20" style={{ border: '1px dashed green', borderRadius: '7px', padding: '15px' }}>
                            <h6 className="text-dark mb-10" style={{ fontWeight: 'bold' }}>Delivery Address :</h6>
                            <p style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)', fontSize: '14px' }}>M II/112, Sector-C, Aliganj, Jankipuram Yojana, Lucknow, Uttar Pradesh, 226021</p>
                            <p style={{ fontWeight: '700', color: 'rgba(0,0,0,0.8)', fontSize: '14px' }}>Mobile Number : 9076652887</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mt-20" style={{ border: '1px dashed green', borderRadius: '7px', padding: '15px' }}>
                            <h6 className="text-dark mb-10" style={{ fontWeight: 'bold' }}>Shipping Method :</h6>
                            <p style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)', fontSize: '14px' }}>Standard Shipping</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mt-20" style={{ border: '1px dashed green', borderRadius: '7px', padding: '15px' }}>
                            <h6 className="text-dark mb-10" style={{ fontWeight: 'bold' }}>Payment Method :</h6>
                            <p style={{ fontWeight: '600', color: 'rgba(0,0,0,0.6)', fontSize: '14px' }}>VISA 2645 **** 9807</p>
                        </div>
                    </div>
                </div>
                <h6 className="w-25 mt-10 mb-20" style={{ fontWeight: '600', textAlign: 'center', color: 'white', backgroundColor: '#30252F', padding: '7px', borderRadius: '30px' }}>Order Summary</h6>
                <div className="mt-30 mb-30">
                    <Table height={420} headerHeight={50} rowHeight={100} data={fakeData} autoHeight style={{ borderRadius: '10px', zIndex: '1' }} >
                        <Column width={600} resizable={false}>
                            <HeaderCell align="center" style={headingStyle}>Product Name</HeaderCell>
                            <Cell>
                                <div className="d-flex align-items-center">
                                    {/* <img src="imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="65px" width="55px" style={{ borderRadius: '10px' }} alt="product" /> */}
                                    <img src="https://5.imimg.com/data5/SELLER/Default/2020/8/BE/HL/DL/5984312/myntra-brand-kurtis-500x500.jpg" height="75px" width="65px" style={{ borderRadius: '10px' }} alt="product" />
                                    <h6 className="ml-10" style={contentStyle}>Women Black &amp; Off-White Tropical Printed A-Line Dress</h6>
                                </div>
                            </Cell>
                        </Column>
                        <Column width={150} resizable>
                            <HeaderCell style={headingStyle}>Unit Price</HeaderCell>
                            <Cell>
                                <div className="d-flex align-items-center mt-10">
                                    <p style={{ color: 'red', fontWeight: '500', fontSize: '13px', textDecoration: 'line-through', marginRight: '5px' }}>₹1000</p>
                                    <p style={{ color: '#30252F', fontWeight: '700', marginRight: '5px' }}>₹900</p>
                                </div>
                            </Cell>
                        </Column>
                        <Column width={110} resizable>
                            <HeaderCell style={headingStyle}>Qty</HeaderCell>
                            <Cell className="pt-20" style={{ color: 'black', fontWeight: '700', fontSize: '14px', letterSpacing: '0.5px' }}>1</Cell>
                        </Column>
                        <Column width={200} resizable>
                            <HeaderCell align="center" style={headingStyle}>Total</HeaderCell>
                            <Cell align="center" style={{ color: 'black', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px' }}>₹900</Cell>
                        </Column>
                    </Table>
                </div>
                <div className="mt-10 d-flex justify-content-end">
                    <div className="w-25">
                        <div className="d-flex justify-content-between">
                            <h5 style={{ color: 'black', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px' }}>Sub-total</h5>
                            <h5 style={{ color: 'black', fontWeight: '700', fontSize: '14px', letterSpacing: '0.5px' }}>₹900</h5>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h5 style={{ color: 'black', fontWeight: '700', fontSize: '15px', letterSpacing: '0.5px' }}>Delivery Charge</h5>
                            <h5 style={{ color: 'green', fontWeight: '700', fontSize: '14px', letterSpacing: '0.5px' }}>Free</h5>
                        </div>
                        <hr className="mt-10 mb-10" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                        <div className="d-flex justify-content-between">
                            <h5 style={{ color: 'black', fontWeight: '700', fontSize: '17px', letterSpacing: '0.5px' }}>Total</h5>
                            <h5 style={{ color: 'black', fontWeight: '700', fontSize: '17px', letterSpacing: '0.5px' }}>₹900</h5>
                        </div>
                        <hr className="mt-10 mb-10" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Confirm
