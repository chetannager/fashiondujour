const initialState = {
    isLoggedIn: null,
    customerDetails: {

    }
}

export const dCustomer = (state = initialState, action) => {
    switch (action.type) {
        case "checkLogin":
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        case "setLoggedIn":
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        case "setCustomerDetails":
            return {
                ...state,
                customerDetails: action.payload,
            }
        default:
            return state
    }
}