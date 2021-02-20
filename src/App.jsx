
import React from 'react'
// import MyCom from './componets'
// import Myform from './Form'
// import MyTabel from './table'
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nav: ['vue', 'react'],
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
        {/* <Myform></Myform> */}
        {/* <MyTabel></MyTabel> */}
        <Router>
          <ul>
            <li><Link to="/home">去首页</Link></li>
            <li><Link to={{
              pathname: '/about',
              search: '?name=lrz',
              state: {flag: false}
            }}>去关于页面</Link></li>
          </ul>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Router>
      </div>
      
    )
  }
}
