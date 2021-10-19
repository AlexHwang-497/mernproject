// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
export default (posts=[], action) => {

    switch(action.type){
        case 'FETCH_ALL':
            // *action.payload are our actual posts from dispatch({type:'FETCH_ALL', payload:[]})
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}





// const reducer = (state, action) => {
//     if(action.type==='Create'){
//         return action || state
//     }

// }