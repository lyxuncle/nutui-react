import React from 'react'
import { Drag, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Drag
        direction="x"
        style={{
          top: '200px',
          left: '8px',
        }}
      >
        <Button type="primary">X</Button>
      </Drag>
      <Drag
        direction="y"
        style={{
          top: '200px',
          right: '50px',
        }}
      >
        <Button type="primary">Y</Button>
      </Drag>
    </>
  )
}
export default Demo2
