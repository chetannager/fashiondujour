import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import { Button } from 'rsuite'

const Track = (props) => {
    return (
        <React.Fragment>
            <Header show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="container-fluid d-none d-md-block mt-80">
                {
                    props.isLoggedIn ? <div className="track-order">
                        <div className=" container d-flex flex-column justify-content-center align-items-center">
                            <p style={{ color: '#30252F', fontFamily: 'Raleway', fontWeight: '700', fontSize: '40px' }}>Track Your Order</p>
                            <p style={{ width: '540px', textAlign: 'center', color: 'rgba(0,0,0,0.6)' }}>We understand the importance of approaching each work integrally and believe in the poweros simple  and easy communication.</p>
                            <div className="container">
                                <div className="row mt-50 mb-50 align-items-center overflow-hidden" style={{ boxShadow: '2px 2px 15px 1px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                    <div className="col-md-6 bg-white" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} >
                                        <img src="imgs/icon/img15.png" alt="img15.png" height="380px" />
                                    </div>
                                    <div className="col-md-6 align-items-center justify-content-center d-flex flex-column" style={{ height: '100%' }}>
                                        <div style={{ marginLeft: '-40px' }} className="mb-40">
                                            <h4 style={{ color: '#30252F', fontWeight: '600', fontFamily: 'Raleway' }}>Hello,</h4>
                                            <h4 style={{ color: '#30252F', fontWeight: '600', fontFamily: 'Raleway' }}>Track Your Order here</h4>
                                        </div>
                                        <form action="" method="post">
                                            <input type="text" placeholder="Inter Order Tracking ID" /><br />
                                            <input type="submit" value="Track" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="container mt-80 mb-40">
                        <div className="d-flex flex-column align-items-center">
                            <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                            <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px' }}>Login to view track detail of your product</p>
                            <img src="imgs/icon/access.svg" height="300px" width="200px" alt="login" />
                            <Button onClick={props.login} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOG IN</Button>
                        </div>
                    </div>
                }
            </div>
            {
                /********************************************************************************************/
                /************************************* MOBILE UI DESIGN *************************************/
                /********************************************************************************************/
            }
            <div className="container-fluid d-md-none d-sm-block mt-70">
                {
                    props.isLoggedIn ? <div className="track-order">
                        <div className=" container d-flex flex-column justify-content-center align-items-center">
                            <p style={{ color: '#30252F', fontFamily: 'Raleway', fontWeight: '700', fontSize: '25px' }}>Track Your Order</p>
                            <p style={{ width: '300px', fontSize: '14px', textAlign: 'center', color: 'rgba(0,0,0,0.6)' }}>We understand the importance of approaching each work integrally and believe in the poweros simple  and easy communication.</p>
                            <div className="container">
                                <div className="row mt-50 mb-50 align-items-center overflow-hidden" style={{ boxShadow: '2px 2px 15px 1px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
                                    <div className="col-md-6 bg-white mb-10" style={{ borderRadius: '10px' }} >
                                        <img src="imgs/icon/img15.png" alt="img15.png" height="150px" />
                                    </div>
                                    <div className="col-md-6 align-items-center justify-content-center d-flex flex-column" style={{ height: '100%' }}>
                                        <div style={{ marginLeft: '-40px' }} className="mb-30">
                                            <h4 style={{ color: '#30252F', fontWeight: '600', fontFamily: 'Raleway' }}>Hello,</h4>
                                            <h4 style={{ color: '#30252F', fontWeight: '600', fontFamily: 'Raleway' }}>Track Your Order here</h4>
                                        </div>
                                        <form action="" method="post">
                                            <input type="text" placeholder="Inter Order Tracking ID" /><br />
                                            <input type="submit" value="Track" className="mb-20" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div className="container mt-80 mb-40">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h4 style={{ color: '#30252F', fontWeight: '700', letterSpacing: '0.3px' }}>PLEASE LOG IN</h4>
                            <p style={{ color: 'rgba(0,0,0,0.6)', fontWeight: '500', letterSpacing: '0.3px', textAlign: 'center' }}>Login to view track detail of your product</p>
                            <img src="imgs/icon/access.svg" height="300px" width="200px" alt="login" />
                            <Button onClick={props.login} className="w-25" appearance="ghost" style={{ fontSize: '18px', height: '45px', border: '2px solid #30252F', color: '#30252F', fontWeight: '700' }}>LOGIN</Button>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Track
