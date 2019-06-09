import React from 'react';
import CenteredTabs from './usertabbar';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: 60,
      right: 20,
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));
  
function FloatingActionButton() {
    const classes = useStyles();
        
    return (
        <div>
            <Fab color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default class UserScreen extends React.Component {
    
    render() {
        return(
            <div>
                <CenteredTabs />
                <FloatingActionButton />
            </div>
        )
    }
}