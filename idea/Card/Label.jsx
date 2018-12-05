
import React from 'react';
import '../../assets/style/style.css';
import logo from '../../logo.svg';

class Label extends React.Component {
    render() {
        return(
            <div className="danger">
                <p><strong>Danger!</strong> Some text...</p>
            </div>
        )
    }
}

export default Label;
