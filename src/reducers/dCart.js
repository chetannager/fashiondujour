const initialState = {
    cart: [],
    payments: [
        {
            id: 256
        }
    ]
}

export const dCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": return {
            ...state,
            cart: [...state.cart, action.payload],
        }
        default: return state
    }
}