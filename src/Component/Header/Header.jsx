import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import TextField from '@material-ui/core/TextField';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { connect } from 'react-redux';
import * as customerActions from "./../../actions/dCustomer"

const style = {
    color: '#30252F',
    paddingBottom: '5px',
    borderBottom: '2px solid #30252F',
}


const Header = (props) => {
    {
        /***********************************************************************************/
        /***********************************************************************************/
        /*************************** MENU BAR OPENING RELATED ******************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    {
        /***********************************************************************************/
        /***********************************************************************************/
        /************* MOBILE UI DRAWER Related Items**************************/
        /***********************************************************************************/
        /***********************************************************************************/
    }
    const [showMDrawer, setMDrawer] = React.useState(false);
    function closeMDrawer() {
        setMDrawer(false);
    }
    function openMDrawer() {
        setMDrawer(true);
    }
    {
        /***********************************************************************************************/
        /********************* MOBILE UI LOGIN/DRAWER OPEN/CLOSE FUNCTIONALITY *************************/
        /***********************************************************************************************/
    }
    const [showLoginDrawer, setLoginDrawer] = React.useState(false);
    function closeLoginDrawer() {
        setLoginDrawer(false);
    }
    function openLoginDrawer() {
        setLoginDrawer(true);
    }
    {
        /***********************************************************************************************/
        /************************** LOGIN/SIGNUP DRAWER SWIPPING FUNCTIONALITY *************************/
        /***********************************************************************************************/
    }
    const [loginMobileM, setPage] = React.useState(true);
    function changePage() {
        setPage(!loginMobileM);
    }
    {
        /***********************************************************************************************/
        /******************************** MOBILE UI LOGIN FUNCTIONALITY ********************************/
        /***********************************************************************************************/
    }
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    function checkUser(event) {
        event.preventDefault();
        if (username == "" || username == null) {
            Alert.error('Username is Empty', 5000);
        } else if (password == "" || password == null) {
            Alert.error('Password is Empty', 5000);
        } else if (username == "sidplayer4@gmail.com" || password == "123456") {
            // localStorage.setItem("token", true);
            closeLoginDrawer();
            Alert.success('Successfully Login', 5000);
            props.setLogin();
        } else {
            Alert.error('Authentication Failed! Please Check Username And Password', 5000);
        }
    }

    return (
        <React.Fragment>
            <div className="container-fluid pt-10 pb-10 d-none d-md-block header-1">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-md-5 company"><Link to="/">FASHION-du-JOUR</Link></div>
                        <div className="col-md-7">
                            <ul className="m-0 p-0">
                                <li>
                                    <NavLink to="/products/360" exact activeStyle={style}>MEN</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products/361" exact activeStyle={style}>WOMEN</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products/362" exact activeStyle={style}>KIDS</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/offer" exact activeStyle={style}>OFFERS</NavLink>
                                </li>
                                <li>
                                    <IconButton className={props.isLoggedIn ? "p-0" : "m-0"} aria-label="profile" onClick={handleClick}>
                                        {props.isLoggedIn ? (<Avatar alt="Remy Sharp" sizes="sm" src="https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png" />)
                                            : (<PersonOutlinedIcon style={{ fontSize: '23px', color: '#30252F' }} />)
                                        }
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton aria-label="cart" onClick={props.show}>
                                        <Badge badgeContent={props.isLoggedIn ? 2 : 0} color="error">
                                            <ShoppingCartIcon style={{ fontSize: '20px', color: '#30252F' }} />
                                        </Badge>
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton style={{ border: 'none', outline: 'none', textDecoration: 'none' }} component={Link} to="/wishlist" aria-label="favourite">
                                        <Badge badgeContent={props.isLoggedIn ? 4 : 0} color="error">
                                            <FavoriteBorderOutlinedIcon style={{ fontSize: '20px', color: '#30252F' }} />
                                        </Badge>
                                    </IconButton>
                                </li>
                                <li>
                                    <IconButton aria-label="search">
                                        <SearchIcon style={{ fontSize: '23px', color: '#30252F' }} />
                                    </IconButton>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {
                /********************************************************************************************/
                /********************************************************************************************/
                /********************************* HEADER UI FOR MOBILE *************************************/
                /********************************************************************************************/
                /********************************************************************************************/
            }

            <div className="container-fluid d-md-none d-sm-block header-2">
                <div className="row align-items-center">
                    <div className="col-xs-6 d-flex align-items-center">
                        <IconButton aria-label="profile" onClick={openMDrawer}>
                            <MenuIcon style={{ fontSize: '23px', color: '#30252F' }} />
                        </IconButton>
                        <div className="" style={{ fontSize: '14px' }}>FASHION-du-JOUR</div>
                    </div>
                    <div className="col-xs-6 d-flex flex-fill align-items-end justify-content-end">
                        <ul className="m-0 p-0">
                            <li>
                                <IconButton component={NavLink} to="/cart" aria-label="cart">
                                    <Badge badgeContent={props.isLoggedIn ? 4 : 0} color="error">
                                        <ShoppingCartIcon style={{ fontSize: '18px', color: '#30252F' }} />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton aria-label="favourite" component={NavLink} to="/wishlist">
                                    <Badge badgeContent={props.isLoggedIn ? 1 : 0} color="error">
                                        <FavoriteBorderOutlinedIcon style={{ fontSize: '18px', color: '#30252F' }} />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton aria-label="search">
                                    <SearchIcon style={{ fontSize: '20px', color: '#30252F' }} />
                                </IconButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                /********************************************************************************************/
                /********************************************************************************************/
                /********************************* MENU UI FOR WEB *************************************/
                /********************************************************************************************/
                /********************************************************************************************/
            }
            <Menu className="" id="fade-menu" style={{ marginTop: '30px !important' }} anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                {
                    props.isLoggedIn ? <MenuItem component={Link} to="/profile">
                        <div className="pr-30">
                            <p style={{ fontSize: '13px', color: 'black', fontWeight: '800' }}>WELCOME! &nbsp; <span style={{ fontSize: '13px', fontWeight: '600' }}>{props.customerDetails.customer_full_name}</span></p>
                            <p className="mt-0" style={{ fontSize: '15px', fontWeight: '500' }}>{props.customerDetails.customer_mobile_number}</p>
                            <hr className="mt-10 mb-10" />
                        </div>
                    </MenuItem> :
                        <MenuItem onClick={() => { props.login(); handleClose(); }}>
                            <div className="">
                                <p style={{ fontSize: '12px', fontWeight: '800' }}>WELCOME</p>
                                <p className="mt-0" style={{ fontSize: '13px', fontWeight: '500' }}>To access account and manage order</p>
                                <Button className="mt-10" style={{ backgroundColor: '#30252F' }} appearance="primary">Login / Signup</Button>
                                <hr className="mt-10 mb-10" />
                            </div>
                        </MenuItem>
                }
                <MenuItem onClick={handleClose} component={NavLink} to="/order"><Icon icon="history" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Orders</p></MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} to="/wishlist"><Icon icon="heart-o" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Wishlist</p></MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} to="/offer"><Icon icon="twinkle-star" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Offers</p></MenuItem>
                <MenuItem onClick={handleClose} component={NavLink} to="/address"><Icon icon="map-marker" style={{ color: '#30252F' }} />&nbsp;&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Saved Address</p></MenuItem>
                {
                    props.isLoggedIn ? <MenuItem onClick={() => { props.setLoggedIn(false); handleClose(); }}><Icon icon="power-off" style={{ color: 'red' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Logout</p></MenuItem> : null
                }
            </Menu>

            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************************ DRAWER HEADER MOBILE UI ******************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Drawer placement="left" style={{ width: '80%' }} show={showMDrawer} onHide={closeMDrawer}>
                <Drawer.Header>
                    <Drawer.Title className="mb-0">
                        <div className="mb-0">
                            {
                                props.isLoggedIn ? <div component={Link} to="/profile">
                                    <div className="pr-30">
                                        <div className="d-flex">
                                            <Avatar alt="Remy Sharp" style={{ height: '60px', width: '60px' }} src="imgs/team/sid.jpg" />
                                            <div className="ml-10">
                                                <p style={{ fontSize: '13px', color: 'black', fontWeight: '800' }}>WELCOME!</p>
                                                <hr className="mt-0 mb-10" style={{ width: '23px', border: '1px solid black' }} />
                                                <p style={{ fontSize: '13px', fontWeight: '600' }}>Siddharth kumar</p>
                                                <p className="mt-0" style={{ fontSize: '14px', fontWeight: '500' }}>9076652887</p>
                                            </div>
                                        </div>
                                        <hr className="mt-10" />
                                    </div>
                                </div> :
                                    <div>
                                        <div className="mt-0">
                                            <p style={{ fontSize: '12px', fontWeight: '800' }}>WELCOME</p>
                                            <p className="mt-0" style={{ fontSize: '13px', fontWeight: '500' }}>To access account and manage order</p>
                                            <Button onClick={() => { openLoginDrawer(); closeMDrawer(); }} className="mt-10" style={{ backgroundColor: '#30252F' }} appearance="primary">Login / Signup</Button>
                                            <hr className="mt-10" />
                                        </div>
                                    </div>
                            }
                        </div>
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="mt-0">
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/"><Icon icon="home" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Home</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/products/360"><Icon icon="mars" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Mens</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/products/361"><Icon icon="venus" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Womens</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/products/362"><Icon icon="odnoklassniki" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Kids</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/order"><Icon icon="history" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Orders</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/offer"><Icon icon="twinkle-star" style={{ color: 'black' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Offers</p></MenuItem>
                        <MenuItem onClick={closeLoginDrawer} component={NavLink} to="/address"><Icon icon="map-marker" style={{ color: '#30252F' }} />&nbsp;&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Saved Address</p></MenuItem>
                        {
                            props.isLoggedIn ? <MenuItem onClick={() => { props.setLogout(); closeMDrawer(); }}><Icon icon="power-off" style={{ color: 'red' }} />&nbsp;&nbsp; <p style={{ color: '#30252F', fontWeight: '600', fontSize: '15px' }}>Logout</p></MenuItem> : null
                        }
                    </div>
                </Drawer.Body>
            </Drawer>
            {
                /*******************************************************************************************/
                /*******************************************************************************************/
                /************************************LOGIN DRAWER HEADER MOBILE UI *************************/
                /*******************************************************************************************/
                /*******************************************************************************************/
            }
            <Drawer placement="right" style={{ width: '90%' }} show={showLoginDrawer} onHide={closeLoginDrawer}>
                <Drawer.Header>
                    <Drawer.Title className="mb-0">
                        {
                            loginMobileM ? (<div>
                                <h4 style={{ fontFamily: 'Raleway', color: '#011627', fontWeight: '600', fontSize: '28px' }}>Get Started</h4>
                                <hr style={{ width: '50px', marginBottom: '10px', marginTop: '2px', borderTop: '2px solid rgba(0,0,0,0.8)' }} />
                            </div>) : (
                                <div>
                                    <h5 style={{ fontFamily: 'Raleway', color: '#011627', fontWeight: '600', fontSize: '28px' }}>Sign Up</h5>
                                    <hr style={{ width: '50px', marginBottom: '10px', marginTop: '10px', borderTop: '2px solid rgba(0,0,0,0.6)' }} />
                                </div>
                            )
                        }
                    </Drawer.Title>
                </Drawer.Header>
                {/* <Drawer.Body>
                </Drawer.Body> */}
                <Drawer.Footer>
                    {
                        loginMobileM ? (<div>
                            <div className="rodal-div">
                                <p className="mb-10 mt-20" style={{ textAlign: 'start', fontFamily: 'Raleway', color: 'grey', fontSize: '13.0px', fontWeight: '500' }}>Please, Enter Valid <span className="text-dark font-weight-bold">Email &amp; Password</span> for the login.</p>
                                <div className="mt-30">
                                    <form action="">
                                        <TextField onChange={(event) => { setUsername(event.target.value); }} value={username} id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                                        <TextField type="password" onChange={(event) => { setPassword(event.target.value); }} value={password} id="outlined-basic" label="Password" variant="outlined" style={{ width: '100%' }} />
                                        <input type="submit" value="continue" onClick={(event) => { checkUser(event); }} />
                                    </form>
                                    <p className="mt-10 mb-90 text-center" style={{ fontSize: '13px', fontWeight: 'bold' }}>Don't have an account ? <Button onClick={() => { changePage() }} className="m-0 p-0" appearance="link" style={{ color: 'green', fontWeight: 'bold', fontSize: '13px' }}>Sign Up</Button></p>
                                </div>
                            </div>
                            <p className="mb-10 mt-30 text-center" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '13px', fontWeight: '500' }}>For better use of our service on your smart phone, <span className="text-dark text-uppercase font-weight-bold" style={{ fontSize: '13px' }}>download App</span> from</p>
                            <div className="row ml-40 p-0">
                                <img className="mr-2" src="imgs/icon/appstore.png" height="45px" width="100px" alt="" />
                                <img src="imgs/icon/googleplay.png" height="45px" width="100px" alt="" />
                            </div>
                        </div>) : (<div className="mt-20 rodal-div">
                            <p className="mb-10 mb-30" style={{ textAlign: 'start', fontFamily: 'Raleway', color: 'grey', fontSize: '13.0px', fontWeight: '500' }}>Please, Fill the <span className="text-dark font-weight-bold">Boxes</span> below.</p>
                            <form action="">
                                <TextField id="outlined-basic" label="Full Name" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                                <TextField id="outlined-basic" label="Phone" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', marginBottom: '10px' }} />
                                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" style={{ width: '100%' }} />
                                <input type="submit" value="continue" />
                            </form>
                            <p className="mt-10 mb-90 text-center" style={{ fontSize: '13px', fontWeight: 'bold' }}>Already have an account ? <Button onClick={() => { changePage() }} className="m-0 p-0" appearance="link" style={{ color: 'green', fontWeight: 'bold', fontSize: '13px' }}>Login</Button></p>
                            {/* <p className="mb-10 mt-10" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '13px', fontWeight: '500' }}>For better use <span className="text-dark text-uppercase font-weight-bold" style={{ fontSize: '13px' }}>download App</span> from</p> */}
                            <p className="mb-10 mt-30 text-center" style={{ fontFamily: 'Raleway', color: 'grey', fontSize: '13px', fontWeight: '500' }}>For better use of our service on your smart phone, <span className="text-dark text-uppercase font-weight-bold" style={{ fontSize: '13px' }}>download App</span> from</p>
                            <div className="container d-flex justify-content-center mt-20 ml-0 p-0">
                                <img className="mr-2" src="imgs/icon/appstore.png" height="40px" width="110px" alt="" />
                                <img src="imgs/icon/googleplay.png" height="40px" width="110px" alt="" />
                            </div>
                        </div>)
                    }
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
  
  export default connect(mapStateToProps, mapActionToProps)(Header)
