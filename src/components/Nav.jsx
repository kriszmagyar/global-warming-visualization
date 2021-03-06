import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">Global Warming</Link>
                    </Typography>
                    <Button color="inherit">
                        <Link to="/cities">Cities</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/world">World</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;