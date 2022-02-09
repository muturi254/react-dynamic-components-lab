import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  checkOpacity(opacity) {
    if (opacity >= 0.2) {
      opacity -= 0.1;
      return <ColorBox opacity={opacity} />
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {this.checkOpacity(this.props.opacity)}
      </div>
    )
  }

}

