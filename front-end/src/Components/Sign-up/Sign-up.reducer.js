export const signUpReducer = (state, action) => {
    let newState ;
    switch (action.type){
        case 'SET-USERNAME':
            newState = {...state, username: action.payload};
            break;
        case 'SET-PASSWORD':
            newState = {...state, password: action.payload};
            break;
        case 'SET-EMAIL':
            newState = {...state, email: action.payload};
            break;
        case 'SET-ROLE':
            newState = {...state, role: action.payload};
            break;
        case 'VALID-USERNAME':
            newState = {...state, validUsername: action.payload};
            break;
        case 'VALID-PASSWORD':
            newState = {...state, validPassword: action.payload};
            break;
        case 'VALID-EMAIL':
            newState = {...state, validEmail: action.payload};
            break;
        case 'VALID-SIGN-UP':
            newState = {...state, validSignUp: action.payload};
            break;
        default:
            break    
    }
    return newState;
}