import React from 'react'
import { Row, Col, Image } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <Row gutter={10}>
        {[
          'top',
          'bottom',
          'center',
          'left',
          'right',
          'top left',
          'top right',
          'bottom left',
          'bottom right',
        ].map((mode) => {
          return (
            <Col span="8" key={mode}>
              <Image src={src} mode={mode as any} width="80" height="80" />
            </Col>
          )
        })}
      </Row>
    </>
  )
}
export default Demo7
