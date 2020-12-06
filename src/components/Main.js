import React from 'react'
import { makeStyles, createStyles} from '@material-ui/core/styles';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import WhatsClone from './WhatsClone';



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
            paddingLeft:3,
            paddingTop:5,
            paddingBottom:5,
            paddingRight:3,
            backgroundColor:'#232d36',
            textAlign: 'center'
        },
        buttons:{
            color:'#a5aeb7'
        },
        general:{
            paddingLeft:0,
            paddingRight:0
        },
        mAuto:{
            margin:'auto'
        }
})
)

function Main(props) {
    const classes = useStyles();
    return (
        <Switch>
            <Route path="/" component={()=><WhatsClone styles={classes}/>} />
            <Redirect to="/"/>
        </Switch>
    )
}

export default Main
