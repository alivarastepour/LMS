const valid_username = username => !isNaN(Number(username[username.length - 1])) || username.length === 0;

export const signInReducer = (state, action) => {
    let newState ;
    switch (action.type) {
        case 'SET-USERNAME':
            const username = action.payload;
            if (valid_username(username))
                newState = {...state, username: username};
            else
                return state;
            break;
        case 'SET-PASSWORD':
            newState = {...state, password: action.payload};
            break;
    }
    return newState;
}