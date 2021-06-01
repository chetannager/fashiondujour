import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import { Button, Icon } from 'rsuite'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const imageURL = [
    'imgs/sliding-image/img1.webp',
    'imgs/sliding-image/img2.webp',
    'imgs/sliding-image/img3.jpg',
    'imgs/sliding-image/img4.webp',
];
const hnmUrl = [
    {
        'imgUrl': 'imgs/Womens/Tokyo Talkies/Heels/Women Black Solid Pumps/img1.webp',
        'name': 'Women Black Solid Pumps',
        'price': '₹1000',
    },
    {
        'imgUrl': 'imgs/Womens/Tokyo Talkies/Heels/Women Black Solid Stilettos/img1.jpg',
        'name': 'Women Black Solid Stilettos',
        'price': '₹1300',
    },
    {
        'imgUrl': 'imgs/Womens/Tokyo Talkies/Heels/Women Gold-Toned Solid Heels/img1.webp',
        'name': 'Women Gold-Toned Solid Heels',
        'price': '₹1170',
    },
];

const sareeUrl = [
    {
        'imgUrl': 'imgs/Womens/H&M/Saree/Red Solid Saree/img1.webp',
        'name': 'Red Solid Saree',
        'price': '₹1000',
    },
    {
        'imgUrl': 'imgs/Womens/H&M/Saree/Blue & Golden Quirky Print Saree/img1.webp',
        'name': 'Blue & Golden Quirky Print Saree',
        'price': '₹1300',
    },
    {
        'imgUrl': 'imgs/Womens/H&M/Saree/Olive Green & Golden Solid Maheshwari Saree/img1.webp',
        'name': 'Olive Green & Golden Solid Maheshwari Saree',
        'price': '₹1170',
    },
];


const Home = (props) => {
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            {
                /*****************************************************************************************************/
                /*****************************************************************************************************/
                /************************************************* WEB UI DESIGN *************************************/
                /*****************************************************************************************************/
                /*****************************************************************************************************/
            }
            <div className="d-none d-md-block">
                <div className="container-fluid p-0 mt-70 mb-20">
                    <CarouselProvider isPlaying={true} naturalSlideWidth={100} naturalSlideHeight={30} totalSlides={imageURL.length}>
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
                            <ButtonBack style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', left: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-left" style={{ fontSize: '20px', color: 'white' }} /></ButtonBack>
                            <ButtonNext style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', right: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-right" style={{ fontSize: '20px', color: 'white' }} /></ButtonNext>
                            <DotGroup style={{ position: 'absolute', bottom: '20px', left: '40%' }} />
                        </div>
                    </CarouselProvider>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** SECOND PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mt-40">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ borderRadius: '10px' }} src="imgs/mens/Roadster/Casual Trousers/Men Navy Blue & Black Straight Fit Printed Joggers/1.webp" alt="alt" height="500px" width="450px" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="text-center" style={{ color: '#30252F' }}>ROAD... WHAT?</h3>
                            <p className="mt-10" style={{ fontSize: '15px', textAlign: 'center' }}>Forget jeans. Forget shorts. Forget everything you know about covering your legs. Roadsters – The Everywhere Bottomwear – are ultra-light, breathable and functional pants that crosses certain boundaries of whacky.</p>
                            <h3 className="text-center mt-30" style={{ color: '#30252F' }}>WHAT MAKES ROADSTER DIFFERENT?</h3>
                            <div className="row mt-30">
                                <div className="col-md-6 mb-20 d-flex align-items-center">
                                    <img src="imgs/icon/feather.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                                    <div className="ml-20">
                                        <h4 style={{ color: '#30252F' }}>ULTRA LIGHT</h4>
                                        <p style={{ fontSize: '14px' }}>Roadster are so light you barely notice you’re wearing them.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-20 d-flex align-items-center">
                                    <img src="imgs/icon/air.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                                    <div className="ml-20">
                                        <h4 style={{ color: '#30252F' }}>BREATHABLE</h4>
                                        <p style={{ fontSize: '14px' }}>The fabric and fit allows maximum ventilation. Say goodbye to sweaty-pants.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-20 d-flex align-items-center">
                                    <img src="imgs/icon/yoga.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                                    <div className="ml-20">
                                        <h4 style={{ color: '#30252F' }}>FLEXIBLE</h4>
                                        <p style={{ fontSize: '14px' }}>Roadster is ideal for travel, gym, yoga, leisure or practicing your ninja kicks.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-20 d-flex align-items-center">
                                    <img src="imgs/icon/yoga.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                                    <div className="ml-20">
                                        <h4 style={{ color: '#30252F' }}>FLEXIBLE</h4>
                                        <p style={{ fontSize: '14px' }}>Roadster is ideal for travel, gym, yoga, leisure or practicing your ninja kicks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** THIRD PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container-fluid mt-30 mb-50 pt-50 pb-40" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("imgs/saree.jpg")', backgroundAttachment: 'fixed', backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="text-white mb-20" style={{ fontWeight: 'lighter' }}>ETHNIC MEETS ETHICS</h2>
                                <p className="mb-0 text-white" style={{ fontFamily: 'Mrs Saint Delafield', fontSize: '60px' }}>The</p>
                                <p className="text-white" style={{ marginTop: '-40px', marginLeft: '30px', fontFamily: 'Mrs Saint Delafield', fontSize: '90px' }}>Indian</p>
                                <p className="text-white mb-20">All in all, the Sarees are integral to an Indian wardrobe. They are the quintessential Indian female ensemble that truly adds to the beauty of women. They have been around for ages, and can never really go out of vogue.</p>
                                <Button appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }}>SHOP NOW</Button>
                            </div>
                            <div className="col-md-6">
                                <CarouselProvider isPlaying={true} infinite={true} naturalSlideWidth={100} visibleSlides={2} naturalSlideHeight={150} totalSlides={sareeUrl.length}>
                                    <div className="position-relative">
                                        <Slider>
                                            {
                                                sareeUrl.map((url) => {
                                                    return <Slide index={sareeUrl.indexOf(url)}>
                                                        <div>
                                                            <img src={url.imgUrl} alt="" height="300px" />
                                                            <h6 className="mt-10 text-white" style={{ fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url.name}</h6>
                                                            <p className="text-white" style={{ fontSize: '14px', fontWeight: 'bold' }}>{url.price}</p>
                                                        </div>
                                                    </Slide>
                                                })
                                            }
                                        </Slider>
                                        <DotGroup style={{ position: 'absolute', bottom: '20px', left: '30%' }} />
                                    </div>
                                </CarouselProvider>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** FOURTH PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mt-40">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ borderRadius: '10px' }} src="imgs/Womens/H&M/Boots/Women Beige High Profile Chelsea Boots/img1.webp" alt="alt" height="500px" width="450px" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-center">THE H &amp; M BOOTS</h4>
                            <p className="text-center mt-10 mb-20">Platform boots in imitation leather with a zip in one side, lacing at the front and a loop at the back. Decorative welt seams and chunky soles. Height of soles 4.5 cm. Heel 5 cm.</p>
                            <h5 className="text-center mb-20">OUR COLLECTIONS:</h5>
                            <CarouselProvider isPlaying={true} infinite={true} naturalSlideWidth={100} visibleSlides={2} naturalSlideHeight={150} totalSlides={hnmUrl.length}>
                                <div className="position-relative">
                                    <Slider>
                                        {
                                            hnmUrl.map((url) => {
                                                return <Slide index={hnmUrl.indexOf(url)}>
                                                    <div>
                                                        <img src={url.imgUrl} alt="" height="300px" />
                                                        <h6 className="mt-10" style={{ fontWeight: '500' }}>{url.name}</h6>
                                                        <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{url.price}</p>
                                                    </div>
                                                </Slide>
                                            })
                                        }
                                    </Slider>
                                    {/* <ButtonBack style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', left: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-left" style={{ fontSize: '20px', color: 'white' }} /></ButtonBack> */}
                                    {/* <ButtonNext style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', right: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-right" style={{ fontSize: '20px', color: 'white' }} /></ButtonNext> */}
                                    <DotGroup style={{ position: 'absolute', bottom: '20px', left: '30%' }} />
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** FIFTH PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container-fluid mt-50 mb-40 pt-50 pb-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("imgs/back2.jpg")', backgroundAttachment: 'fixed', backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                    <h6 className="text-center text-white">GET EXCLUSIVE PRODUCT REVIEWS</h6>
                    <h3 className="text-center text-white">JOIN THE FASHION CLUB</h3>
                    <hr style={{ marginLeft: '48%', width: '60px', borderTop: '2px solid yellow' }} />
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-center mb-30 w-50 text-white">The Trooper Club gets you in on our secret deals, product previews, early bird discounts and much more. Sign up now!</p>
                        {
                            props.isLoggedIn ? <Button onClick={props.login} appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }} >EXPLORE</Button> : <Button onClick={props.login} appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }} >SIGN UP</Button>
                        }
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** LAST PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mb-30">
                    <div className="row mt-30">
                        <div className="col-md-4">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/original.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>100% ORIGINAL</span> guarantee for all products at fashiondujour.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/30.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>Return within 30 days</span> of receiving your order</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/delivery.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>Get Free Delivery</span> for every order above Rs. 799</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                /*****************************************************************************************************/
                /*****************************************************************************************************/
                /************************************************* MOBILE UI DESIGN **********************************/
                /*****************************************************************************************************/
                /*****************************************************************************************************/
            }
            <div className="d-sm-block d-md-none">
                <div className="mt-50">
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
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** SECOND PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mt-40">
                    <h3 className="text-center" style={{ color: '#30252F' }}>ROAD... WHAT?</h3>
                    <p className="mt-10 mb-20" style={{ fontSize: '15px', textAlign: 'center' }}>Forget jeans. Forget shorts. Forget everything you know about covering your legs. Roadsters – The Everywhere Bottomwear – are ultra-light, breathable and functional pants that crosses certain boundaries of whacky.</p>
                    <img style={{ borderRadius: '10px' }} src="imgs/mens/Roadster/Casual Trousers/Men Navy Blue & Black Straight Fit Printed Joggers/1.webp" alt="alt" height="30%" width="100%" />
                    <h3 className="text-center mt-30" style={{ color: '#30252F' }}>WHAT MAKES ROADSTER DIFFERENT?</h3>
                    <div className="row mt-30">
                        <div className="col-md-6 mb-20 d-flex align-items-center">
                            <img src="imgs/icon/feather.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                            <div className="ml-20">
                                <h4 style={{ color: '#30252F' }}>ULTRA LIGHT</h4>
                                <p style={{ fontSize: '14px' }}>Roadster are so light you barely notice you’re wearing them.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-20 d-flex align-items-center">
                            <img src="imgs/icon/air.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                            <div className="ml-20">
                                <h4 style={{ color: '#30252F' }}>BREATHABLE</h4>
                                <p style={{ fontSize: '14px' }}>The fabric and fit allows maximum ventilation. Say goodbye to sweaty-pants.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-20 d-flex align-items-center">
                            <img src="imgs/icon/yoga.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                            <div className="ml-20">
                                <h4 style={{ color: '#30252F' }}>FLEXIBLE</h4>
                                <p style={{ fontSize: '14px' }}>Roadster is ideal for travel, gym, yoga, leisure or practicing your ninja kicks.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-20 d-flex align-items-center">
                            <img src="imgs/icon/yoga.png" height="74px" width="74px" alt="" style={{ padding: '5px', borderRadius: '50%', border: '2px solid black' }} />
                            <div className="ml-20">
                                <h4 style={{ color: '#30252F' }}>FLEXIBLE</h4>
                                <p style={{ fontSize: '14px' }}>Roadster is ideal for travel, gym, yoga, leisure or practicing your ninja kicks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** THIRD PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container-fluid mt-30 mb-50 pt-50 pb-40" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("imgs/saree.jpg")', backgroundAttachment: 'fixed', backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-white mb-20" style={{ fontWeight: 'lighter' }}>ETHNIC MEETS ETHICS</h3>
                                <p className="mb-0 text-white" style={{ fontFamily: 'Mrs Saint Delafield', fontSize: '57px' }}>The</p>
                                <p className="text-white" style={{ marginTop: '-40px', marginLeft: '30px', fontFamily: 'Mrs Saint Delafield', fontSize: '80px' }}>Indian</p>
                                <p className="text-white mb-30">All in all, the Sarees are integral to an Indian wardrobe. They are the quintessential Indian female ensemble that truly adds to the beauty of women. They have been around for ages, and can never really go out of vogue.</p>
                            </div>
                            <div className="col-md-6">
                                <CarouselProvider isPlaying={true} infinite={true} naturalSlideWidth={100} visibleSlides={2} naturalSlideHeight={220} totalSlides={sareeUrl.length}>
                                    <div className="position-relative">
                                        <Slider>
                                            {
                                                sareeUrl.map((url) => {
                                                    return <Slide index={sareeUrl.indexOf(url)}>
                                                        <div style={{ marginRight: '15px' }}>
                                                            <img src={url.imgUrl} alt="" height="210px" width="100%" />
                                                            <h6 className="mt-10 text-white" style={{ fontWeight: '500', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url.name}</h6>
                                                            <p className="text-white" style={{ fontSize: '14px', fontWeight: 'bold' }}>{url.price}</p>
                                                        </div>
                                                    </Slide>
                                                })
                                            }
                                        </Slider>
                                        <DotGroup totalSlides={sareeUrl.length % 2 == 0 ? sareeUrl.length / 2 : sareeUrl.length % 2 + 1} style={{ position: 'absolute', bottom: '20px', left: '26%' }} />
                                    </div>
                                </CarouselProvider>
                                <div className="d-flex justify-content-center">
                                    <Button className="mt-10" appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }}>SHOP NOW</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** FOURTH PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mt-40">
                    <div className="">
                        <h4 className="text-center">THE H &amp; M BOOTS</h4>
                        <p className="text-center mt-10 mb-10">Platform boots in imitation leather with a zip in one side, lacing at the front and a loop at the back. Decorative welt seams and chunky soles. Height of soles 4.5 cm. Heel 5 cm.</p>
                        <img style={{ borderRadius: '10px' }} src="imgs/Womens/H&M/Boots/Women Beige High Profile Chelsea Boots/img1.webp" alt="alt" height="20%" width="100%" />
                        <h5 className="text-center mt-20 mb-20">OUR COLLECTIONS:</h5>
                        <CarouselProvider isPlaying={true} infinite={true} naturalSlideWidth={100} visibleSlides={2} naturalSlideHeight={240} totalSlides={hnmUrl.length}>
                            <div className="position-relative">
                                <Slider>
                                    {
                                        hnmUrl.map((url) => {
                                            return <Slide index={hnmUrl.indexOf(url)}>
                                                <div style={{ marginRight: '15px' }}>
                                                    <img src={url.imgUrl} alt="" height="230px" width="100%" />
                                                    <h6 className="mt-10" style={{ fontWeight: '500' }}>{url.name}</h6>
                                                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>{url.price}</p>
                                                </div>
                                            </Slide>
                                        })
                                    }
                                </Slider>
                                {/* <ButtonBack style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', left: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-left" style={{ fontSize: '20px', color: 'white' }} /></ButtonBack> */}
                                {/* <ButtonNext style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', right: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-right" style={{ fontSize: '20px', color: 'white' }} /></ButtonNext> */}
                                <DotGroup totalSlides={sareeUrl.length % 2 == 0 ? sareeUrl.length / 2 : sareeUrl.length % 2 + 1} style={{ position: 'absolute', bottom: '20px', left: '26%' }} />
                            </div>
                        </CarouselProvider>
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** FIFTH PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container-fluid mt-50 mb-40 pt-50 pb-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("imgs/back2.jpg")', backgroundAttachment: 'fixed', backgroundSize: '100% 100%', backgroundPosition: 'center' }}>
                    <p className="text-center text-white" style={{ fontSize: '13px' }}>GET EXCLUSIVE PRODUCT REVIEWS</p>
                    <h4 className="text-center text-white">JOIN THE FASHION CLUB</h4>
                    <hr style={{ marginLeft: '42%', width: '60px', borderTop: '2px solid yellow' }} />
                    <div className="d-flex flex-column align-items-center">
                        <p className="text-center mb-30 w-75 text-white">The Trooper Club gets you in on our secret deals, product previews, early bird discounts and much more. Sign up now!</p>
                        {
                            props.isLoggedIn ? <Button onClick={props.login} appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }} >EXPLORE</Button> : <Button onClick={props.login} appearance="ghost" style={{ border: '1px solid #FCCCB0', color: '#FCCCB0' }} >SIGN UP</Button>
                        }
                    </div>
                </div>
                {
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /******************************************** LAST PART **************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                    /***********************************************************************************************/
                }
                <div className="container mb-30">
                    <div className="row mt-10">
                        <div className="col-md-4 mt-20">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/original.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>100% ORIGINAL</span> guarantee for all products at fashiondujour.com</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-20">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/30.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>Return within 30 days</span> of receiving your order</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-20">
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '8px', borderRadius: '8px', border: '2px dashed rgba(0,0,0,0.5)' }}>
                                <img className="mt-10" src="imgs/icon/delivery.png" height="70px" width="90px" alt="" />
                                <p className="mt-20 text-center"><span style={{ fontWeight: 'bold', color: 'black' }}>Get Free Delivery</span> for every order above Rs. 799</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </React.Fragment>
    )
}

export default Home
