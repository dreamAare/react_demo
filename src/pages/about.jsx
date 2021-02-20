import React from 'react'
export default class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log(props)
  }
  componentDidMount () {
    console.log(this.props)
  }
  handleBack () {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <div>about</div>
        <button onClick={this.handleBack.bind(this)}>回到首页</button>
      </div>
    )
  }
}