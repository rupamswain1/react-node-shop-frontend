import React from 'react';
import './primaryButton.style.scss'
class PrimaryButton extends React.Component{
    render(){
        return(
            <div className="primaryButtonConrainer">
                <button 
                    className={`primaryButton-${this.props.name}`}
                    name={this.props.name}
                    id={this.props.name}
                    type={this.props.type}
                    disabled={!this.props.enabled}
                    >
                    {this.props.value}
                </button>
            </div>
        )
    }
}
export default PrimaryButton