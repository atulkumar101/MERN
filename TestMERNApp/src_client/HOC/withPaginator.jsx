import React from 'react';

function withPaginator(WrappedComponent) {
    //return class extends React.Component {}
    class Paginator extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: 'test'
            };
        }
        componentDidMount() {
            //DataSource.addChangeListener(this.handleChange);
        }
      
        componentWillUnmount() {
            //DataSource.removeChangeListener(this.handleChange);
        }
      
        handleChange() {
            /*this.setState({
                data: selectData(DataSource, this.props)
            });*/
        }
        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    }
    return Paginator;
}

export default withPaginator;