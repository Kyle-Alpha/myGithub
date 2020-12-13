import React, { Component } from 'react'
import { Button, Row, Col, Input, Card,Divider,message  } from 'antd'
import History from './historyList.js'
import HadDoneList from './hadDoneList.js'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      history:['吃饭'],
      hadDone:['睡觉'],
      todoValue:''
    }
  }
  handleNumAdd = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  addTodo=()=>{
    let {history,todoValue} = this.state
    if(!todoValue) return message.warning('请填写内容')
    if(history.includes(todoValue)) return message.warning('已添加过')
    this.setState({
      history:[todoValue,...history],
      todoValue:''

    })
  }
  handleInput = (e)=>{
    this.setState({
      todoValue:e.target.value
    })
  }
  delTodo = (index)=>{
    let {history} = this.state
    history.splice(index,1)
    this.setState({
      history
    })
  }
  enterPress=(e)=>{
    console.log(e)
    if(e.keyCode === 13) {
      this.addTodo()
  }
  }
  cancleTodo=(index)=>{
    let {history,hadDone} = this.state
    let value = hadDone.splice(index,1)
    history.push(value)
    this.setState({
      history,
      hadDone
    })
  }
  onChange = (e,index) => {
    let {history,hadDone} =this.state
    console.log(`checked = ${e.target.checked}-${index}`)
    if(e.target.checked){
      let value = history.splice(index,1)
      hadDone.push(value)
      this.setState({
        history,hadDone
      })
    }
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <Card title="Todo List" style={{ width: 600,textAlign:'center' }}>
              <Row justify="space-between">
                <Col span={20}>
                  <Input placeholder="请输入待办事项" value={this.state.todoValue} onKeyUp={this.enterPress} onChange={(e)=>this.handleInput(e)} />
                </Col>
                <Col span={3}>
                  <Button type="primary"  onClick={()=>this.addTodo()}>确定</Button>
                </Col>
                <History history ={this.state.history} delTodo={this.delTodo} checkChange={this.onChange} />
                <Divider />
                <HadDoneList hadDone={this.state.hadDone} cancleTodo={this.cancleTodo}></HadDoneList>
              </Row>
              
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
