import React from 'react';
import CenteredTabs from './usertabbar';
import RegisterButton from './registerbutton';

export default class UserScreen extends React.Component {
    
    render() {
        return(
            <div>
                <CenteredTabs />
                <RegisterButton />
            </div>
        )
    }
}