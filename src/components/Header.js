import { Avatar, Box, Grid, IconButton, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export class Header extends Component {
    constructor(props){
      super(props);

    }
    render() {
        const classes = this.props.styles;
        return (
            <Grid container>
              <Grid item xs={2} sm={1}
                className={classes.mAuto}>
              <Box p={1}>
                  <Avatar className={classes.avatar}  alt="profile" src="/static/avatar.jpg"/>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2} className={classes.mAuto}>
                <Box component="p" m={0}  className={`${classes.aLeft} ${classes.buttons}`} >
                  <Typography  variant="subtitle2" >
                    Nisi henderit occaecat excepteur cillum.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={2}
              className={classes.mAuto} >
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
        )
    }
}

export default Header
