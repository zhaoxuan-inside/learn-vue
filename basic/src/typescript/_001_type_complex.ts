// 联合类型
type union_type = String | Number
// 交叉类型
type cross_type = { name: String; age: Number }

// 接口类型
interface Animal {
    name: String
    age: Number
}

// 接口类型可以继承以及多继承
interface CatFamily extends Animal {
    canineTooth: Number
}

// 类类型
class Human {
    name: String
    private age: Number

    constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }
}

// 类类型可以继承，但是只能单继承
class Student extends Human {
    private stuId: Number
    constructor(name: String, age: Number, stuId: Number) {
        super(name, age)
        this.stuId = stuId
    }
}

// 和继承相反，提取指定类的部分属性
type NamedHuman = Pick<Human, 'name'>

// 和继承与提取指定属性相反，忽略指定类的部分属性
type AgedHuman = Omit<Human, 'name'>
