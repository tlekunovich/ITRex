import {CONSTANTS} from '../store/constants';

export const setUsersDataAction = (data) => ({
    type: CONSTANTS.SET_USERS_DATA,
    data: data
});

export const setInputNameAction = (data) => ({
    type: CONSTANTS.SET_INPUT_NAME,
    data: data
});

export const setPageAction = (data) => ({
    type: CONSTANTS.SET_PAGE,
    data: data
});

export const setSortedParamAction = (data) => ({
    type: CONSTANTS.SET_SORTED_PARAM,
    data: data
});

export const setUserInfoAction = (data) => ({
    type: CONSTANTS.SET_USER_INFO,
    data: data
});


