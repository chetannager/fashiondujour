import React from 'react'
import { Button, ButtonGroup, Icon, Drawer, Input, InputGroup, Alert } from 'rsuite'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as customerActions from "../actions/dCustomer"
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

const Address = (props) => {
    const [isLoading, setLoading] = React.useState(false);
    const [addresses, setAddresses] = React.useState([]);
    const [showAddAddress, setAddressDrawer] = React.useState(false);
    const [name, setName] = React.useState("");
    const [addAddress, setAddress] = React.useState("");
    const [mobile, setMobile] = React.useState("");



    /************************************* OPEN/CLOSE ADDRESS DRAWER **********************************/
    function open() {
        setAddressDrawer(true);
    }
    function close() {
        setAddressDrawer(false);
    }


    const getAllAddress = () => {
        setLoading(true);
        axios.post('http://fashiondujourapi.com/v1/addresses', {
            customer_id: props.customerDetails["customer_id"]
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.RESPONSE.successful) {
                        setAddresses(response.data.RESPONSE.address);
                        setLoading(false);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const deleteAddress = (address_id) => {
        axios.post('http://fashiondujourapi.com/v1/address-remove', {
            customer_id: props.customerDetails["customer_id"],
            customer_address_id: address_id
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.RESPONSE == "Deleted") {
                        getAllAddress();
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const addNewAddress = () => {
        axios.post('http://fashiondujourapi.com/v1/address-add', {
            customer_name: name,
            customer_address: addAddress,
            customer_mobile_number: mobile,
            customer_id: props.customerDetails["customer_id"]
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.successful) {
                        setName("");
                        setAddress("");
                        setMobile("");
                        close();
                        Alert.success('Successfully Added Address.');
                        getAllAddress();
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
                            /********************************** WEB UI ADDRESS DESIGN *****************************************/
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                        }
                        {
                            props.isLoggedIn ? (
                                <div className="container d-none d-md-block d-sm-none mt-70 mb-40">
                                    <div>
                                        <h2 className="d-none d-md-block" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: '500' }}>Delivery Address</h2>
                                        <h3 className="d-md-none d-sm-block" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: '500' }}>Delivery Address</h3>
                                        <p className="mb-10 d-none d-md-block" style={{ fontWeight: '500' }}>Please provide valid address so that we contact and deliver the product right to your door step</p>
                                        <p className="mb-10 d-md-none d-sm-block" style={{ fontWeight: '500', fontSize: '13px' }}>Please provide valid address so that we contact and deliver the product right to your door step</p>
                                        <hr className="mt-10" style={{ width: '180px', border: '1px solid rgba(0,0,0,0.5)' }} />
                                        <div className="row mt-30">
                                            {
                                                addresses.length != 0 ? (

                                                    addresses.map((address) => {
                                                        return (
                                                            <div className="col-md-4 mb-20">
                                                                <div className="mb-10" style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                                                                    <h5 style={{ fontWeight: '700', letterSpacing: '0.5px' }}>{address["customer_name"]}</h5>
                                                                    <hr className="mt-10 mb-10 w-25" style={{ borderTop: '2px solid rgba(0,0,0,0.4)' }} />
                                                                    <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600', }}>{address["customer_address"]}</p>
                                                                    <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '14px', fontWeight: '700', }}>Mobile No : {address["customer_mobile_number"]}</p>
                                                                    <ButtonGroup className="mt-10">
                                                                        <Button appearance="primary" style={{ backgroundColor: '#30252F' }} onClick={() => {
                                                                            deleteAddress(address["customer_address_id"]);
                                                                        }} ><Icon icon="trash-o" /></Button>
                                                                        <Button appearance="primary" style={{ backgroundColor: '#30252F' }}><Icon icon="edit" /></Button>
                                                                    </ButtonGroup>
                                                                </div>
                                                            </div>
                                                        )
                                                    })

                                                ) : (
                                                    <div>
                                                        <h1>No Address Available</h1>
                                                    </div>
                                                )
                                            }

                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <Fab onClick={() => { open(); }} style={{ position: 'relative', bottom: '0px', right: '0px', backgroundColor: '#30252F' }} aria-label="add">
                                                <AddIcon style={{ color: 'white' }} />
                                            </Fab>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="container d-none d-sm-none d-md-block mt-80 mb-40">
                                    <div className="d-flex flex-column align-items-center">
                                        <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                                        <p className="text-center" style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to view address in your Saved Address</p>
                                        <img src="imgs/icon/location.svg" height="300px" width="200px" alt="login" />
                                        <Button onClick={props.login} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOG IN</Button>
                                    </div>
                                </div>
                            )
                        }
                        {
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                            /********************************** Mobile UI ADDRESS DESIGN *****************************************/
                            /**************************************************************************************************/
                            /**************************************************************************************************/
                        }
                        {
                            props.isLoggedIn ? <div className="container d-md-none d-sm-block mt-70 mb-40">
                                <div>
                                    <h2 className="d-none d-md-block" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: '500' }}>Delivery Address</h2>
                                    <h3 className="d-md-none d-sm-block" style={{ color: 'rgba(0,0,0,0.8)', fontWeight: '500' }}>Delivery Address</h3>
                                    <p className="mb-10 d-none d-md-block" style={{ fontWeight: '500' }}>Please provide valid address so that we contact and deliver the product right to your door step</p>
                                    <p className="mb-10 d-md-none d-sm-block" style={{ fontWeight: '500', fontSize: '13px' }}>Please provide valid address so that we contact and deliver the product right to your door step</p>
                                    <hr className="mt-10" style={{ width: '180px', border: '1px solid rgba(0,0,0,0.5)' }} />
                                    <div>
                                        <div className="row mt-30">
                                            <div className="col-md-4 mb-20">
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
                                            <div className="col-md-4 mb-20">
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
                                        <div className="d-flex justify-content-end">
                                            <Fab style={{ position: 'sticky', top: '100px', right: '0px', backgroundColor: '#30252F' }} aria-label="add">
                                                <AddIcon style={{ color: 'white' }} />
                                            </Fab>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div className="container d-sm-block d-md-none mt-80 mb-40">
                                <div className="d-flex flex-column align-items-center">
                                    <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                                    <p className="text-center" style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to view address in your Saved Address</p>
                                    <img src="imgs/icon/location.svg" height="300px" width="200px" alt="login" />
                                </div>
                            </div>
                        }
                    </React.Fragment>
                )
            }
            <Footer />

            <Drawer show={showAddAddress} onHide={close}>
                <Drawer.Header>
                    <Drawer.Title>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="mt-20" style={{ color: '#2C3138', fontWeight: 'bold' }}>Add Address</p>
                        </div>
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="container pl-50 pr-50 pt-50 pb-30" style={{ backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: '10px' }}>
                        <img src="/imgs/icon/location.svg" alt="location svg" height="170px" width="450px" />
                        <InputGroup className="mb-10 mt-20" inside>
                            <Input placeholder="Name" value={name} onChange={(event) => { setName(event) }} />
                            <InputGroup.Addon>
                                <Icon icon="user" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <InputGroup className="mb-10 mt-20" inside>
                            <Input placeholder="House no., Street, Area, City, State" value={addAddress} onChange={(event) => { setAddress(event) }} />
                            <InputGroup.Addon>
                                <Icon icon="map-marker" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <InputGroup className="mb-10 mt-20" inside>
                            <Input placeholder="Mobile No. +91 XXXX " value={mobile} onChange={(event) => { setMobile(event) }} />
                            <InputGroup.Addon>
                                <Icon icon="phone" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <Button onClick={() => { addNewAddress(); }} className="w-100" appearance="primary" style={{ backgroundColor: '#2C3138', fontWeight: 'bold', letterSpacing: '0.6px' }}>ADD</Button>
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button onClick={close} appearance="subtle" style={{ backgroundColor: 'red', color: 'white', fontWeight: '500', fontSize: '12px', letterSpacing: '0.6px' }}>Cancel</Button>
                </Drawer.Footer>
            </Drawer>
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

export default connect(mapStateToProps, mapActionToProps)(Address)
