# Loading 加载中

### 介绍

整页加载，用于页面初次加载资源的场景。

### 安装

```tsx
import { LoadingPage } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义大小

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 带文字

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 带文字(竖向排列)

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义文字颜色和大小

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义图标

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 与遮罩层结合

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Loading

### Props

| 属性               | 描述                                            | 类型        | 默认值 |
| ------------------ | ----------------------------------------------- | ----------- | ------ |
| loadingIcon        | 自定义动画                                      | `ReactNode` | `-`    |
| visible            | 可见性                                          | `boolean`   | `true` |
| transitionDuration | 过渡时长，设置加载页渐显、渐隐过渡时长，单位 ms | `number`    | `200`  |

## 主题定制

### 样式变量
