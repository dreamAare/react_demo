import React from 'react';
import { Table } from 'antd'

export default class myTabel extends React.Component{
  constructor() {
    super()
    this.state = {
      data: [{key: '1', name: '刘任志', gender: '男'}, {key: '2', name: 'lrz', gender: '女'}],
      cols: [{title: '性别', dataIndex: 'gender'},{title: '姓名', dataIndex: 'name'}]
    }
  }
  render() {
    return (
      <div>
        <Table bordered dataSource={this.state.data} columns={this.state.cols}></Table>
      </div>
    )
  }
}