export default class MSchool {
  // 构造时传进来的参数
  constructor(name, age) {
    // 这里的this指的是构造函数作用域的this,所以我还需要改变this的指向
    this.name = name
    this.age = age
  }
  // 
  sayName(name) {
    alert(name)
    alert(this.name)
  }
  sayAge() {
    alert(this.age)
  }
}

