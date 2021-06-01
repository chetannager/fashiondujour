import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { NavLink, Link } from 'react-router-dom';
import { IconButton, Icon, Button } from 'rsuite'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const nameStyle = {
    color: '#30252F',
    fontWeight: '700',
    letterSpacing: '0.3px',
    fontSize: '14px',
    overflow: 'ellipsis',
};

const clothTypeName = {
    color: 'grey',
    fontWeight: '500',
    fontSize: '13px',
    letterSpacing: '0.5px',
    overflow: 'ellipsis',
};

const pricingStyle = {
    color: '#30252F',
    fontWeight: '700',
    fontSize: '16px',
};
const Cart = (props) => {
    const [bottomSheet, setBottomSheet] = React.useState(false);
    function open() {
        setBottomSheet(true);
    }
    function close() {
        setBottomSheet(false);
    }
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="mt-70">
                <div className="container mb-20">
                    <div style={{ padding: '8px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '5px' }}>
                        <div className="d-flex" >
                            <img src="imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="120px" width="85px" style={{ borderRadius: '5px' }} alt="product" />
                            <div className="ml-10">
                                <p style={nameStyle}>Men Blue Regular Fit Self Design Casual Shirt</p>
                                <p style={clothTypeName}>Casual Shirt</p>
                                <p style={pricingStyle}><span>2</span>&nbsp; * &nbsp; $2000</p>
                            </div>
                            <IconButton className="ml-10" style={{ backgroundColor: 'transparent' }} icon={<Icon icon="trash" style={{ color: 'black' }} />} circle />
                        </div>
                        <div className="d-flex mt-10">
                            <Button className="w-25" appearance="ghost" style={{ border: '1px solid black', color: 'black' }}><Icon icon="heart-o" /></Button>
                            <Button onClick={open} className="w-75 d-flex justify-content-between align-items-center ml-10" appearance="ghost" style={{ border: '1px solid black', color: 'black' }}><p>1</p><Icon icon="angle-down" /></Button>
                        </div>
                    </div>
                    <hr className="mt-20" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                    <div className="">
                        <div className="d-flex justify-content-between align-items-center">
                            <p style={pricingStyle}>Gift Wrapping</p>
                            <p style={pricingStyle}>$0</p>
                        </div>
                        <hr className="mt-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                        <div className="d-flex justify-content-between align-items-center">
                            <p style={pricingStyle}>Tax</p>
                            <p style={pricingStyle}>$100</p>
                        </div>
                        <hr className="mt-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                        <div className="d-flex justify-content-between align-items-center">
                            <p style={pricingStyle}>Grand Total (Including Tax)</p>
                            <p style={pricingStyle}>$1524</p>
                        </div>
                    </div>
                    <Link to="/checkout">
                        <Button className="w-100 mt-20" style={{ height: '45px', backgroundColor: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }} appearance="primary">GO TO CHECKOUT</Button>
                    </Link>
                </div>
            </div>
            <Footer />
            <BottomSheet
                maxHeight=""
                header={
                    <p style={{ color: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }}>Select Quantity</p>
                }
                footer={
                    <Button onClick={close} style={{ backgroundColor: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }} className="w-100" appearance="primary">CONFIRM</Button>
                }
                open={bottomSheet}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
                        return <h5 className="text-center mb-10">{data}</h5>
                    })
                }
            </BottomSheet>
        </React.Fragment >
    )
}

export default Cart
