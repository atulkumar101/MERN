/**
*Component
*/
import React from 'react';
import withHOC from './withHOC';

class Test1 extends React.Component {
    componentDidMount() {
        console.log('Test1 props', this.props);
    }
    
    componentDidUpdate() {
        console.log('Test1 props', this.props);
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
                <button type='button' onClick={()=>this.props.update('gggg')}>Update</button>
            </div>
        )
    }
}
export default withHOC(Test1);