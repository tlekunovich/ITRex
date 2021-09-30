let initialState = {
    usersData: [],
    inputName: '',
    page: 0,
    sortedParam: 'id',
    userInfo: null,
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS_DATA':
            return {...state, usersData: action.data};
        case 'SET_INPUT_NAME': 
            return {...state, inputName: action.data};
        case 'SET_PAGE': 
            return {...state, page: action.data};
        case 'SET_SORTED_PARAM': 
            return {...state, sortedParam: action.data};
        case 'SET_USER_INFO': 
            return {...state, userInfo: action.data}; 
        default:
            return state; 
    }
};

export default Reducers;