import React, { Component } from 'react';
export default class TodoInput extends Component {
  render() {
    //input的值
    return <input type="text" defaultValue={this.props.content}
      //回车事件  给 this.submit 绑定一个 this
      onKeyPress={this.submit.bind(this)} />
  }
  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
}