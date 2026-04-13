class Human<T> {
    private name: String
    private age: Number
    private hobby: T

    constructor(name: String, age: Number, hobby: T) {
        this.name = name
        this.age = age
        this.hobby = hobby
    }
}

function display<T>(content: T) {
    console.log(content)
}

// 条件泛型
type IsString<T> = T extends String ? true : false

const human = new Human<string>('zhangsan', 18, 'basketball')
console.log(human as Human<string>)
console.log(human instanceof Human)
console.log(typeof human)
