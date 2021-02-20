
import React from 'react'

export default class MyCom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      flag: true,
      arr: [
        {name: 'lrz', age: '24'},
        {name: 'rmp', age: '26'}
      ]
    }
  }
  // 异步触发函数
  toggleFlag = async () => {
    await this.asyncSetState({flag: !this.state.flag})
    console.log(this.state.flag)
  }
  asyncSetState = (state) => {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }
  componentWillMount () {
    console.log(this)
  }
  changeNav = () => {
    const nav = ['java', 'javascript', 'php']
    this.props.handleName(nav)
  }
  addItem = () => {
    this.setState({
      arr: [...this.state.arr, {name: '111', age: 16}]
    })
  }
  // 渲染函数
  render () {
    const str = this.state.flag ? '是真' : '是假'
    return (
      <div>
        {/* 通过事件来改变状态 */}
        <h1>{str}</h1>
        <div>
          条件渲染：{this.state.flag ? '条件为真' : '条件为假'}
        </div>
        <button onClick={ this.toggleFlag }>toggle</button>
        {/* 父传子，列表渲染,子组件通过触发父组件的方法传值 */}
        {
          this.props.nav.map(v => {
            return (
              <li key={v}>{v}</li>
            )
          })
        }
        <button onClick={ this.changeNav }>update_parent</button>

        {
          this.state.arr.map((v, i) => {
            return (
            <li key={i}>名字是{v.name} 年龄是{v.age}</li>
            )
          })
        }
        <button onClick={ this.addItem }>addItem</button>
      </div>
      
    )
  }
}
