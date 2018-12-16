/**
*Component
*/
import React from 'react';
import withHOC from './withHOC';

class Test2 extends React.Component {
    componentDidMount() {
        console.log('Test2 Mount props', this.props);
    }
    
    componentDidUpdate() {
        console.log('Test2 Update props', this.props);
    }
    render() {
        return(
            <div>
                {
                    this.props.test1
                }
                {
                    this.props.test2
                }
                <button type='button' onClick={()=>this.props.update('test')}>Update</button>
            </div>
        )
    }
}
export default withHOC(Test2);