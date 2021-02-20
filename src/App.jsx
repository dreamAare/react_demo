
import React from 'react'
import MyCom from './componets'
import Myform from './Form'

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nav: ['vue', 'react']
    }
  }
  handleChange = nav => {
    this.setState({
      nav
    })
  }
  // 渲染函数
  render () {
    return (
      <div>
        {/* <MyCom nav={this.state.nav} handleName={ this.handleChange }></MyCom> */}
        <Myform></Myform>
      </div>
      
    )
  }
}
