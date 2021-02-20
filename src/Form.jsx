import React from 'react'

export default class Myform extends React.Component{
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.myForm = React.createRef()
  }
  handleSubmit = (e) => {
   e.preventDefault() // 阻止浏览器提交表单会刷新页面的默认事件
   console.log(this.myForm.current[0].value)
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  render () {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmit}>
          受控组件，通过onChange事件去跟新数据
          <input type="text" onChange={this.handleChange} value={this.state.value}/>
          <button type="submit">提交</button>
        </form> */}
        
        {/* 非受控组件，通过creatRef方法操作 */}
        <form ref={ this.myForm } onSubmit={this.handleSubmit}>
          <input type="text" name="user"/>
          <input type="password" name="password"/>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}