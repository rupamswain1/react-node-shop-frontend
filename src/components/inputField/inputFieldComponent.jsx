import React from 'react';
import './inputFieldStyle.scss'
class InputField extends React.Component{
    //props required: name,value,type,enabled,errorMsg,placeHolder,onChangehandler
    render(){
        
       //console.log(this.props)
        return(
            <div className="inputFieldContainer">
                <input className={`inputField-${this.props.name}-${this.props.errorMsg?'error':''}`}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    value={this.props.value} 
                    id={this.props.name} 
                    name={this.props.name} 
                    type={this.props.type} 
                    disabled={!this.props.enabled} 
                    onChange={e=>this.props.onChangehandler(e.target)}
                />
                <label className={`inputFieldLabel-${this.props.value?'shrink':''}-${this.props.errorMsg?'error':''}`} onClick={e=>document.getElementById(this.props.name).focus()} htmlFor={`inputField-${this.props.name}`}>
                    {this.props.placeHolder}
                </label>
                {this.props.errorMsg?<div className="errorMessageForInput">{this.props.errorMsg}</div>:''}
                
            </div>
        );
    };
}

export default InputField;