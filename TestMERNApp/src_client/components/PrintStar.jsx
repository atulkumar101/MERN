import React  from 'react';

class PrintStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr : [1,2,3,4,5]
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.arr.map((i,k)=>
                {
                    if( this.props.rating >= i )
                        return <span key={k} className="fa fa-star checked"></span>;
                    else 
                        return <span key={k} className="fa fa-star"></span>;
                })
                }
            </React.Fragment>
        )
    }
}

export default PrintStar;