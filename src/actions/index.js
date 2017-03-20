import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ACTIVE_POST = 'FETCH_ACTIVE_POST';
export const CLEAR_ACTIVE_POST = 'CLEAR_ACTIVE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123aabb123';

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchActivePost(id) {

    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_ACTIVE_POST,
        payload: request
    };
}

export function clearActivePost() {
    return {
        type: CLEAR_ACTIVE_POST
    };
}

export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    };
}