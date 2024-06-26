import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

  render() {
    const { count, incrementCount} = this.props
    return (
      <div>
            <h2 onMouseOver={incrementCount}>
                Hovered {count} time
            </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 1)
