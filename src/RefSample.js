import React, { Component } from 'react'

export default class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }
  render() {
    return (
        <div>
            <input type="text" ref={this.input} />
      </div>
    )
  }
}
