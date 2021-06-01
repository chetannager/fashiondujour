import React from 'react'
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

function showContact() {
    document.querySelector('.contact-side-bar').style.left = "0px";
    document.querySelector('.contact-side-bar').style.width = "450px";
    document.querySelector('.contact-rotate').style.display = "none";
    document.querySelector('.contact-side-bar p').style.transform = "scale(0) rotate(270deg)";
}
function hideContact() {
    document.querySelector('.contact-side-bar').style.left = "-400px";
    document.querySelector('.contact-side-bar').style.width = "500px";
    document.querySelector('.contact-rotate').style.display = "block";
    document.querySelector('.contact-side-bar p').style.transform = "scale(1) rotate(270deg)";
}

const Contactus = (props) => {
    return (
        <React.Fragment>
            <Header search={props.search} show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="container-fluid">
                <div className="row d-none d-md-flex contact-side-bar pt-30 pb-30" onMouseOut={hideContact} onMouseOver={showContact}>
                    <div className="container col-md-10 contact-section">
                        <h5 className="text-white" style={{ fontFamily: 'Quicksand', letterSpacing: '1px', fontSize: '40px' }}>Contact Us</h5>
                        <hr style={{ width: '70px', marginLeft: '6px', marginTop: '10px', borderTop: '2px solid rgba(255,255,255,0.7)' }} />
                        <ul className="mt-30">
                            <li>
                                <i className="fas fa-map-marker-alt" style={{ color: 'white', fontSize: '20px' }}></i>
                                <div className="text-white ml-30">&nbsp;&nbsp;M II/112 Sector-C,Aliganj,Yojana Jankipuram, Lucknow, Uttar Pradesh, 226001</div><br />
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt" style={{ color: 'white', fontSize: '20px' }}></i>
                                <div className="text-white ml-25">&nbsp;&nbsp;+91 9076652887</div><br />
                            </li>
                            <li>
                                <i className="fas fa-user-shield" style={{ color: 'white', fontSize: '20px' }}></i>
                                <div className="text-white ml-15">&nbsp;&nbsp;Siddharth Kumar</div><br />
                            </li>
                            <li>
                                <i className="fas fa-envelope" style={{ color: 'white', fontSize: '20px' }}></i>
                                <div className="text-white ml-20">&nbsp;&nbsp;fashiondujour@company.in</div>
                            </li>
                        </ul>
                    </div>
                    <div className="container col-md-2 contact-rotate">
                        <p>Contact&nbsp;Us</p>
                    </div>
                </div>
                <section id="contacts-2" class="wide-100 contacts-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 section-title">
                                <h1 className="d-none d-md-block" style={{ fontFamily: 'Quicksand', color: '#30252F' }}>Want To Get rid of Problem? We’re Listening. </h1>
                                <h4 className="d-md-none d-sm-block" style={{ fontFamily: 'Quicksand', color: '#30252F', fontWeight: '600' }}>Want To Get rid of Problem? We’re Listening. </h4>
                                <hr style={{ width: '170px', marginLeft: '60px', marginTop: '6px', borderTop: '2px solid #30252F' }} />
                                <p className="p-md">Feel Free to contact us if you need some help, consultation or you have some other question.</p>
                            </div>
                            <img className="d-none d-md-block" src="imgs/icon/contact.svg" height="210" width="610px" alt="conatct" style={{ marginLeft: '290px', marginBottom: '20px' }} />
                            <img className="d-md-none d-sm-block" src="imgs/icon/contact.svg" height="130" width="250px" alt="conatct" style={{ marginLeft: '37px', marginBottom: '50px' }} />
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                                <div className="form-holder">
                                    <form name="contactform" className="row contact-form">
                                        <div id="input-subject" className="col-md-12 input-subject">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>This question is about:  </p>
                                            <span>Choose a topic, so we know whom to send the request to:  </span>
                                            <select id="inlineFormCustomSelect1" name="Subject" className="custom-select subject">
                                                <option>This question is about...</option>
                                                <option>Registering/Authorising</option>
                                                <option>Using Application</option>
                                                <option>Troubleshooting</option>
                                                <option>Backup/Restore</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div id="input-name" className="col-lg-12">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Your Name:  </p>
                                            <span>Please enter your real Name:  </span>
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                        </div>
                                        <div id="input-email" className="col-lg-12">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Your Email Address:  </p>
                                            <span>Please carefully check your email address for accuracy. If email address is incorrect, we are not be able to send you proper information regarding issue you are facing. </span>
                                            <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                        </div>
                                        <div id="input-message" className="col-lg-12 input-message">
                                            <p style={{ fontSize: '16px', fontWeight: '600' }}>Explain your question in brief:  </p>
                                            <span>Your problem is our first priority to be solved. Please explain the issue in more brief so, we come out with better solution. </span>
                                            <textarea className="form-control message" name="message" rows="6" placeholder="I have a problem with..."></textarea>
                                        </div>
                                        <div className="col-lg-12 mt-15 form-btn text-right">
                                            <button type="submit" className="btn btn-blue black-hover submit" style={{ fontFamily: 'Raleway', backgroundColor: '#30252F', border: 'none' }}>Submit Request </button>
                                        </div>
                                        <div className="col-lg-12 contact-form-msg">
                                            <span className="loading"></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="download-1" className="container-fluid m-0 bg-scroll division" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.3)),url("imgs/back2.jpg")', backgroundSize: '100% 100%' }}>
                    <div className="container-fluid white-color"></div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="download-txt text-center">
                                <h3 className="h3-xs text-white" style={{ fontFamily: 'Raleway' }}>Getting started takes less than 5 minutes </h3>
                                <p className="p-md text-white">Checkout the perfect mobile app you'll fall in love with.</p>
                                <div className="stores-badge d-none d-md-block ">
                                    <a href="#" className="store">
                                        <img className="appstore-white" src="imgs/icon/appstore.png" alt="appstore-logo" />
                                    </a>
                                    <a href="#" className="store">
                                        <img className="googleplay-white" src="imgs/icon/googleplay.png" alt="googleplay-logo" />
                                    </a>
                                    <span className="os-version text-white">* Available on iPhone, Windows and all Android devices </span>
                                </div>
                                {
                                    /****************************** MOBILE UI *******************************/
                                }
                                <div className="stores-badge d-sm-block mb-20 d-md-none">
                                    <a href="#" className="store">
                                        <img className="appstore-white" src="imgs/icon/appstore.png" alt="appstore-logo" />
                                    </a>
                                    <a href="#" className="store">
                                        <img className="googleplay-white" src="imgs/icon/googleplay.png" alt="googleplay-logo" />
                                    </a>
                                </div>
                                <div className="d-sm-block d-md-none text-white">* Available on iPhone, Windows and all Android devices </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contactus
