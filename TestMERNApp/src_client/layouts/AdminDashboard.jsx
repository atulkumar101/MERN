import React from 'react';
import SignIn from '../components/Material-UI/SignIn';
import adminRoutes from "../routes/admin";

class AdminDashboard extends React.Component {
    render() {
        return (
            <div>
                <SignIn />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default AdminDashboard;
