import React from "react";
import "../Styles/Button.css"

class Button extends React.Component {

  render(){
    return ( 
        <input  className="Button"
                type="submit"
                value={this.props.value}/>
    )
  };
};

export default Button;