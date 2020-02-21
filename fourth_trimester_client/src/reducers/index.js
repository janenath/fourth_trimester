import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
// import tipReducer from './tipReducer';
// import screeningReducer from './screeningReducer';

export default combineReducers({
    articles: articleReducer,
    auth: authReducer
})