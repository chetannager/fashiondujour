import { ACTION_TYPES } from "./../actions/dCategories";
const initialState = {
    categories: [],
}

export const dCategories = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                categories: [...action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case ACTION_TYPES.UPDATE:
            return {
                ...state,
                categories: state.categories.map(x => x.category_id === action.payload.category_id ? action.payload : x)
            }
        case ACTION_TYPES.DELETE:
            return {
                ...state,
                categories: state.categories.filter(x => x.category_id != action.payload)
            }
        default:
            return state;
    }
}