import React, { Component } from 'react'
import {Grid, Box, Container, Button, IconButton} from '@material-ui/core';
import Header from './Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const theme = createMuiTheme();


export class WhatsClone extends Component {
    constructor(props){
        super(props);
        this.state={
            styles:props.styles
        }
    };


    render() {
        return (
            <div className={this.state.styles.container}>
                <Container className={this.state.styles.general}>
                    <Grid container>
                    {/*HEADER*/}
                        <Grid item xs={12}>
                            <Header styles={this.state.styles} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container >
                                <Grid item>
                                    <IconButton aria-label="upload-photo" className={this.state.styles.buttons}>
                                        <CameraAltIcon /> 
                                    </IconButton>
                                </Grid>
                                <Grid item className={this.state.styles.mAuto}>
                                    <Button variant="text">
                                        <Box component="p" m={0} justifyContent="center" className={this.state.styles.buttons}> 
                                            CHATS
                                        </Box>
                                    </Button>
                                </Grid>
                                <Grid item className={this.state.styles.mAuto}>
                                    <Button variant="text" color="default">
                                        <Box component="p" m={0} justifyContent="center" className={this.state.styles.buttons}>
                                            ESTADOS
                                        </Box>
                                     </Button>
                                </Grid>
                                <Grid item className={this.state.styles.mAuto}>
                                    <Button variant="text" color="default">
                                        <Box component="p" m={0} justifyContent="center" className={this.state.styles.buttons}>
                                            LLAMADAS
                                        </Box>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            
        )
    }
}

export default WhatsClone
