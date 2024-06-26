import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Abudz'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Abudz'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent Comp Render')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
