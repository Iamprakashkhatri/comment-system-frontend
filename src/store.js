import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    commentListReducer,
    commentCreateReducer,
    replyCreateReducer,
    replyListReducer,
} from './reducers/commentReducers'

import {
    userLoginReducer,

} from './reducers/userReducers'


const reducer = combineReducers({
    commentList: commentListReducer,
    commentCreate:commentCreateReducer,
    replyList:replyListReducer,


    replyCreate:replyCreateReducer,

    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

// const middlewares = [logger];
// const store = createStore(reducer,
//     (applyMiddleware(...middlewares,thunk)))

const middleware = [thunk];

// const store = createStore(
//   reducer,initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const devTools =
  process.env.REACT_APP_NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducer, initialState, devTools);

export default store