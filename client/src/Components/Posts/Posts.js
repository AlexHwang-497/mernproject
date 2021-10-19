import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
import {Grid,CircularProgress} from '@material-ui/core'
// *this allows us to fetch data from the REDUX store
import { useSelector } from "react-redux";


const Posts = ({ setCurrentId }) =>{
    // * how do we know that this is called posts?
        // * if you go in index.js and look at export const reducers=combineReducers({posts})
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles()

    console.log('these are the posts in posts.js',posts)

// *<Grid key={post._id} item xs={12} sm={6} md={6}>; this deals with the sizing for mobile devices
//*<Post post ={''} setCurrentId={''}/>; as we we iterate through, we will send the indiviaul value of a post to each post component
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
              ))}
            </Grid>
        )
    )
}

export default Posts