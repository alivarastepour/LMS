export const schoolProfileReducer = (state, action) => {
    let newState ;
    switch (action.type) {
        case 'SET-SCHOOL-NAME':
            newState = {...state, schoolName:action.payload};
            break;
        case 'SET-SCHOOL-ADDRESS':
            newState = {...state, schoolAddress:action.payload};
            break;
        default:
            break;
    }
    return newState;
} 