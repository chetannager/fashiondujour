import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import { Icon } from 'rsuite';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {API_URL} from '../actions/dCart';

const status = [
    {
        'img': 'imgs/icon/found.png',
        'title': 'Founded In',
        'description': 'March, 2012',
    },
    {
        'img': 'imgs/icon/revenue.png',
        'title': 'Estimated Revenue',
        'description': '$2 / Yearly',
    },
    {
        'img': 'imgs/icon/companies.png',
        'title': 'Companies we work',
        'description': '1+',
    },
];

const customer_review = [
    {
        'img': 'imgs/team/sid.jpg',
        'customer-name': 'Siddharth Kumar',
        'comment': 'This is an Amazing app for cleaning and laundry of clothes the service is too good and the staff is too decent I really love the dry cleaning and laundry services. your app is fully recommended ... it have amazing features.',
        'star': '5',
    },
    {
        'img': 'imgs/team/ismail.jpg',
        'customer-name': 'Mohammed Ismail',
        'comment': 'Nice work dude... just a suggestion that introduce urgent laundry. Lazy person like me forget about scheduling a pickup on weekend and I generally realize this before client meeting. You may charge good money for that, it will not be a problem for me! Thanks Mdhobi',
        'star': '5',
    },
    {
        'img': 'imgs/team/affan.jpg',
        'customer-name': 'Affan',
        'comment': 'Great service.I have used their laundry service twice now . They always arrive as stated and return my clothing on time. The clothes are returned clean with no wrinkles . The staff is extremely professional .Highly recommend.',
        'star': '5',
    },
    {
        'img': 'imgs/team/sid.jpg',
        'customer-name': 'Syed Tawsif',
        'comment': 'Very amazing app. It is very easy to use.best premium laundry to get washing clothes services. In very less time .I really appreciate it.',
        'star': '5',
    },
];

const commentStyle = {
    whiteSpace: 'wrap',
    maxHeight: '100px',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const Aboutus = (props) => {
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />

            {
                /***************************************************************************************/
                /***************************************************************************************/
                /********************** ABOUT US SECTION ************************************************/
                /***************************************************************************************/
                /***************************************************************************************/
            }

            <div className="container mt-90">
                <div className="mt-10 mb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="d-none d-md-block" src="imgs/icon/aboutus.svg" height="300px" alt="" />
                                <img className="d-md-none d-sm-block" src="imgs/icon/aboutus.svg" height="230px" alt="" />
                            </div>
                            <div className="col-md-6 ">
                                <h2>About us</h2>
                                <hr className="mt-0" style={{ borderTop: '2px solid rgba(0,0,0,0.5)', width: '90px' }} />
                                <p className="mt-10" style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '600' }}>
                                    Fashion-du-jour is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Fashion-du-jour aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    /***************************************************************************************/
                    /***************************************************************************************/
                    /********************** STATUS SECTION ************************************************/
                    /***************************************************************************************/
                    /***************************************************************************************/
                }

                <hr className="mt-60" style={{ borderTop: '1px dashed rgba(0,0,0,0.1)' }} />
                <div className="container mt-30 mb-30">
                    <div className="row justify-content-between">
                        {
                            status.map((value) => {
                                return <div className="col-md-3 mb-10 shadow-sm" style={{ backgroundColor: '#30252F', padding: '20px', borderRadius: '10px' }}>
                                    <div className="row align-items-center">
                                        <div className="col-md-4 align-items-center">
                                            <img src={value['img']} alt="error" style={{ borderRadius: '50%' }} />
                                        </div>
                                        <div className="col-md-8 pl-20">
                                            <h6 style={{ color: 'rgba(255,255,255,1.0)' }}>{value['title']}</h6>
                                            <h4 style={{ color: 'rgba(255,255,255,0.5)' }}>{value['description']}</h4>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

                {
                    /***************************************************************************************/
                    /***************************************************************************************/
                    /********************** CREATIVE MIND SECTION ******************************************/
                    /***************************************************************************************/
                    /***************************************************************************************/
                }

                <hr className="mt-40" style={{ borderTop: '1px dashed rgba(0,0,0,0.1)' }} />
                <div className="container mt-80 mb-20">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 style={{ color: '#30252F' }}>Meet innovative minds behind</h2>
                            <hr className="mt-0" style={{ borderTop: '2px solid #585985', width: '90px' }} />
                            <p className="mt-20" style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '600' }}>Apprinventiv has got the  support of brillant minds working continually to widen its global image. These creative intellectuals have travelled the success journey full of inspiration, challenges and emotion to form one the world's leading app development company.</p>
                        </div>
                        <div className="col-md-6">
                            <CarouselProvider isPlaying={true} naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={3}>
                                <div className="position-relative">
                                    <Slider>
                                        <Slide index={0} style={{ padding: '20px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                            <div className="mt-30 d-flex flex-column align-items-center justify-content-center" >
                                                <Avatar alt="Remy Sharp" src="imgs/team/sid.jpg" style={{ height: '130px', width: '130px' }} />
                                                <h4 className="text-light mt-10">Siddharth Kumar</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Chief Technology Officer)</p>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                                {/* <p style={{color:'white'}}>CTO</p> */}
                                                <div className="d-flex mt-20">
                                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1} style={{ padding: '20px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                            <div className="mt-30 d-flex flex-column align-items-center justify-content-center" >
                                                <Avatar alt="Remy Sharp" src="imgs/team/ismail.jpg" style={{ height: '130px', width: '130px' }} />
                                                <h4 className="text-light mt-10">Mohammed Ismail</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Graphic Designer)</p>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                                {/* <p style={{color:'white'}}>CEO &amp; Founder</p> */}
                                                <div className="d-flex mt-20">
                                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2} style={{ padding: '20px', backgroundImage: 'linear-gradient(to bottom right,#6096FD,#FB7B8E)', borderRadius: '15px' }}>
                                            <div className=" mt-30 d-flex flex-column align-items-center justify-content-center" >
                                                <Avatar alt="Remy Sharp" src="imgs/team/affan.jpg" style={{ height: '130px', width: '130px' }} />
                                                <h4 className="text-light mt-10">Mohammed Affan</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>(Backend Developer)</p>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>- "Don't Dream about someone elese life. Build your own"</p>
                                                {/* <p style={{color:'white'}}>CEO &amp; Founder</p> */}
                                                <div className="d-flex mt-20">
                                                    <Icon icon="twitter-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="instagram" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="facebook-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                    <Icon icon="google-plus-square" size="2x" style={{ color: 'white', marginRight: '9px' }} />
                                                </div>
                                            </div>

                                        </Slide>
                                    </Slider>
                                    <ButtonBack style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', left: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-left" style={{ fontSize: '20px', color: 'white' }} /></ButtonBack>
                                    <ButtonNext style={{ height: '40px', width: '40px', borderRadius: '50%', top: '43%', right: '10px', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }}><Icon icon="angle-right" style={{ fontSize: '20px', color: 'white' }} /></ButtonNext>
                                    {/* <DotGroup style={{ position: 'absolute', bottom: '20px', left: '34%' }} /> */}
                                </div>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>

                {
                    /***************************************************************************************/
                    /***************************************************************************************/
                    /********************** Customer Review SECTION ************************************************/
                    /***************************************************************************************/
                    /***************************************************************************************/
                }
                <hr className="mt-50" style={{ borderTop: '1px dashed rgba(0,0,0,0.1)' }} />
                <div className="container mt-50">
                    <div className="row">
                        <div className="col-md-9 d-none d-md-block align-items-center">
                            <OwlCarousel className='owl-theme' autoPlay loop={true} margin={16} nav={false} items={3}>
                                {
                                    customer_review.map((review) => {
                                        return <div className='shadow-sm d-flex flex-column align-items-center justify-content-center customer-review'>
                                            <Icon icon="quote-left" size="2x" style={{ color: 'black' }} />
                                            <div className="mt-10 mb-10" style={commentStyle}>{review['comment']}</div>
                                            <hr className="w-50 mt-10 mb-20" style={{ borderTop: '1px dashed rgba(255,255,255,0.2)' }} />
                                            <Avatar alt="Remy Sharp" className="shadow-sm" src={review['img']} style={{ height: '80px', width: '80px' }} />
                                            <h5 className="text-white mt-10 mb-10">{review['customer-name']}</h5>
                                            <div className="d-flex justify-content-center align-item-center">
                                                <Rating name="read-only" value={review.star} readOnly />
                                            </div>
                                        </div>
                                    })
                                }
                            </OwlCarousel>
                        </div>
                        {
                            /************************************ MOBILE REVIEW UI DESIGN *********************************/
                        }
                        <div className="col-md-9 d-sm-block d-md-none align-items-center">
                            <OwlCarousel className='owl-theme' autoPlay loop={true} margin={16} nav={false} items={1}>
                                {
                                    customer_review.map((review) => {
                                        return <div className='shadow-sm d-flex flex-column align-items-center justify-content-center customer-review'>
                                            <Icon icon="quote-left" size="2x" style={{ color: 'black' }} />
                                            <div className="mt-10 mb-10" style={commentStyle}>{review['comment']}</div>
                                            <hr className="w-50 mt-10 mb-20" style={{ borderTop: '1px dashed rgba(255,255,255,0.2)' }} />
                                            <Avatar alt="Remy Sharp" className="shadow-sm" src={review['img']} style={{ height: '80px', width: '80px' }} />
                                            <h5 className="text-white mt-10 mb-10">{review['customer-name']}</h5>
                                            <div className="d-flex justify-content-center align-item-center">
                                                <Rating name="read-only" value={review.star} readOnly />
                                            </div>
                                        </div>
                                    })
                                }
                            </OwlCarousel>
                        </div>
                        <div className="col-md-3">
                            <h3 style={{ color: '#30252F' }}>Our Reputed Customer</h3>
                            <hr className="mt-0" style={{ borderTop: '2px solid rgba(0,0,0,0.6)', width: '90px' }} />
                            <p className="mt-20" style={{ color: 'rgba(0,0,0,0.4)', fontWeight: '600' }}>At Serve, We believe that our success depends on the benefit of our customer</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-30 mb-40" style={{ borderTop: '1px dashed rgba(0,0,0,0.1)' }} />
            </div>
            <Footer />
        </React.Fragment >
    )
}

export default Aboutus
