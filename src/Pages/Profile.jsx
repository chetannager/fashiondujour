import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Avatar, Fab } from '@material-ui/core';
import { Nav, Icon, Row, Col, Button, Drawer, Dropdown, InputGroup, Input } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import { Redirect,useHistory } from 'react-router';
import { connect } from 'react-redux';
import * as customerActions from "../actions/dCustomer"


const Profile = (props) => {
    const history= useHistory();

    React.useEffect(() => {
        props.checkIsLoggedIn();
        if(!props.isLoggedIn){
            history.push("/");
        }
    }, [])


    return (
        <React.Fragment>
            <Header show={props.show} login={props.login} />
            <div className="container d-none d-md-block mt-80 mb-40 profile">
                <div className="container ml-10">
                    <div className="row align-items-center shadow-sm pt-10 pb-10" style={{ borderRadius: '5px' }}>
                        <div className="col-md-2">
                            <Avatar alt="Siddharth Kumar" src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" style={{ height: '90px', width: '90px' }} />
                        </div>
                        <div className="col-md-7">
                            <h3 style={{ color: '#30252F', fontWeight: '600' }}><i style={{ fontWeight: 'lighter' }}>hi, </i>{props.customerDetails.customer_full_name}</h3>
                            <i style={{ color: 'rgba(0,0,0,0.8)', fontSize: '12px' }}>If you want to update your profile picture. Click on <span style={{ fontSize: '14px', fontWeight: '600', color: '#30252F' }}> Upload</span> button</i>
                        </div>
                        <div className="col-md-3" hidden>
                            <Button appearance="ghost" className="w-100" style={{ color: '#30252F', border: '1px solid #30252F' }}><Icon icon="upload2" style={{ color: '#30252F' }} /> Upload</Button>
                        </div>
                    </div>
                </div>
                <div className="container shadow-sm ml-10 mt-10 pt-10 pb-20 pl-15 pr-15 profile">
                    <h3 style={{ color: '#30252F', fontWeight: '500' }}>User Information</h3>
                    <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.4)', fontWeight: '500' }}>Customer Satisfaction is our frist priority which is only be possible by giving a right information about yourself. So, that we can contact you to your door steps for any issue. If you want to update your Profile Details please click on the "
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#30252F' }}>Update button</span>" below.</p>
                    <form action="" method="POST" noValidate autoComplete="off" className="mt-30">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-column w-100">
                                <label htmlFor="firstname">Full Name*</label>
                                <InputGroup>
                                    <Input value={props.customerDetails.customer_full_name} />
                                    <InputGroup.Addon>
                                        <Icon icon="edit2" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-20">
                            <label htmlFor="email">Email Address*</label>
                            <InputGroup>
                                <Input value={props.customerDetails.customer_email_address} />
                                <InputGroup.Addon>
                                    <Icon icon="edit2" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </div>
                        <div className="mt-20 row">
                            <div className="col-6 d-flex flex-column">
                                <label htmlFor="phone">Phone*</label>
                                <InputGroup>
                                    <Input value={"+91"+props.customerDetails.customer_mobile_number} />
                                    <InputGroup.Addon>
                                        <Icon icon="edit2" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </div>
                            <div className="col-6 d-flex flex-column">
                                <label htmlFor="phone">Password*</label>
                                <InputGroup>
                                    <Input value="******" />
                                    <InputGroup.Addon>
                                        <Icon icon="edit2" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-20">
                            <label htmlFor="email">Saved Address*</label>
                            <InputGroup>
                                <Input value="M II/112 Sector-C, Aliganj, Yojana Jankipuram, Sitapur Road, Lucknow, Uttar Pradesh, 226021 " />
                                <InputGroup.Addon>
                                    <Icon icon="edit2" />
                                </InputGroup.Addon>
                            </InputGroup>
                        </div>
                    </form>
                </div>
            </div>
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

export default connect(mapStateToProps, mapActionToProps)(Profile)
