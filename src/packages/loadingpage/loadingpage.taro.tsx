import React, { FunctionComponent, ReactNode } from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface LoadingPageProps extends BasicComponent {
  loadingIcon?: ReactNode
  visible?: boolean
  transitionDuration?: number
}

const defaultProps = {
  ...ComponentDefaults,
  visible: true,
} as LoadingPageProps

const classPrefix = 'nut-loadingpage'

export const LoadingPage: FunctionComponent<
  Partial<LoadingPageProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    className,
    style,
    loadingIcon,
    visible,
    transitionDuration,
  } = {
    ...defaultProps,
    ...props,
  }

  const customStyle = {} as React.CSSProperties
  if (typeof transitionDuration !== 'undefined')
    customStyle.transitionDuration = `${transitionDuration}`

  return (
    <View
      className={classNames(classPrefix, className, {
        [`${classPrefix}-visible`]: visible,
      })}
      style={{
        ...customStyle,
        ...style,
      }}
    >
      {children || (
        <View className={`${classPrefix}-icon-container`}>
          {loadingIcon || <View className={`${classPrefix}-icon`} />}
        </View>
      )}
    </View>
  )
}

LoadingPage.displayName = 'NutLoadingPage'
