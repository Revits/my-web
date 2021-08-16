import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import { borderRadius } from '@material-ui/system'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height:"44px",
        padding:"0 25px",
        boxSizing:"border-box",
        borderRadius: 0,
        background: "#4f2527",
        color: "fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background, .3s,border-color .3,scolor .3s",
        "&:hover": {
            backgroundColor:"#4f25f7"
        },

    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function CustomBtn(props) {
    return (
        <StyledButton variants='contained'>{props.txt}</StyledButton>
    )
}
