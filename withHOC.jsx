/**
*Higher Order Component
*/
import React from 'react';

function withHOC(WrappedComponent) {
    class Test extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                test1: 'test1',
                test2: 'test2'
            }
        }
        componentDidMount() {
            console.log('HOC Mount state',this.state);
        }
        
        componentDidUpdate() {
            console.log('HOC Update state',this.state);
        }
        update = (u) => {
            this.setState({
                test2: u 
            })
        }
        render() {
            const test1 = this.state.test1;
            const test2 = this.state.test2;
            return (<WrappedComponent test1={test1} test2={test2} update={this.update}/>);
        }
    }
    return Test;
}
export default withHOC;
