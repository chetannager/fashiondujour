import React from 'react'
import Footer from '../Component/Footer/Footer'
import { Link, useHistory } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Button, ButtonGroup, Icon, Steps, Modal, Radio, RadioGroup, IconButton } from 'rsuite';
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import axios from 'axios';
import { connect } from 'react-redux';
import * as customerActions from "../actions/dCustomer"
import * as cartActions from "../actions/dCart"
import Product from './Product';

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

const styles = {
    width: '100%',
    display: 'inline-table',
    verticalAlign: 'top'
};

const pricingDetail = {
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '0.4px',
    color: 'black',
}

const cardData = [
    {
        'selected': true,
        'value': 'card',
        'title': 'Card Payment',
    },
    {
        'selected': false,
        'value': 'cod',
        'title': 'Cash On Delivery',
    },
];

const Checkout = (props) => {
    const history = useHistory();
    const [step, setStep] = React.useState(0);
    // const [isSelected, setCheck] = React.useState();
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    function selectCheckBox(index) {
        console.log('hello');
        // cardData.selected == true;
    }
    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };
    const onNext = () => onChange(step + 1);
    const onPrevious = () => onChange(step - 1);

    {   /***********************************************************************************/
        /***********************************************************************************/
        /************* Size Selection Modal Sheet Related Items *****************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }
    const [showSize, setSize] = React.useState(false);
    function closeSizeModal() {
        setSize(false);
    }
    function openSizeModal() {
        setSize(true);
    }
    const [bottomSheet, setBottomSheet] = React.useState(false);
    function openMSizeSheet() {
        setBottomSheet(true);
    }
    function closeMSizeSheet() {
        setBottomSheet(false);
    }
    {
        /***********************************************************************************/
        /***********************************************************************************/
        /*************Quantity Selection Modal Sheet Related Items******************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }
    const [showQuantity, setQuantity] = React.useState(false);
    function closeQuantityModal() {
        setQuantity(false);
    }
    function openQuantityModal() {
        setQuantity(true);
    }

    {
        /***********************************************************************************/
        /***********************************************************************************/
        /*************Coupon Modal Sheet Related Items******************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }
    const [showCoupon, setCoupon] = React.useState(false);
    function closeCouponModal() {
        setCoupon(false);
    }
    function openCouponModal() {
        setCoupon(true);
    }

    function calculateProductsMRP() {
        var totalPrice = 0;
        props.cart.forEach((product) => {
            totalPrice += product.product_original_price;
        })
        return totalPrice;

    }


    function calculateProductsDiscountedPrice() {
        var totalDiscountPrice = 0;
        props.cart.forEach((product) => {
            totalDiscountPrice += product.product_discount;
        })
        return totalDiscountPrice;

    }

    const [addresses, setAddresses] = React.useState([]);

    const [paymentOption, setPaymentOption] = React.useState(1);

    function calculateProductsTotalAmount() {
        var totalAmount = 0;
        props.cart.forEach((product) => {
            totalAmount += product.product_total_price;
        })
        return totalAmount;

    }

    const getAllAddress = () => {
        axios.post('http://fashiondujourapi.com/v1/addresses', {
            customer_id: props.customerDetails["customer_id"]
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.RESPONSE.successful) {
                        setAddresses(response.data.RESPONSE.address);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    React.useEffect(() => {
        props.checkIsLoggedIn();
        if (props.isLoggedIn) {
            getAllAddress();
        }
    }, [])

    return (
        <React.Fragment>
            {
                /********************************************************************************/
                /********************************************************************************/
                /********************************* HEADER SECTION FOR WEB***************************/
                /********************************************************************************/
                /********************************************************************************/
            }
            <div className="d-none d-md-block header-2">
                <div className="container" style={{ padding: '17px' }}>
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex">
                            <Link to="/" >FASHION-du-JOUR</Link>
                        </div>
                        <div className="col-md-6 d-flex align-items-end justify-content-end">
                            <div style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '0.4px' }}>WELCOME! Checkout</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-sm-block d-md-none header-2">
                <div className="container" style={{ padding: '13px' }}>
                    <div className="row align-items-center">
                        <div className="col-3 d-flex">
                            <Button appearance="primary" style={{ backgroundColor: "#30252F" }} disabled={step == 0} onClick={onPrevious}><Icon icon="long-arrow-left" /></Button>
                        </div>
                        <div className="col-6 text-center pt-0">
                            <p className={step == 0 ? 'd-block' : 'd-none'} style={{ fontSize: '15px', fontWeight: '600', color: '#30252F' }}>DELIVERY ADDRESS</p>
                            <p className={step == 1 ? 'd-block' : 'd-none'} style={{ fontSize: '15px', fontWeight: '600', color: '#30252F' }}>ORDER DETAIL</p>
                            <p className={step == 2 ? 'd-block' : 'd-none'} style={{ fontSize: '15px', fontWeight: '600', color: '#30252F' }}>PAYMENT DETAIL</p>
                        </div>
                        <div className="col-3 d-flex align-items-end justify-content-end">
                            <Button appearance="primary" style={{ backgroundColor: "#30252F" }} disabled={step == 2} onClick={onNext}><Icon icon="long-arrow-right" /></Button>
                        </div>
                    </div>
                </div>
            </div>
            {
                /********************************************************************************/
                /********************************************************************************/
                /********************************* WEB UI CHECKOUT ******************************/
                /********************************************************************************/
                /********************************************************************************/
            }
            <div className="container-fluid d-none d-md-block mt-80">
                <div className="row ml-10 mr-10">

                    {
                        /********************************************************************************/
                        /********************************************************************************/
                        /********************************* LEFT MOST SECTION***************************/
                        /********************************************************************************/
                        /********************************************************************************/
                    }

                    {
                        props.cart.length != 0 ? (
                            <React.Fragment>
                                <div className="col-md-2 mb-30 checkout-left">
                                    <Steps current={step} vertical style={styles}>
                                        <Steps.Item icon={<Icon icon="map-marker" size="2x" />} title="Delivery Address" description="Please select the address at which we can deliver your product." />
                                        <Steps.Item icon={<Icon icon="history" size="2x" />} title="Order Summery" description="Please check the product, price and quantity before going to the final step." />
                                        <Steps.Item icon={<Icon icon="credit-card-alt" size="2x" />} title="Payment Detail" description="Please select the payment mode." />
                                    </Steps>
                                    <div className="d-flex justify-content-between mt-20">
                                        <Button appearance="primary" style={{ backgroundColor: "#30252F" }} disabled={step == 0} onClick={onPrevious}>previous</Button>
                                        <Button appearance="primary" style={{ backgroundColor: "#30252F" }} disabled={step == 2} onClick={onNext}>Next</Button>
                                    </div>
                                </div>

                                {
                                    /********************************************************************************/
                                    /********************************************************************************/
                                    /*********************************MIDDLE MOST SECTION***************************/
                                    /********************************************************************************/
                                    /********************************************************************************/
                                }

                                {/*************************************FIRST STEP**************************************/}

                                <div className="col-md-7" style={{ display: step == 0 ? "block" : "none" }}>
                                    <div className="d-flex flex-column mb-20" style={{ paddingtop: '7px', paddingBottom: '7px', width: '30%', backgroundColor: '#30252F', color: 'white', borderRadius: '30px' }}>
                                        <h4 style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Delivery Address</h4>
                                    </div>
                                    <div className="row">
                                        {
                                            addresses.length != 0 ? (
                                                addresses.map((address) => {
                                                    return (
                                                        <div className="col-md-6">
                                                            <Radio>
                                                                <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                                                    <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{address["customer_name"]}</h5>
                                                                    <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                                                    <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>{address["customer_address"]}</p>
                                                                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : {address["customer_mobile_number"]}</p>
                                                                    <ButtonGroup className="mt-10">
                                                                        <Button appearance="primary" style={{ backgroundColor: '#30252F' }} ><Icon icon="trash-o" /></Button>
                                                                        <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                                                    </ButtonGroup>
                                                                </div>
                                                            </Radio>
                                                        </div>
                                                    )
                                                })
                                            ) : (
                                                <div>
                                                    <button onClick={() => {
                                                        history.push("/address");
                                                    }}>Add new Address</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                                {/*************************************SECOND STEP**************************************/}

                                <div className="col-md-7" style={{ display: step == 1 ? "block" : "none" }}>
                                    <div className="d-flex flex-column mb-20" style={{ paddingtop: '7px', paddingBottom: '7px', width: '30%', backgroundColor: '#30252F', color: 'white', borderRadius: '30px' }}>
                                        <h4 style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Order Summary</h4>
                                    </div>
                                    {
                                        props.cart.map((product) => {
                                            return <div className="d-flex justify-content-between mb-10" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', padding: '10px' }}>
                                                <div className="d-flex">
                                                    <div className="">
                                                        <img src={product.product_images} height="130px" width="100px" style={{ borderRadius: '10px' }} alt="product" />
                                                    </div>
                                                    <div className="ml-10">
                                                        <h5 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '5px' }}>BlackBerry</h5>
                                                        <p style={{ fontSize: '14px', color: 'black', fontWeight: '400' }}>{product.product_name}</p>
                                                        <p className="mt-0" style={{ fontSize: '15px', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>{product.sub_category_name}</p>
                                                        <div className="mt-20">
                                                            <Button onClick={openSizeModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px' }}>Size : S &nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                                                            <Button onClick={openQuantityModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px', marginLeft: '6px' }}>Qty : {product.product_qty}&nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '16px', color: 'black', fontWeight: '700' }}>₹{product.product_discount_price}</p>
                                                    <div className="d-flex">
                                                        <p className="mt-0" style={{ fontSize: '15px', textDecoration: 'line-through', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>₹{product.product_original_price}</p>
                                                        <p className="mt-0" style={{ marginLeft: '8px', fontSize: '15px', color: 'red', fontWeight: '500' }}>{product.product_discount_percentage}% OFF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }


                                </div>

                                {/*************************************THIRD STEP**************************************/}

                                <div className="col-md-7" style={{ display: step == 2 ? "block" : "none" }}>
                                    <div className="d-flex flex-column mb-20" style={{ paddingtop: '7px', paddingBottom: '7px', width: '30%', backgroundColor: '#30252F', color: 'white', borderRadius: '30px' }}>
                                        <h4 style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>Payment</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6" style={{ padding: '10px', cursor: 'pointer' }}>
                                            <div onClick={()=>{
                                                setPaymentOption(0);
                                            }} className="d-flex flex-column align-items-center" style={{ padding: '30px', borderRadius: '9px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                                                <input type="radio" value="0" style={{ height: '20px', width: '20px' }} checked={paymentOption==0?'checked':''} />
                                                <p className="mt-10" style={{ fontWeight: '600' }}>Online Payment</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6" style={{ padding: '10px', cursor: 'pointer' }}>
                                            <div onClick={()=>{
                                                setPaymentOption(1);
                                            }} className="d-flex flex-column align-items-center" style={{ padding: '30px', borderRadius: '9px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                                                <input type="radio" value="1" style={{ height: '20px', width: '20px' }} checked={paymentOption==1?'checked':''} />
                                                <p className="mt-10" style={{ fontWeight: '600' }}>Cash on Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-20">
                                        <input component={Link} to="/confirm" className="w-100" type="submit" value="Process to Pay" style={{ borderRadius: '10px', height: '44px', backgroundColor: '#30252F', fontSize: '17px', fontWeight: '600', color: 'white' }} />
                                    </div>
                                </div>

                                {
                                    /********************************************************************************/
                                    /********************************************************************************/
                                    /********************************* RIGHT MOST SECTION***************************/
                                    /********************************************************************************/
                                    /********************************************************************************/
                                }

                                <div className="col-md-3 mb-20 position-sticky">
                                    <h5 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.5px' }}>Order</h5>
                                    <hr className="mt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.3)' }} />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p style={pricingDetail}>Total MRP</p>
                                        <p style={{ fontWeight: '600' }}>₹{calculateProductsMRP()}</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p style={pricingDetail}>Discounted on MRP</p>
                                        <p style={{ fontWeight: '500', fontSize: '14px', color: 'green' }}>-₹{calculateProductsDiscountedPrice()}</p>
                                    </div>
                                    <div className="mt-10 d-flex justify-content-between align-items-center">
                                        <p style={pricingDetail}>Coupon Discount</p>
                                        <Link onClick={openCouponModal} style={{ color: '#30252F' }}>Apply Coupon</Link>
                                    </div>
                                    <div className="mt-10 d-flex justify-content-between align-items-center">
                                        <p style={pricingDetail}>Shipping</p>
                                        <Link style={{ fontWeight: '700', fontSize: '14px', color: 'green' }}>Free</Link>
                                    </div>
                                    <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.3)' }} />
                                    <div className="d-flex justify-content-between align-items-center back">
                                        <p style={{ fontWeight: '700', color: 'black' }}>Total Amount</p>
                                        <p style={{ fontWeight: '700', fontSize: '15px', color: 'black' }}>₹{calculateProductsTotalAmount()}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <div>
                                <h4 style={{ textAlign: 'center' }}>Empty Cart!</h4>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                /********************************************************************************/
                /********************************************************************************/
                /********************************* MOBILE UI CHECKOUT ***************************/
                /********************************************************************************/
                /********************************************************************************/
            }
            <div className="container-fluid d-sm-block d-md-none mt-70">
                <div>
                    <Steps current={step} >
                        <Steps.Item icon={<Icon icon="map-marker" style={{ fontSize: '20px' }} />} />
                        <Steps.Item icon={<Icon icon="history" style={{ fontSize: '20px' }} />} />
                        <Steps.Item icon={<Icon icon="credit-card-alt" style={{ fontSize: '20px' }} />} />
                    </Steps>
                </div>
                {
                    /********************************* FIRST STEP mui ************************************/
                }
                <div className="mt-10" style={{ display: step == 0 ? "block" : "none" }}>
                    <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '600', fontSize: '13px' }}>Please select the address at which we can deliver your product.</p>
                    <div className="row mt-20">
                        <div className="col-md-4">
                            <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>Siddharth Kumar</h5>
                                <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>M II/112 Sector-C, Aliganj, yojana Jankipuram, Lucknow, Uttar Pradesh, 226001</p>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : 9076652887</p>
                                <ButtonGroup className="mt-10">
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }} ><Icon icon="trash-o" /></Button>
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>Siddharth Kumar</h5>
                                <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>M II/112 Sector-C, Aliganj, yojana Jankipuram, Lucknow, Uttar Pradesh, 226001</p>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : 9076652887</p>
                                <ButtonGroup className="mt-10">
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }} ><Icon icon="trash-o" /></Button>
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>Siddharth Kumar</h5>
                                <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>M II/112 Sector-C, Aliganj, yojana Jankipuram, Lucknow, Uttar Pradesh, 226001</p>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : 9076652887</p>
                                <ButtonGroup className="mt-10">
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }} ><Icon icon="trash-o" /></Button>
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>Siddharth Kumar</h5>
                                <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>M II/112 Sector-C, Aliganj, yojana Jankipuram, Lucknow, Uttar Pradesh, 226001</p>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : 9076652887</p>
                                <ButtonGroup className="mt-10">
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }} ><Icon icon="trash-o" /></Button>
                                    <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /********************************* SECOND STEP mui ************************************/
                }
                <div className="container mb-20" style={{ display: step == 1 ? 'block' : 'none' }}>
                    <p className="mt-10" style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '600', fontSize: '13px' }}>Please check the product, price and quantity before going to the final step.</p>
                    {
                        [1, 2, 3].map((data) => {
                            return <div className="mt-10" style={{ padding: '8px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '5px' }}>
                                <div className="d-flex" >
                                    <img src="imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="100px" width="75px" style={{ borderRadius: '5px' }} alt="product" />
                                    <div className="ml-10">
                                        <p style={nameStyle}>Men Blue Regular Fit Self Design Casual Shirt</p>
                                        <p style={clothTypeName}>Casual Shirt</p>
                                        <p style={pricingStyle}><span>2</span>&nbsp; * &nbsp; $2000</p>
                                    </div>
                                    <IconButton className="ml-10" style={{ backgroundColor: 'transparent' }} icon={<Icon icon="trash" style={{ color: 'black' }} />} circle />
                                </div>
                                <div className="d-flex mt-10">
                                    <Button className="w-25" appearance="ghost" style={{ border: '1px solid black', color: 'black' }}><Icon icon="heart-o" /></Button>
                                    <Button onClick={openMSizeSheet} className="w-75 d-flex justify-content-between align-items-center ml-10" appearance="ghost" style={{ border: '1px solid black', color: 'black' }}><p>1</p><Icon icon="angle-down" /></Button>
                                </div>
                            </div>
                        })
                    }
                    <Link to="/checkout">
                        <Button className="w-100 mt-20" style={{ height: '45px', backgroundColor: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }} appearance="primary">GO TO CHECKOUT</Button>
                    </Link>
                </div>
                {
                    /********************************* THIRD STEP mui ************************************/
                }
                <div className="mb-30" style={{ display: step == 2 ? 'block' : 'none' }}>
                    <div className="row">
                        {
                            cardData.map((data) => {
                                return <div className="col-6" style={{ padding: '10px', cursor: 'pointer' }}>
                                    <div onClick={selectCheckBox(cardData.indexOf(data))} className="d-flex flex-column align-items-center" style={{ padding: '30px', borderRadius: '9px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                                        <input type="radio" value={data.value} style={{ height: '20px', width: '20px' }} />
                                        <p className="mt-10" style={{ fontWeight: '600', fontSize: '12px' }}>{data.title}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="mt-20">
                        <form action="">
                            <FormControl variant="outlined" style={{ width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-password">Card Number</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="text"
                                    value=""
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Icon icon="cc-visa" size="2x" />
                                        </InputAdornment>
                                    }
                                    labelWidth={100}
                                />
                            </FormControl>
                            <FormControl variant="outlined" style={{ marginTop: '15px', width: '100%' }}>
                                <InputLabel htmlFor="outlined-adornment-password">Card Holder Name</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type="text"
                                    value=""
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Icon icon="user" size="2x" />
                                        </InputAdornment>
                                    }
                                    labelWidth={140}
                                />
                            </FormControl>
                            <div className="d-flex" style={{ marginTop: '0px' }}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
                                        variant="outlined"
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Expiry Date"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <FormControl variant="outlined" style={{ marginLeft: '20px', marginTop: '15px', width: '100%' }}>
                                    <InputLabel htmlFor="outlined-adornment-password">CVV Code</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type="text"
                                        value=""
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <Icon icon="info" size="2x" />
                                            </InputAdornment>
                                        }
                                        labelWidth={80}
                                    />
                                </FormControl>
                            </div>
                            {/* <Link className="w-100" to="/confirm" style={{ borderRadius: '10px', height: '44px', backgroundColor: '#30252F', fontSize: '17px', fontWeight: '600', color: 'white' }}>Process To Pay</Link> */}
                            <input component={Link} to="/confirm" className="w-100" type="submit" value="Process to Pay" style={{ borderRadius: '5px', height: '45px', backgroundColor: '#30252F', fontSize: '17px', fontWeight: '600', color: 'white' }} />
                        </form>
                    </div>
                </div>
            </div>
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* SIZE CONFIG MODAL FOR MOBILE*******************************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <BottomSheet
                maxHeight=""
                header={
                    <p style={{ color: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }}>Select Quantity</p>
                }
                footer={
                    <Button onClick={closeMSizeSheet} style={{ backgroundColor: '#30252F', fontWeight: 'bold', letterSpacing: '0.5px' }} className="w-100" appearance="primary">CONFIRM</Button>
                }
                open={bottomSheet}>
                {
                    ["S", "M", "L", "XL"].map((data) => {
                        return <h5 className="text-center mb-10">{data}</h5>
                    })
                }
            </BottomSheet>
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* SIZE CONFIG MODAL FOR WEB*******************************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Modal className="modal-checkout-size" show={showSize} onHide={closeSizeModal}>
                <Modal.Header>
                    <Modal.Title>
                        <div className="d-flex">
                            <div className="">
                                <img src="imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="95px" width="80px" style={{ borderRadius: '10px' }} alt="product" />
                            </div>
                            <div className="ml-10">
                                <h5 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '5px' }}>BlackBerry</h5>
                                <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.7)', fontWeight: '500' }}>Men Blue Regular Fit Self Design Casual Shirt</p>
                                <div className="d-flex mt-20">
                                    <p style={{ fontSize: '16px', color: 'black', fontWeight: '700' }}>₹320</p>
                                    <p className="ml-10 mt-0" style={{ fontSize: '15px', textDecoration: 'line-through', color: 'rgba(0,0,0,0.5)', fontWeight: '600' }}>₹1000</p>
                                    <p className="mt-0" style={{ marginLeft: '8px', fontSize: '15px', color: 'red', fontWeight: '500' }}>51% OFF</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <hr className="mt-0" />
                    <h5 style={{ fontWeight: '600', color: 'black', letterSpacing: '0.2px' }}>Select Size</h5>
                    <RadioGroup className="mt-10" name="radioList" inline appearance="picker" defaultValue="A">
                        <Radio value="A">
                            <div style={{ borderRadius: '50%', border: '1 px solid black' }}>
                                S
                            </div>
                        </Radio>
                        <Radio value="B">M</Radio>
                        <Radio value="C">L</Radio>
                        <Radio value="D">XL</Radio>
                    </RadioGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="w-100" onClick={closeSizeModal} style={{ backgroundColor: '#30252F' }} appearance="primary">Done</Button>
                </Modal.Footer>
            </Modal>

            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* QUANTITY CONFIG MODAL*******************************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Modal className="modal-checkout-size" show={showQuantity} size="sm" onHide={closeQuantityModal}>
                <Modal.Header>
                    <Modal.Title>
                        <h5 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '5px' }}>Select Quantity</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RadioGroup className="mt-10" name="radioList" inline appearance="picker" defaultValue="A">
                        {
                            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((data) => {
                                return <Radio value={data}>{data}</Radio>
                            })
                        }
                    </RadioGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="w-100" onClick={closeQuantityModal} style={{ backgroundColor: '#30252F' }} appearance="primary">Done</Button>
                </Modal.Footer>
            </Modal>
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* APPLY COUPON MODAL*******************************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Modal overflow={true} className="modal-checkout-size" show={showCoupon} size="sm" onHide={closeCouponModal}>
                <Modal.Header>
                    <Modal.Title>
                        <h5 style={{ fontWeight: '700', color: '#30252F', letterSpacing: '0.4px', marginBottom: '5px' }}>Select Coupon</h5>
                        <hr className="mt-10 mb-10" />
                        <div class="input-group mt-20">
                            <input type="text" class="form-control" placeholder="Apply Coupon" aria-label="Apply Coupon" aria-describedby="button-addon2" />
                            <button class="btn coupon-button" type="button" id="button-addon2">CHECK</button>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="">
                            <div className="mt-10">
                                <h6 className="w-25 mb-10" style={{ textAlign: 'center', fontWeight: 'bold', border: '1px dashed black', padding: '5px' }}>GET50</h6>
                                <p style={{ fontWeight: 'bold' }}>Save ₹50</p>
                                <p className="m-0" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.5)' }}>Rs. 50 off on minimum purchase of Rs. 499.</p>
                                <p className="mt-10" style={{ fontWeight: 'bold', fontSize: '14px', color: 'rgba(0,0,0,0.5)' }}>Expired on: 02nd March 2021 | 11:59 PM</p>
                                <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                                <p className="mt-10" style={{ fontWeight: 'bold', fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>This offer is valid only above ₹350</p>
                                <hr />
                            </div>
                            <div className="mt-10">
                                <h6 className="w-25 mb-10" style={{ textAlign: 'center', fontWeight: 'bold', border: '1px dashed black', padding: '5px' }}>GET50</h6>
                                <p style={{ fontWeight: 'bold' }}>Save ₹50</p>
                                <p className="m-0" style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.5)' }}>Rs. 50 off on minimum purchase of Rs. 499.</p>
                                <p className="mt-10" style={{ fontWeight: 'bold', fontSize: '14px', color: 'rgba(0,0,0,0.5)' }}>Expired on: 02nd March 2021 | 11:59 PM</p>
                                <hr className="mt-10 mb-10" style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                                <p className="mt-10" style={{ fontWeight: 'bold', fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>This offer is valid only above ₹350</p>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="w-100" onClick={closeCouponModal} style={{ backgroundColor: '#30252F' }} appearance="primary">Apply Coupon</Button>
                </Modal.Footer>
            </Modal>
            <Footer />
        </React.Fragment >
    )
}

const mapStateToProps = state => {
    return {
        cart: state.dCart.cart,
        isLoggedIn: state.dCustomer.isLoggedIn,
        customerDetails: state.dCustomer.customerDetails
    }
}

const mapActionToProps = {
    addToCart: cartActions.addToCart,
    deleteToCart: cartActions.deleteToCart,
    checkIsLoggedIn: customerActions.checkIsLoggedIn,
    setLoggedIn: customerActions.setLoggedIn,
    setCustomerDetails: customerActions.setCustomerDetails
}

export default connect(mapStateToProps, mapActionToProps)(Checkout)
