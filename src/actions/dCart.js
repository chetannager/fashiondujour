export const fetchall = () => dispatch => {
    dispatch({
        type: "CART_PRODUCTS"
    })
}

export const addToCart = (product_id) => dispatch => {
    dispatch({
        type: "ADD_TO_CART",
        payload: product_id
    })
}

export const deleteToCart = (product_id) => dispatch => {
    dispatch({
        type: "DELETE_TO_CART",
        payload: product_id
    })
}
