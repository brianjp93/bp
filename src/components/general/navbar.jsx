import React from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Icon} from '@material-ui/core'

const useStyles = makeStyles({
    nav: {
        background: 'white',
    }
})

function NavBar() {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.nav}>
            <Toolbar>
                <Typography variant="h3">
                    <Link to='/'>
                        <span>
                            <Icon>home</Icon>
                        </span>
                    </Link>
                </Typography>

                <Typography variant="h6">
                    <div style={{display: 'inline-block', marginLeft: 30}}></div>
                    <Link to='/about' style={{textDecoration: 'none', verticalAlign: 'sub'}}>???</Link>
                </Typography>

                <Typography variant="h6">
                    <div style={{display: 'inline-block', marginLeft: 30}}></div>
                    <Link
                        to='/aoc2018' 
                        style={{
                            textDecoration: 'none',
                            verticalAlign: 'sub',
                            fontSize: 15
                        }}>
                        AOC 2018
                    </Link>
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar
