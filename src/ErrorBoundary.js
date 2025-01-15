import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
        console.log(error, info)
    }
    render() {
      if (this.state.error) {
          return <div>예외가 발생했습니다.</div>
      }
      return (
      this.props.children
    )
  }
}
