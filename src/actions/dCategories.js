import api from "./api";
import { Notification } from '../components/ui/Noty'

export const ACTION_TYPES = {
    CREATE: 'CREATE_CATEGORY',
    UPDATE: 'UPDATE_CATEGORY',
    DELETE: 'DELETE_CATEGORY',
    FETCH: 'FETCH_CATEGORY',
    FETCH_ALL: 'FETCH_ALL_CATEGORIES',
}


export const fetchall = () => dispatch => {
    api.dCategories().fetchall()
        .then(response => {
            console.log(response)
            if (response.status === 200 && response.data.success) {
                dispatch({
                    type: ACTION_TYPES.FETCH_ALL,
                    payload: response.data.data
                })
            }
        })
        .catch(error => {
            console.log(error.response)
            if (error.response.status === 401) {
                Notification(error.response.data.RESPONSE.error_message, "error");
            } else if (error.response.status === 403) {
                Notification(error.response.data.RESPONSE.error_message, "error");
            }
        })
}

export const fetchById = (id, onSuccess) => dispatch => {
    api.dCategories().fetchById(id)
        .then(response => {
            console.log(response)
            if (response.status === 200 && response.data.success) {
                onSuccess(response.data);
            }
        })
        .catch(error => {
            console.log(error)
            if (error.response.status === 400) {
                Notification(error.response.data.RESPONSE.error_message, "error");
            } else if (error.response.status === 401) {
                Notification(error.response.data.RESPONSE.error_message, "error");
            } else if (error.response.status === 403) {
                Notification(error.response.data.RESPONSE.error_message, "error");
            }
        })
}

export const create = (data, onSuccess) => dispatch => {
    api.dCategories().create(data)
        .then(response => {
            console.log(response)
            if (response.status == 200) {
                if (response.data.success)
                    dispatch({
                        type: ACTION_TYPES.CREATE,
                        payload: response.data.data
                    })
                onSuccess(response.data.message)
            }
        })
        .catch(error => {
            console.log(error)
                // dispatch({ type: ERROR, payload: error.data.error.message });
        })
}

export const update = (id, data, onSuccess) => dispatch => {
    api.dCategories().update(id, data)
        .then(response => {
            console.log(response)
            if (response.status == 200)
                if (response.data.success)
                    dispatch({
                        type: ACTION_TYPES.UPDATE,
                        payload: response.data.data
                    })
            onSuccess(response.data.message)
        })
        .catch(error => {
            console.log(error)
                // dispatch({ type: ERROR, payload: error.data.error.message });
        })
}

export const deleteRecord = (id, onSuccess) => dispatch => {
    api.dCategories().delete(id)
        .then(response => {
            console.log(response)
            if (response.status == 200) {
                if (response.data.success) {
                    dispatch({
                        type: ACTION_TYPES.DELETE,
                        payload: id
                    })
                    onSuccess(response.data.message)
                } else
                    onSuccess(response.data.error_message)
            }
        })
        .catch(error => {
            console.log(error)
                // dispatch({ type: ERROR, payload: error.data.error.message });
        })
}