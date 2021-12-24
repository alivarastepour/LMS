export const profileReducer = (state, action) => {
    let newState ;
    switch (action.type) {
        case 'SET-FIRSTNAME':
            newState = {...state, firstname: action.payload};
            break;
        case 'SET-LASTNAME':
            newState = {...state, lastname: action.payload};
            break;
        case 'SET-EMAIL':
            newState = {...state, email: action.payload};
            break;
        case 'SET-ADDRESS':
            newState = {...state, address: action.payload};
            break;
        case 'SET-USERNAME':
            newState = {...state, username: action.payload};
            break;
        case 'SET-ROLE':
            newState = {...state, role: action.payload};
            break;
    }
    return newState;
}