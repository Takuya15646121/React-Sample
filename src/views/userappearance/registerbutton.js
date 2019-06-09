import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import RegisterForm from './registerform';

const styles = {
    fab: {
        position: 'fixed',
        bottom: 60,
        right: 20,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default class RegisterButton extends React.Component {

    state = {
        open: false
    }

    render() {
        const handleOpen = () => {
            this.setState({
                open: true
            })
        };

        const handleClose = () => {
            this.setState({
                open: false
            })
        };

        return (
            <div>
                <Fab color="primary" aria-label="Add" style={styles.fab}>
                    <AddIcon onClick={handleOpen} />
                </Fab>

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={handleClose}
                    style={styles.modal}
                >
                    <div >
                        <RegisterForm />
                    </div>
                </Modal>
            </div>
        )
    }
}