import { combineReducers } from 'redux';
import swCharacters from './swCharacters';

export const reducers = combineReducers({
    swCharacters: swCharacters
});