import logo from './logo.svg';
import './App.css';
import {Grid, Container, Box, Button, Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  avatar:{
    color: 'green'
  },
  p1:{
    padding:8
  },
  aLeft:{
    textAlign:"left"
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container>
      <Grid container>
        <Grid item xs={1}>
            <Box p={1}>
              <Avatar className={classes.avatar} alt="profile" src="/static/avatar.jpg"/>
            </Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="p" className={classes.aLeft}>
            <Typography variant="subtitle2" >Usuario 1</Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sm={4}></Grid>
        <Grid item xs={4} sm={2}>
          <Box p={1}>
          <Button variant="outlined" color="default">
                B
            </Button>
          </Box>
        </Grid>
      </Grid>
      <header className="App-header">

      </header>
      </Container>
    </div>
  );
}

export default App;
