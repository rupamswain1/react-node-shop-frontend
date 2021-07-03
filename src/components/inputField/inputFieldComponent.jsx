import React from 'react';
import './inputFieldStyle.scss'
class InputField extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:this.props.name,
            value:this.props.value,
            type:this.props.type,
            enabled:this.props.enabled,
            onChangehandler:this.props.onChangehandler,
            placeHolder:this.props.placeHolder
        }
    }
    render(){
        console.log(this.state.value)
        return(
            <div className="inputFieldContainer">
                <input className={`inputField-${this.state.name}`}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    value={this.state.value} 
                    id={this.state.name} 
                    name={this.state.name} 
                    type={this.state.type} 
                    disabled={this.state.enabled} 
                    onChange={e=>this.state.onChangehandler(e.target)}
                />
                <label className={`inputFieldLabel-${this.state.value?'shrink':''}`} onClick={e=>document.getElementById(this.state.name).focus()} for={`inputField-${this.state.name}`}>
                    {this.state.placeHolder}
                </label>
            </div>
        );
    };
}

export default InputField;