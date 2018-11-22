import React  from 'react';

class PrintStar extends React.Component {
    render() {
        let arr = [1,2,3,4,5];
        return (
            <div>
                {arr = arr.map((i,k)=>
                {
                    if( this.props.rating >= i )
                        return <span key={k} className="fa fa-star checked"></span>;
                    else 
                        return <span key={k} className="fa fa-star"></span>;
                })
                }
            </div>
        )
    }
}

export default PrintStar;