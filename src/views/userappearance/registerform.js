import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    fab: {
        position: 'fixed',
        bottom: 60,
        right: 20,
    },
    modal: {
        margin:'auto',
        verticalAlign: 'baseline',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width:'50%',
        height: '90%'
    }
}

export default class RegisterForm extends React.Component {
    render() {
        return (
            <div>
                <Paper style={styles.modal}>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </div>
        )
    }
}