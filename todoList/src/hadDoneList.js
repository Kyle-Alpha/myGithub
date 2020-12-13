import React, { Component } from 'react'
import { List, Button } from 'antd'

export default class hadDoneList extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.hadDone}
        renderItem={(item,index) => (
          <List.Item style={{paddingLeft:25,color:'#ccc',textDecorationLine: 'line-through'}}
            actions={[
              <Button
                type="danger"
                size="small"
                shape="circle"
                onClick={() => {this.props.cancleTodo(index)}}
              >
                X
              </Button>
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    )
  }
}
