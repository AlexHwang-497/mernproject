import React from 'react'
import {Container, AppBar, typography, Grow, Grid, Typography} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './Components/Posts/Posts'
import Form from './Components/Forms/Form'

// *<Grow>; provides simple animation
const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Stock Portolio Builder</Typography>
                <img src={memories} alt="icon" height ="60"/>
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