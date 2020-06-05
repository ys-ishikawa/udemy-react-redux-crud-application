import _ from 'lodash';
import { READ_EVENTS, DELETE_EVENT } from '../actions';

// Reducerを定義（(previousState, action) => newState）
export default (events = {}, action) => {
    switch(action.type) {
    case READ_EVENTS:
        return _.mapKeys(action.responce.data, 'id');
    case DELETE_EVENT:
        delete events[action.id]
        return { ...events };
    default:
        return events;
    }
}