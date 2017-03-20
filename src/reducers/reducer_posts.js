import {FETCH_POSTS, FETCH_ACTIVE_POST, CLEAR_ACTIVE_POST} from "../actions/index";

const INITIAL_STATE = {
    all: [],
    active: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ACTIVE_POST:
            return {...state, active: action.payload.data};
        case CLEAR_ACTIVE_POST:
            return {...state, active: null};
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}