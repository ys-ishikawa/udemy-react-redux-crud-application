import _ from 'lodash';
import { 
    CREATE_EVENT,
    READ_EVENTS,
    READ_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
} from '../actions';

// Reducerを定義（(previousState, action) => newState）
export default (events = {}, action) => {
    switch(action.type) {
    case READ_EVENTS:
        return _.mapKeys(action.responce.data, 'id');
    case DELETE_EVENT:
        delete events[action.id]
        return { ...events };
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
        const data = action.responce.data;
        return {... events, [data.id]: data}
    default:
        return events;
    }
}