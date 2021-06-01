import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import { Drawer, Button, IconButton, Icon, Alert } from 'rsuite';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import 'rsuite/lib/styles/index.less';
import 'rsuite/dist/styles/rsuite-default.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as customerActions from "./actions/dCustomer"

/******************************* PAGE COMPONENT IMPORTING ***************************************/

import Aboutus from './Pages/Aboutus';
import Home from './Pages/Home';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Wishlist from './Pages/Wishlist';
import Contactus from './Pages/Contactus';
import Checkout from './Pages/Checkout';
import Confirm from './Pages/Confirm';
import Detail from './Pages/Detail';
import TrackDetail from './Pages/TrackDetail';
import Track from './Pages/Track';
import Offer from './Pages/Offer';
import Product from './Pages/Product';
import Order from './Pages/Order';
import TextField from '@material-ui/core/TextField';
import Address from './Pages/Address';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';

/************************ CUSTOM CSS VARIABLE DECLARATION ********************************************/
const nameStyle = {
  color: '#30252F',
  fontWeight: '700',
  letterSpacing: '0.3px',
  fontSize: '15px',
  overflow: 'ellipsis',
};

const clothTypeName = {
  color: 'grey',
  fontWeight: '400',
  fontSize: '15px',
  letterSpacing: '0.5px',
  overflow: 'ellipsis',
};

const pricingStyle = {
  color: '#30252F',
  fontWeight: '700',
  fontSize: '18px',
};

const userData = [
  {
    'name': 'Siddharth Kumar',
    'phone': '9076652887',
    'email': 'sidplayer4@gmail.com',
    'password': '123456',
  },
  {
    'name': 'Mohammed Ismail Thouheed VF',
    'phone': '9076652887',
    'email': 'ismail@gmail.com',
    'password': '12345',
  },
  {
    'name': 'Muhamed Affan ',
    'phone': '9076652887',
    'email': 'affan@gmail.com',
    'password': '1234',
  },
];


const App = (props) => {
  {
    /***********************************************************************************************/
    /************************** LOGIN/SIGNUP RODAL SWIPPING FUNCTIONALITY **************************/
    /***********************************************************************************************/
  }
  const [loginP, setPage] = React.useState(true);
  function changePage() {
    setPage(!loginP);
  }
  {
    /***********************************************************************************************/
    /******************************** LOGIN FUNCTIONALITY ************************************/
    /***********************************************************************************************/
  }
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [mobile, setMobile] = React.useState("");


  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("customer_id");
    localStorage.removeItem("customer_email_address");
    localStorage.removeItem("customer_mobile_number");
    props.checkIsLoggedIn();
  }

  function checkUser(e) {
    e.preventDefault();
    console.log(username + ":" + password)
    axios.post('http://fashiondujourapi.com/v1/login', {
      email: username,
      password,
    })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.success && response.data.isLoggedIn) {
            setUsername("");
            setPassword("");
            hide();
            props.setLoggedIn(true);
            props.setCustomerDetails({
              "customer_id": response.data.customer_data.customer_id,
              "customer_full_name": response.data.customer_data.customer_full_name,
              "customer_email_address": response.data.customer_data.customer_email_address,
              "customer_mobile_number": response.data.customer_data.customer_mobile_number

            });
            Alert.success('Successfully Login', 3000);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("customer_id", response.data.customer_data.customer_id);
            localStorage.setItem("customer_full_name", response.data.customer_data.customer_full_name);
            localStorage.setItem("customer_email_address", response.data.customer_data.customer_email_address);
            localStorage.setItem("customer_mobile_number", response.data.customer_data.customer_mobile_number);
          } else
            Alert.error(response.data.message, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function registerUser(e) {
    e.preventDefault();
    console.log(username + ":" + password)
    axios.post('http://fashiondujourapi.com/v1/register', {
      name: fullName,
      mobile,
      email: username,
      password,
    })
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.success && response.data.isRegistered) {
            setUsername("");
            setPassword("");
            setFullName("");
            setPassword("");
            hide();
            Alert.success(response.data.message, 3000);
          } else
            Alert.error(response.data.message, 3000);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  {
    /***********************************************************************************************/
    /******************************** CART DRAWER FUNCTIONALITY ************************************/
    /***********************************************************************************************/
  }
  const [showD, setShow] = React.useState(false);
  function close() {
    setShow(false);
  }
  function toggleDrawer() {
    setShow(true);
  }

  {
    /***********************************************************************************************/
    /******************************** RODAL LOGIN OPEN/CLOSE FUNCTIONALITY ************************************/
    /***********************************************************************************************/
  }

  const [visible, setVisible] = React.useState(false);
  function showLogin() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  React.useEffect(() => {
    props.checkIsLoggedIn();
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/cart" exact render={(props) => <Cart show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/about" exact render={(props) => <Aboutus show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/privacy-policy" exact render={(props) => <Privacy show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/term-and-condition" exact render={(props) => <Terms show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/wishlist" exact render={(props) => <Wishlist show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn}  setLogout={logout} />} />
          <Route path="/contact-us" exact render={(props) => <Contactus show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/product/detail/:productId" exact render={(props) => <Detail show={toggleDrawer} login={showLogin} />} isLoggedIn={props.isLoggedIn} setLogout={logout} />
          <Route path="/offer" exact render={(props) => <Offer show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/checkout" exact render={(props) => <Checkout show={toggleDrawer} login={showLogin} />} isLoggedIn={props.isLoggedIn} setLogout={logout} />
          <Route path="/products/:categoryId" render={(props) => <Product show={toggleDrawer} login={showLogin} />} isLoggedIn={props.isLoggedIn} setLogout={logout} />
          <Route path="/track" exact render={(props) => <Track show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/track-detail" exact render={(props) => <TrackDetail show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn} setLogout={logout} />} />
          <Route path="/order" exact render={(props) => <Order show={toggleDrawer} login={showLogin} isLoggedIn={props.isLoggedIn}  setLogout={logout} />} />
          <Route path="/address" exact render={(props) => <Address show={toggleDrawer} login={showLogin} />}  />
          <Route path="/profile" exact render={(props) => <Profile show={toggleDrawer} login={showLogin} />} />
          <Route path="/confirm" exact render={(props) => <Confirm />} />
        </Switch>

        {
          /********************************************************************************/
          /********************************************************************************/
          /******************** CART DRAWER UI ********************************************/
          /********************************************************************************/
          /********************************************************************************/
        }

        <Drawer show={showD} onHide={close} size="sm">
          <Drawer.Header>
            <Drawer.Title>
              <p style={pricingStyle}>Your Cart</p>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            {
              props.isLoggedIn ? <div>
                {
                  ['', ''].map((data) => {
                    return <div className="container mb-10">
                      <div className="row" style={{ backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                        <div className="col-md-3">
                          <img src="imgs/Womens/DressBerry/Dresses/Women Black & Off-White Tropical Printed A-Line Dress/img1.jpg" height="120px" width="100px" style={{ borderRadius: '10px' }} alt="product" />
                        </div>
                        <div className="col-md-6">
                          <p style={nameStyle}>Men Blue Regular Fit Self Design Casual Shirt</p>
                          <p style={clothTypeName}>Casual Shirt</p>
                          <p style={pricingStyle}><span>2</span>&nbsp; * &nbsp; $2000</p>
                        </div>
                        <div className="d-flex col-md-3 align-items-center">
                          <IconButton icon={<Icon icon="minus" />} />
                          <p style={{ marginLeft: '10px', marginRight: '10px' }}>1</p>
                          <IconButton icon={<Icon icon="plus" />} />
                        </div>
                      </div>
                    </div>
                  })
                }
                <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                <div className="">
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={pricingStyle}>Gift Wrapping</p>
                    <p style={pricingStyle}>$0</p>
                  </div>
                  <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={pricingStyle}>Tax</p>
                    <p style={pricingStyle}>$100</p>
                  </div>
                  <hr style={{ borderTop: '1px dashed rgba(0,0,0,0.4)' }} />
                  <div className="d-flex justify-content-between align-items-center">
                    <p style={pricingStyle}>Grand Total (Including Tax)</p>
                    <p style={pricingStyle}>$1524</p>
                  </div>
                </div>
              </div> : <div className="d-flex flex-column align-items-center">
                <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to see your Cart items</p>
                <img src="imgs/icon/emptyc.svg" height="300px" width="200px" alt="login" />
                <Button onClick={() => { showLogin(); close(); }} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOG IN</Button>
              </div>
            }
          </Drawer.Body>
          <Drawer.Footer >
            <Link to="/checkout" onClick={close}>
              {
                props.isLoggedIn ? <Button style={{ backgroundColor: '#30252F', color: "white", letterSpacing: '0.5px', fontWeight: '600' }}>Go to Checkout</Button> : null
              }
            </Link>
            <Button onClick={close} appearance="subtle">Close</Button>
          </Drawer.Footer>
        </Drawer>
        {
          /********************************************************************************/
          /********************************************************************************/
          /******************** LOGIN RODAL UI ********************************************/
          /********************************************************************************/
          /********************************************************************************/
        }
        <Rodal visible={visible} onClose={hide.bind(this)} width="800" height="474" showMask="true" closeOnEsc="true">
          <div className="container-fluid row rodal-div">
            <div className="col-md-7">
              {
                loginP ? (<img src="imgs/icon/log.svg" alt="login svg" height="400px" width="400px" />) :
                  (<img src="imgs/icon/sign.svg" alt="login svg" height="400px" width="400px" />)
              }
            </div>
            {
              loginP ? (
                /*********************************************************************************************/
                /**************************************** LOGIN PAGE *****************************************/
                /*********************************************************************************************/

                <div className="col-md-5 mt-20">
                  <h4 style={{ fontFamily: 'Raleway', color: '#011627', fontWeight: '600', fontSize: '34px' }}>Get Started</h4>
                  <hr style={{ width: '70px', marginBottom: '10px', marginTop: '5px', borderTop: '2px solid rgba(0,0,0,0.6)' }} />
                  <p className="mb-20" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '14.0px', fontWeight: '500' }}>Please, Enter Valid <span className="text-dark font-weight-bold">Email &amp; Password</span> for the login.</p>
                  <form onSubmit={(e) => { checkUser(e); }}>
                    <TextField onChange={(event) => { setUsername(event.target.value); }} value={username} id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                    <TextField type="password" onChange={(event) => { setPassword(event.target.value); }} value={password} id="outlined-basic" label="Password" variant="outlined" style={{ width: '100%' }} />
                    <input type="submit" value="continue" />
                  </form>
                  <p className="mt-10 text-center" style={{ fontSize: '13px', fontWeight: 'bold' }}>Don't have an account ? <Button onClick={() => { changePage() }} className="m-0 p-0" appearance="link" style={{ color: 'green', fontWeight: 'bold', fontSize: '13px' }}>Sign Up</Button></p>
                  <p className="mb-20 mt-30" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '13px', fontWeight: '500' }}>For better use of our service on your smart phone, <span className="text-dark text-uppercase font-weight-bold" style={{ fontSize: '13px' }}>download App</span> from</p>
                  <div className="container row mt-10 ml-0 p-0">
                    <img className="mr-2" src="imgs/icon/appstore.png" height="45px" width="130px" alt="" />
                    <img src="imgs/icon/googleplay.png" height="45px" width="130px" alt="" />
                  </div>
                </div>) : (
                /*********************************************************************************************/
                /**************************************** SIGNUP PAGE *****************************************/
                /*********************************************************************************************/

                <div className="col-md-5 mt-20">
                  <h5 style={{ fontFamily: 'Raleway', color: '#011627', fontWeight: '600', fontSize: '34px' }}>Sign Up</h5>
                  <hr style={{ width: '70px', marginBottom: '10px', marginTop: '10px', borderTop: '2px solid rgba(0,0,0,0.6)' }} />
                  <p className="mb-10" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '14.0px', fontWeight: '500' }}>Please, Fill the <span className="text-dark font-weight-bold">Boxes</span> below.</p>
                  <form onSubmit={(e) => { registerUser(e); }}>
                    <TextField onChange={(event) => { setFullName(event.target.value); }} value={fullName} id="outlined-basic" label="Full Name" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                    <TextField onChange={(event) => { setMobile(event.target.value); }} value={mobile} id="outlined-basic" label="Phone" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                    <TextField onChange={(event) => { setUsername(event.target.value); }} value={username} id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                    <TextField onChange={(event) => { setPassword(event.target.value); }} value={password} id="outlined-basic" label="Password" type="password" variant="outlined" style={{ width: '100%' }} />
                    <input type="submit" value="continue" />
                  </form>
                  <p className="mt-10 text-center" style={{ fontSize: '13px', fontWeight: 'bold' }}>Already have an account ? <Button onClick={() => { changePage() }} className="m-0 p-0" appearance="link" style={{ color: 'green', fontWeight: 'bold', fontSize: '13px' }}>Login</Button></p>
                  {/* <p className="mb-10 mt-10" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '13px', fontWeight: '500' }}>For better use <span className="text-dark text-uppercase font-weight-bold" style={{ fontSize: '13px' }}>download App</span> from</p> */}
                  <div className="container d-flex justify-content-center mt-20 ml-0 p-0">
                    <img className="mr-2" src="imgs/icon/appstore.png" height="40px" width="110px" alt="" />
                    <img src="imgs/icon/googleplay.png" height="40px" width="110px" alt="" />
                  </div>
                </div>
              )
            }
          </div>
        </Rodal>
      </Router>
    </>
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

export default connect(mapStateToProps, mapActionToProps)(App)
