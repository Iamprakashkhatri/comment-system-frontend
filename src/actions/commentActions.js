import axios from 'axios'
import { API } from '../config';
import {
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_FAIL,

    COMMENT_CREATE_REQUEST,
    COMMENT_CREATE_SUCCESS,
    COMMENT_CREATE_FAIL,

    REPLY_CREATE_REQUEST,
    REPLY_CREATE_SUCCESS,
    REPLY_CREATE_FAIL,

    REPLY_LIST_REQUEST,
    REPLY_LIST_SUCCESS,
    REPLY_LIST_FAIL,

} from '../constants/commentConstants'


export const listComments = () => async (dispatch) => {
    try {
        dispatch({ type: COMMENT_LIST_REQUEST })

        const { data } = await axios.get(`${API}/api/comments/comment`)

        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


export const createComment = (comment) => async (dispatch,getState) => {
    try {
        dispatch({
            type: COMMENT_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            `${API}/api/comments/comment/`,
            {'description': comment,'user':userInfo.user.id},
            config
        )
        dispatch({
            type: COMMENT_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: COMMENT_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createReply = (reply,comment) => async (dispatch,getState) => {
    try {
        dispatch({
            type: REPLY_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            `${API}/api/comments/comment-reply/`,
            {'description': reply,'user':userInfo.user.id,'comment':comment},
            config
        )
        dispatch({
            type: REPLY_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: REPLY_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listReplies = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: REPLY_LIST_REQUEST })

        const { data } = await axios.get(`${API}/api/comments/comment-reply${keyword}`)
        console.log('data',data)
        dispatch({
            type: REPLY_LIST_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: REPLY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })

    }
}


