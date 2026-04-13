type union_type = String | Number
type cross_type = { name: String; age: Number }

interface Animal {
    name: String
    age: Number
}

interface CatFamily extends Animal {
    canineTooth: Number
}

class Human {
    private name: String
    private age: Number

    constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }
}

class Student extends Human {
    private stuId: Number
    constructor(name: String, age: Number, stuId: Number) {
        super(name, age)
        this.stuId = stuId
    }
}
