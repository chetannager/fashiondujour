import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Button } from 'rsuite'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as customerActions from "../actions/dCustomer"
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';


const dealOfTheDay = [
    'imgs/offers/offerpics1.webp',
    'imgs/offers/offerpics2.jpg',
    'imgs/offers/offerpics3.webp',
    'imgs/offers/offerpics8.webp',
    'imgs/offers/offerpics9.webp',
    'imgs/offers/offerpics3.webp',
];

const categoryDeal = [
    "imgs/circular/circle1.webp",
    "imgs/circular/circle2.webp",
    "imgs/circular/circle3.webp",
    "imgs/circular/circle4.webp",
    "imgs/circular/circle5.webp",
    "imgs/circular/circle6.webp",
    "imgs/circular/circle7.webp",
    "imgs/circular/circle8.webp",
    "imgs/circular/circle9.webp",
    "imgs/circular/circle10.webp",
];

const Offer = (props) => {

    const [isLoading, setLoading] = React.useState(false);
    const [offers, setOffers] = React.useState([]);

    const getAllOffers = () => {
        setLoading(true);
        axios.get('http://fashiondujourapi.com/v1/offers')
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.message == "Successful") {
                        setOffers(response.data.RESPONSE);
                        setLoading(false);
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
            getAllOffers();
        }
    }, [])

    return (
        <React.Fragment>
            <Header show={props.show} login={props.login} />
            {
                isLoading ? (
                    <div className="mt-100 pt-100 pb-100 mb-100 container-fluid d-flex align-items-center justify-content-center">
                        <CircularProgress color={'secondary'} />
                    </div>
                ) : (
                    <React.Fragment>
                        {
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                            /********************************** WEB UI OFFERS DESIGN *****************************************/
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                        }
                        {
                            props.isLoggedIn ? <div className="d-none d-sm-none d-md-block mt-80">
                                {
                                    offers.map((offer) => {
                                        return (
                                            <React.Fragment>
                                                <div className="container mt-30 day-deal">
                                                    <p style={{ fontSize: '35px', fontWeight: '600', fontFamily: 'dancing script' }}>------ {offer["offer_name"]} ----------</p>
                                                    <div className="row mt-20 mb-30">
                                                        {
                                                            offer["offer_image"].map((url) => {
                                                                return (<div className="col-md-4 col-sm-4 col-lg-3">
                                                                    <div className="card" style={{ backgroundImage: 'url("' + url["offer_image_url"] + '")', backgroundSize: '100% 100%' }}></div>
                                                                </div>);
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })
                                }

                            </div> : <div className="container d-none d-md-flex flex-column align-items-center mt-90 mb-40">
                                <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                                <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to see the offer for you</p>
                                <img src="imgs/icon/offer.svg" height="300px" width="200px" alt="login" />
                                <Button onClick={props.login} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOG IN</Button>
                            </div>
                        }
                        {
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                            /********************************** MOBILE UI OFFERS DESIGN *****************************************/
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                        }
                        {
                            props.isLoggedIn ? <div className="d-md-none d-sm-block mt-60">
                                <div className="container mt-30 day-deal">
                                    <p style={{ fontSize: '28px', fontWeight: '600', fontFamily: 'dancing script' }}>--- Deal of the Day -------</p>
                                    <div className="row mt-20 mb-30">
                                        {
                                            dealOfTheDay.map((url) => {
                                                return (<div className="col-6">
                                                    <div className="mb-20" style={{ backgroundImage: 'url("' + url + '")', backgroundSize: '100% 100%', height: '200px', borderRadius: '10px', cursor: 'pointer' }}></div>
                                                </div>);
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="container mt-30 category-deal">
                                    <p style={{ fontSize: '28px', fontWeight: '600', fontFamily: 'dancing script' }}>--- Category to bag -------</p>
                                    <div className="row mt-20 mb-30">
                                        {
                                            categoryDeal.map((url) => {
                                                return (<div className="col-6 ">
                                                    <div className="card" style={{ backgroundImage: 'url("' + url + '")', backgroundSize: '100% 100%', height: '180px', borderRadius: '10px', cursor: 'pointer' }}></div>
                                                </div>);
                                            })
                                        }

                                    </div>
                                </div>
                            </div> : <div className="container d-md-none d-sm-block mt-90 mb-40">
                                <div className="d-flex flex-column align-items-center justify-content-center">
                                    <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                                    <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to see the offer for you</p>
                                    <img src="imgs/icon/offer.svg" height="300px" width="200px" alt="login" />
                                </div>
                            </div>
                        }
                    </React.Fragment>
                )
            }
            <Footer />
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.dCustomer.isLoggedIn,
        customerDetails: state.dCustomer.customerDetails
    }
}

const mapActionToProps = {
    checkIsLoggedIn: customerActions.checkIsLoggedIn,
    setLoggedIn: customerActions.setLoggedIn,
    setCustomerDetails: customerActions.setCustomerDetails
}

export default connect(mapStateToProps, mapActionToProps)(Offer)
