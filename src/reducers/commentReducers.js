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


export const commentListReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return { loading: true, comments: [] }

        case COMMENT_LIST_SUCCESS:
            return {
                loading: false,
                comments: action.payload,
            }
        // console.log('comments',action.payload)
        case COMMENT_LIST_FAIL:
            return { loading: false, error: action.payload.comments }

        default:
            return state
    }
}

export const commentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENT_CREATE_REQUEST:
            return { loading: true }

        case COMMENT_CREATE_SUCCESS:
            return { loading: false, success: true, comment: action.payload }

        case COMMENT_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const replyCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case REPLY_CREATE_REQUEST:
            return { loading: true }

        case REPLY_CREATE_SUCCESS:
            return { loading: false, success: true, reply: action.payload }

        case REPLY_CREATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const replyListReducer = (state = { replies: [] }, action) => {
    switch (action.type) {
        case REPLY_LIST_REQUEST:
            return { loading: true, replies: [] }

        case REPLY_LIST_SUCCESS:
            return {
                loading: false,
                replies: action.payload.results,
                pages: action.payload.count,
                page: 1
            }
        case REPLY_LIST_FAIL:
            return { loading: false, error: action.payload.replies }

        default:
            return state
    }
}