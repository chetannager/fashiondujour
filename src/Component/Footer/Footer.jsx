import React from 'react'
import { NavLink } from 'react-router-dom';

const iconStyle = {
    paddingTop: '8px',
    paddingLeft: '6px',
    height: '32px',
    width: '32px',
    borderRadius: '50%',
    backgroundColor: 'white',
    boxShadow: '3px 2px 8px 0px rgba(0,0,0,0.4),inset 1px 1px 3px 0px rgba(0,0,0,0.4)',
    marginRight: '10px',
}

const headingText = {
    color: '#FCCCB0',
    fontSize: '18px',
    marginBottom: '1px',
    fontWeight: '600',
}

const dividerStyle = {
    width: '30px',
    borderTop: '1px solid #FCCCB0',
    marginBottom: '18px',
}

const Footer = () => {
    return (
        <React.Fragment>
            {
                /****************************************************************************************************/
                /****************************************************************************************************/
                /*********************************WEB FOOTER Footer-1******************************************/
                /****************************************************************************************************/
                /****************************************************************************************************/
            }
            <div className="container-fluid d-block flex-fill pt-40 pb-40 position-relative b-0 l-0 r-0 footer-1">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col-md-3">
                            <p style={headingText}>FASHION-du-JOUR</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <p style={{ color: 'white', fontSize: '14px', letterSpacing: '0.6px', marginBottom: '10px' }}>It is a long established fact that a render will be distract by the readable content of a page when looking at its lay out.</p>
                            <span style={{ marginRight: '15px' }}>
                                <i class="fab fa-react" style={{ color: '#00cec9', fontSize: '26px' }}></i>
                            </span>
                            <span style={{ marginRight: '15px' }}>
                                <svg viewBox="0 0 120 138" version="1.1" xmlns="http://www.w3.org/2000/svg" width="9%" height="9%" preserveAspectRatio="xMidYMin slice"><title>React Suite</title><defs><linearGradient x1="71.5906675%" y1="12.5658792%" x2="45.577567%" y2="114.749969%" id="linearGradient-1"><stop stop-color="#6594ED" offset="0%"></stop><stop stop-color="#316BD9" offset="100%"></stop></linearGradient><linearGradient x1="67.6269531%" y1="0%" x2="50%" y2="78.0639648%" id="linearGradient-2"><stop stop-color="#EC5060" offset="0%"></stop><stop stop-color="#EA7480" offset="100%"></stop></linearGradient><linearGradient x1="67.6269531%" y1="0%" x2="50%" y2="79.2449951%" id="linearGradient-3"><stop stop-color="#EC5060" offset="0%"></stop><stop stop-color="#EA7480" offset="100%"></stop></linearGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-22" transform="translate(3.000000, 6.000000)"><polyline class="polyline-axis" stroke="url(#linearGradient-1)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" points="111 31 57 0 19 22 95 104 57 126 3 95"></polyline><polyline class="polyline-limb" id="Path-5-Copy-7" stroke="url(#linearGradient-2)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" transform="translate(22.000000, 63.000000) scale(-1, -1) translate(-22.000000, -63.000000) " points="41 31 3 54 41 95 41 52"></polyline><polyline class="polyline-limb" stroke="url(#linearGradient-3)" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" points="111 31 73 54 111 95 111 52"></polyline><circle class="circle" fill="#6594ED" cx="3" cy="95" r="3"></circle><circle fill="#6594ED" cx="111" cy="31" r="3"></circle></g></g></svg>
                            </span>
                            <span style={{ marginRight: '15px' }}>
                                <img src="https://material-ui.com/static/logo_raw.svg" alt="material logo" height="10%" width="10%" />
                            </span>
                            <span style={{ marginRight: '15px' }}>
                                <img src="https://www.gstatic.com/devrel-devsite/prod/vbd904f2719533e871e3800dda1bebc56aa0bc95c3c9d01c4d7cebcf129bdf26c/firebase/images/favicon.png" alt="firebase" height="10%" width="10%" />
                            </span>

                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Company</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/about">ABOUT US<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/contact-us">CONTACT US<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/term-and-condition" >TERMS &amp; CONDITIONS<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/privacy-policy">PRIVACY &amp; POLICY<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/Account">FAQ<hr /></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Online Shopping</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="">MEN<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="">WOMEN<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="">KIDS<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/offer">OFFERS<hr /></NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => { window.scrollTo(0, 0); }} to="/track">TRACK ORDER<hr />
                                    </NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <p style={headingText}>Contact Us</p>
                            <hr className="mt-10" style={dividerStyle} />
                            <ul>
                                <li>
                                    <i className="fas fa-mobile-alt" style={{ color: 'white' }}></i><span style={{ color: 'white', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '600' }}>&nbsp;&nbsp;+91 9076652887</span><br />
                                </li>
                                <li>
                                    <i className="fas fa-envelope" style={{ color: 'white' }}></i><span style={{ color: 'white', fontSize: '14px', fontFamily: 'Raleway', fontWeight: '500' }}>&nbsp;&nbsp;fashiondujour@company.in</span>
                                </li>
                                <li>
                                    <div className="container-fluid d-flex justify-content-start align-items-start mt-20 mb-25 social-icon">
                                        <i className="fab fa-facebook-f fa-lg text-dark" style={iconStyle}></i>
                                        <i className="fab fa-google fa-lg text-dark" style={iconStyle}></i>
                                        <i className="fab fa-twitter fa-lg text-dark" style={iconStyle}></i>
                                        <i className="fab fa-instagram fa-lg text-dark" style={iconStyle}></i>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-50 " style={{ color: '#FCCCB0', fontWeight: '500', fontFamily: 'Raleway', letterSpacing: '1px' }}>Copyright &copy; 2021 Fashion-du-Jour by teams.pvt.ltd</div>
                </div>
            </div>

            {
                /****************************************************************************************************/
                /****************************************************************************************************/
                /*********************************APP FOOTER Footer-2******************************************/
                /****************************************************************************************************/
                /****************************************************************************************************/
            }

        </React.Fragment>
    )
}

export default Footer
