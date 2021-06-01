import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'

const TrackDetail = (props) => {
    return (
        <React.Fragment>
            <Header show={props.show} login={props.login} isLoggedIn={props.isLoggedIn} setLogin={props.setLogin} setLogout={props.setLogout} />
            <div className="d-none d-md-flex mt-80">

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default TrackDetail
