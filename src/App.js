import './App.css';
import {Grid, Container, Box, Typography, IconButton, Button} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { Block } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>
  createStyles({
  avatar:{
    width:theme.spacing(4),
    height:theme.spacing(4)
  },
  p1:{
    padding:8
  },
  aLeft:{
    textAlign:"left"
  },
  container:{
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:10,
    backgroundColor:'#232d36',
    textAlign: 'center'
  },
  buttons:{
    color:'#a5aeb7'
  },
  mAuto:{
    margin:'auto'
  }
})
)

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container >
        <Grid container>
          {/*HEADER*/}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2} sm={1}
                className={classes.mAuto}>
              <Box p={1}>
                  <Avatar className={classes.avatar}  alt="profile" src="/static/avatar.jpg"/>
                </Box>
              </Grid>
              <Grid item xs={6} sm={9}>
                <Box component="p" color="background.paper" className={classes.aLeft}>
                  <Typography  variant="subtitle2" >
                    Nisi henderit occaecat excepteur cillum.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={2} my="auto">
                <Box >
                  <IconButton className={classes.buttons} aria-label="search">
                      <SearchIcon/>
                  </IconButton>
                  <IconButton className={classes.buttons} aria-label="search">
                      <MoreVertIcon/>
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={0} sm={7}></Grid>
              
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="default">
              sad
            </Button>
          </Grid>
        </Grid>





      </Container>
    </div>
  );
}

export default App;
