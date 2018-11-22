import React from 'react';

import Select from '../components/Select';
import Pagination from '../components/Pagination';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Select />
                <Pagination />
            </div>
        )
    }
}

export default Home;

//()=>check() import { check } from '../assets/utils';
//this.props.thunkAction('okokokok');
//this.props.dispatch(testAction('ssssssss'));

   /*
    isUserLoggedIn() {
        console.log('isUserLoggedIn()');
        if(this.state.email!='')
        {
        return true;
        }
        else if(this.state.email=='') {
        return false;
        }
        else {
        return null;
        }
    }
    */
