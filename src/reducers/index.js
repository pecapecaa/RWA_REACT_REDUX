import { combineReducers } from 'redux';
import wines from './wine_reducer';


const rootReducer = combineReducers({
    wines
});

export default rootReducer;