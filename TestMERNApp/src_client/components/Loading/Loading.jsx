import React from 'react';
import '../../assets/style/style.css';

class Loading extends React.Component {
    render() {
        return(
            <div className="loader"> {/*style={{textAlign: "center"}}*/}
                Loading...
            </div>
        )
    }
}

export default Loading;