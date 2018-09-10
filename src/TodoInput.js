import React, { Component } from 'react';
import './TodoInput.css'

export default class TodoInput extends Component {
  render() {
    //input的值
    return <input type="text" value={this.props.content}
      className="TodoInput"
      onChange={this.changeTitle.bind(this)}
      //回车事件  给 this.submit 绑定一个 this
      onKeyPress={this.submit.bind(this)} />
  }
  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
  changeTitle(e) {
    this.props.onChange(e)
  }
}