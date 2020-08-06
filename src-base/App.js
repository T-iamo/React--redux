import React,{ Component } from 'react';
class App extends Component{
  constructor(props){
    super(props)

    //初始化状态
    this.state = {
      pwd: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
    handleSubmit(e) {
      const name = this.nameInput.value
      const {pwd} = this.state
      alert(`您的用户名为${name},密码${pwd}`)
      //组织事件的默认行为(不让这玩意提交)
      e.preventDefault()

    }
    handleChange(e) {
      //读取输入值
        const pwd =e.target.value
      //更新pwd状态
        this.setState({pwd})
    }
  render() {
    return (
      <form action='/test' onSubmit={this.handleSubmit}>
          用户名 ：<input
          style={{marginRight: '15px'}}
          type='text' ref={input => this.nameInput = input} />

          密码 ：<input
          type='passwrod'
          value={this.state.pwd}
          onChange={this.handleChange} />
          <a href='#'><input type='submit' value='登录' /></a>
      </form>
    )
  }
}
  

export default App;
