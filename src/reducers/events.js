import _ from 'lodash';
import { READ_EVENTS } from '../actions';

// Reducerを定義
export default (events = {}, action) => {
    switch(action.type) {
    case READ_EVENTS:
        return _.mapKeys(action.responce.data, 'id');
    default:
        return events;
    }
}