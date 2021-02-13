export default (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                uid: action.id 
            }
        case "LOGOUT": 
            return {}
        default:
            return state;
    }      
};