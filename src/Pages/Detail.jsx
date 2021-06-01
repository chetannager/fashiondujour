import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Button, ButtonGroup, Icon, Steps, Modal, Radio, RadioGroup } from 'rsuite';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import axios from 'axios';

const imageURL = [
    'imgs/sliding-image/img1.webp',
    'imgs/sliding-image/img2.webp',
    'imgs/sliding-image/img3.jpg',
    'imgs/sliding-image/img4.webp',
];

const imgData = [
    {
        'imgUrl': 'imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp',
    },
    {
        'imgUrl': 'imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img2.jpg',
    },
    {
        'imgUrl': 'imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img3.jpg',
    },
    {
        'imgUrl': 'imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img4.webp',
    },
];
const Detail = (props) => {

    // const [imgChangeUrl, setUrl] = React.useState("imgs/Womens/DressBerry/Dresses/Navy Blue Printed Maxi Sustainable Dress/img1.webp");
    // function changeImage(url) {
    //     setUrl(url);
    // }

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

    const [productDetails, setProductDetails] = React.useState({});

    const getProductsDetails = (productId) => {
        axios.get('http://fashiondujourapi.com/v1/product/details/' + productId)
            .then(function (response) {
                if (response.status === 200) {
                    setProductDetails(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    React.useEffect(() => {
        getProductsDetails(window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]);
    }, [props])

    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            {
                /***********************************************************************************/
                /***********************************************************************************/
                /************************************* WEB UI DESIGN *******************************/
                /***********************************************************************************/
                /***********************************************************************************/
            }
            <div className="container-fluid d-none d-md-block mb-30 ml-10 mr-10 mt-90">
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div>
                            {
                                productDetails.product_images.map((imageUrl)=>{
                                    return (
                                        <div className="mb-10" style={{ height: '140px', width: '110px', backgroundSize: '100% 100%', backgroundImage: 'url("'+imageUrl+'")' }}></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <div className="mb-10 ml-10" style={{ borderRadius: '8px', height: '590px', width: '500px', backgroundSize: '100% 100%', backgroundImage: 'url("'+productDetails.product_images[0]+'")' }}></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 style={{ color: '#30252F', fontWeight: '500' }}>{productDetails.product_name}</h3>
                        <hr style={{ width: '85px', marginTop: '9px', color: 'grey', borderTop: '3px solid rgba(0,0,0,0.5)' }} />
                        <p style={{ color: '#30252F', fontSize: '18px', fontWeight: '700', letterSpacing: '0.4px' }}>Dress Berry</p>
                        <div className="d-flex align-items-center mt-10 mb-20">
                            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '15px', fontWeight: '600', letterSpacing: '0.4px', textDecoration: 'line-through' }}>₹{productDetails.product_original_price}</p>
                            <p className="ml-10 mr-10" style={{ color: '#30252F', fontSize: '16px', fontWeight: '700', letterSpacing: '0.4px' }}>₹{productDetails.product_discount_price}</p>
                            <p style={{ color: 'red', fontSize: '16px', fontWeight: '700', letterSpacing: '0.4px' }}>{productDetails.product_discount_percentage}% OFF</p>
                        </div>
                        <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '16px', fontWeight: '600', letterSpacing: '0.4px' }}>{productDetails.product_description}</p>
                        <div className="mt-20">
                            <Button onClick={openSizeModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px' }}>Size : S &nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                            <Button onClick={openQuantityModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px', marginLeft: '6px' }}>Qty : 1 &nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                        </div>
                        <div className="mt-20 d-flex justify-content-center">
                            <Button className="mr-10 w-100" appearance="primary" style={{ height: '45px', background: '#30252F', color: 'white' }}>ADD TO CART</Button>
                            <Button className="w-100" appearance="ghost" style={{ color: '#30252F', border: '1px solid #30252F' }}>ADD TO WISHLIST</Button>
                        </div>
                    </div>
                </div>
            </div>
            {
                /***********************************************************************************/
                /***********************************************************************************/
                /********************************** MOBILE UI DESIGN *******************************/
                /***********************************************************************************/
                /***********************************************************************************/
            }
            <div className="container-fluid d-sm-block d-md-none mt-60 mb-30">
                <div className="mb-20">
                    <CarouselProvider isPlaying={true} naturalSlideWidth={100} naturalSlideHeight={70} totalSlides={imageURL.length}>
                        <div className="position-relative">
                            <Slider>
                                {
                                    imageURL.map((url) => {
                                        return (
                                            <Slide index={imageURL.indexOf(url)}>
                                                <div style={{ height: '400px', backgroundImage: 'linear-gradient(to bottom,#FCCCB0,rgba(255,255,255,0.05)),url("' + url + '")', backgroundSize: '100% 100%' }}></div>
                                            </Slide>
                                        );
                                    })
                                }
                            </Slider>
                            <ButtonBack style={{ height: '40px', width: '40px', borderRadius: '50%', top: '41%', left: '0px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-left" style={{ fontSize: '20px', color: 'white' }} /></ButtonBack>
                            <ButtonNext style={{ height: '40px', width: '40px', borderRadius: '50%', top: '41%', right: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-right" style={{ fontSize: '20px', color: 'white' }} /></ButtonNext>
                            <DotGroup style={{ position: 'absolute', bottom: '20px', left: '14%' }} />
                        </div>
                    </CarouselProvider>
                </div>
                <div className="container">
                    <h3 style={{ color: '#30252F', fontWeight: '500' }}>Navy Blue Printed Maxi Sustainable</h3>
                    <hr style={{ width: '85px', marginTop: '9px', color: 'grey', borderTop: '3px solid rgba(0,0,0,0.5)' }} />
                    <p style={{ color: '#30252F', fontSize: '19px', fontWeight: '700', letterSpacing: '0.4px' }}>Dress Berry</p>
                    <div className="d-flex align-items-center mt-10 mb-20">
                        <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '15px', fontWeight: '600', letterSpacing: '0.4px', textDecoration: 'line-through' }}>₹1000</p>
                        <p className="ml-10 mr-10" style={{ color: '#30252F', fontSize: '14px', fontWeight: '700', letterSpacing: '0.4px' }}>₹900</p>
                        <p style={{ color: 'red', fontSize: '14px', fontWeight: '700', letterSpacing: '0.4px' }}>45% OFF</p>
                    </div>
                    <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '14px', fontWeight: '600', letterSpacing: '0.4px' }}>Navy Blue and White printed woven maxi dress, has a V-neck, short sleeves, smocked detailing, and straight hem .MADE WITH LENZING ECOVERO LENZING ECOVERO viscose fibers tailor eco-responsible fashion and lifestyle which you can trust.<br /><br />
				        LENZING ECOVERO fibers are made using wood pulp from sustainably managed forests and are certified by the EU Ecolabel for meeting strict environmental standards in its production process. ECOVERO fibers are 100% biodegradable.</p>
                    <div className="mt-20">
                        <Button onClick={openSizeModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px' }}>Size : S &nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                        <Button onClick={openQuantityModal} style={{ backgroundColor: '#30252F', color: 'white', fontSize: '13px', marginLeft: '6px' }}>Qty : 1 &nbsp; <Icon icon="arrow-down" style={{ fontSize: '13px' }} /></Button>
                    </div>
                    <div className="mt-20 d-flex justify-content-center">
                        <Button className="mr-10 w-100" appearance="primary" style={{ height: '45px', background: '#30252F', color: 'white' }}>ADD TO CART</Button>
                        <Button className="w-100" appearance="ghost" style={{ color: '#30252F', border: '1px solid #30252F' }}>ADD TO WISHLIST</Button>
                    </div>
                </div>
            </div>
            <Footer />
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************* SIZE CONFIG MODAL*******************************************/
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
        </React.Fragment>
    )
}

export default Detail
