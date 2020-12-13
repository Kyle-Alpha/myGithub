import React, { Component } from 'react'
import { List, Checkbox, Button } from 'antd'

export default class History extends Component {
  constructor(prop) {
    super()
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.history}
        renderItem={(item, index) => (
          <List.Item
          key={item}
            actions={[
              <Button
                type="danger"
                size="small"
                shape="circle"
                onClick={() => {
                  this.props.delTodo(index)
                }}
              >
                X
              </Button>
            ]}
          >
            <Checkbox  onChange={(e) => this.props.checkChange(e, index)}>
              {item}
            </Checkbox>
          </List.Item>
        )}
      />
    )
  }
}
