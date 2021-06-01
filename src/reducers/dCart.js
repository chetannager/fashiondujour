const initialState = {
    cart: [],
    deliveryAddress: [],
    paymentDetails: []
}

export const dCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart,
                    {
                        if (state.cart.findIndex(p => p.product_id == action.payload.product_id) != -1) {
                            var tempProduct = state.cart[state.cart.findIndex(p => p.product_id == action.payload.product_id)];
                            tempProduct["product_qty"] += 1;
                            tempProduct["product_total_price"] += tempProduct["product_total_price"];
                        }else{
                            action.payload
                        }
                    }],
            }
        case "DELETE_TO_CART":
            return {
                ...state,
                cart: [...state.cart,],
            }
        case "CART_PRODUCTS":
            return {
                cart: state.cart,
            }
        default:
            return state
    }
}