// *   import*; this means we import everything from the actions
import * as api from '../api/index'

// ?these are the action creators below; action creators are functions that return actions

// *getPosts = () => async(dispatch); the async(dispatch) is what thunk allows us to do 
export const getPosts = () => async(dispatch) => {
    try{
        // *requesting all the data from the API
        const {data} = await api.fetchPosts()
        dispatch({type:'FETCH_ALL', payload:[]})


    } catch(error){
        console.log(error.message)

    }
    // *an action is an object that has a type and payload
        // *payload; it is usually the data where we store all of our posts
        // *dispatch is an action btw
    // const action = {type:'FETCH_ALL', payload:[]}
}