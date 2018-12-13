import React from 'react';
 
class Alert extends React.Component {
    render() {
        return(
            <React.Fragment>
                {
                    this.props.warning 
                    ? (<div class="alert alert-warning alert-dismissible fade in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{this.props.warning}</strong> 
                    </div>) 
                    : ''
                }
                {
                    this.props.error 
                    ? (<div class="alert alert-danger alert-dismissible fade in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{this.props.error}</strong> 
                    </div>) 
                    : ''
                }
                {
                    this.props.success 
                    ? (<div class="alert alert-success alert-dismissible fade in">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{this.props.success}</strong> 
                    </div>) 
                    : ''
                }
            </React.Fragment>
        )
    }
}

export default Alert;
