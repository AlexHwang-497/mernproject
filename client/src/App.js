import React from 'react'
import {Container, AppBar, typography, Grow, Grid, Typography} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './Components/Posts/Posts'
import Form from './Components/Forms/Form'
import useStyles from './styles'

// *<Grow>; provides simple animation
const App = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg'>
        <h1>You left off at 39:19 10/18/2021</h1>
        
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Stock Portolio Builder</Typography>
                <img className={classes.image} src={memories} alt="icon" height ="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            
                            <Posts/>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>

                        </Grid>

                    </Grid>
                </Container>

            </Grow>

        </Container>
    
    )
}
export default App