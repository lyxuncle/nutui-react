import React from 'react'
import { Avatar, Cell } from '@nutui/nutui-react'

const Demo9 = () => {
  return (
    <Cell>
      <Avatar
        size="normal"
        style={{ marginInlineEnd: 0 }}
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <div style={{ marginLeft: '10px' }}>
        <div style={{ fontSize: '16px' }}>标题</div>
        <div style={{ fontSize: '12px' }}>描述信息</div>
      </div>
    </Cell>
  )
}
export default Demo9
