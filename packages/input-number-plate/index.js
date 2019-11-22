import InputCar from './src/input-number-plate'

InputCar.install = function(Vue) {
  Vue.component(InputCar.name,InputCar)
}

export default InputCar;