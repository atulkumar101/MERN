import React from 'react';

class Pagination extends React.Component {
    componentDidMount() {
        console.log('Pagination props', this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.products !== prevProps.products) {
            console.log('Update Pagination props', this.props);
        }
    }
    render() {
        return(
            <div>
                <div className="container"> 
                    <ul className="pagination">
                        <li><a href="javascript:void(0);" onClick ={() => this.props.pagination('Prev')}>Prev</a></li>
                        {this.props.totalPage.map(
                            (page, index) => {
                                return <li key={index}><a href="javascript:void(0);" onClick ={() => this.props.pagination(page)} style={this.props.currentPage === page ? { backgroundColor: '#fdce09' } : null}>{page}</a></li>
                            }
                        )}
                        <li><a href="javascript:void(0);" onClick ={() => this.props.pagination('Next')}>Next</a></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Pagination;