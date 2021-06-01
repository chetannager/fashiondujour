export const checkIsLoggedIn = () => dispatch => {
    dispatch({
        type: "setCustomerDetails",
        payload: {
            "customer_id": localStorage.getItem("customer_id"),
            "customer_full_name": localStorage.getItem("customer_full_name"),
            "customer_email_address": localStorage.getItem("customer_email_address"),
            "customer_mobile_number": localStorage.getItem("customer_mobile_number")

        }
    });
    if (localStorage.getItem("isLoggedIn") == null) {
        dispatch({
            type: "checkLogin",
            payload: false
        });
    } else {
        if (localStorage.getItem("isLoggedIn")) {
            dispatch({
                type: "checkLogin",
                payload: true
            })
        } else {
            dispatch({
                type: "checkLogin",
                payload: false
            })
        }
    }
}

export const setLoggedIn = (isLoggedIn) => dispatch => {
    if (isLoggedIn) {
        localStorage.setItem("isLoggedIn", isLoggedIn)
        dispatch({
            type: "setLoggedIn",
            payload: isLoggedIn
        })
    } else {
        localStorage.removeItem("isLoggedIn")
        dispatch({
            type: "setLoggedIn",
            payload: isLoggedIn
        })
    }
}

export const setCustomerDetails = (customerData) => dispatch => {
    dispatch({
        type: "setCustomerDetails",
        payload: customerData
    })
}