const initialState = {
    cart: [],
    deliveryAddress: [],
    paymentDetails: []
}

export const dCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            var index = state.cart.findIndex(p => p.product_id == action.payload.product_id);
            if (index != -1) {
                var tempProduct = state.cart[index];
                tempProduct["product_qty"] += 1;
                var price = tempProduct["product_total_price"];
                tempProduct["product_total_price"] = price + parseInt(action.payload.product_total_price);
            } else {
                state.cart = [...state.cart, action.payload]
            }
            return {
                ...state,
                cart: state.cart,
            }
        case "DELETE_TO_CART":
            var index = state.cart.findIndex(p => p.product_id == action.payload);
            console.log(index);
            if (index != -1) {
                var tempProduct = state.cart[index];
                if (tempProduct["product_qty"] > 1) {
                    tempProduct["product_qty"] -= 1;
                    var price = tempProduct["product_total_price"];
                    tempProduct["product_total_price"] -= tempProduct["product_discount_price"];
                } else {
                    state.cart = state.cart.filter(item => item.product_id !== action.payload)
                }
            }
            return {
                ...state,
                cart: state.cart,
            }
        case "CART_PRODUCTS":
            return {
                cart: state.cart,
            }
        default:
            return state
    }
}