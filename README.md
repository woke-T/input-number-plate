# input-number-plate

## 介绍
input-number-plate是基于Vue的一款虚拟键盘，用于车牌号输入。简洁，清爽。

## 如何使用

```
1.安装组件
npm install input-number-plate --save
```

```
2.vue中注册插件
import InputCar from 'input-number-plate'

Vue.use(InputCar)
```

```
3.页面使用
<InputCar @submit="submit"></InputCar>

submit()方法提供了，输入完整车牌号后的回调函数,参数为输入的车牌号
```



