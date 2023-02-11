class Parent {
    constructor(name){
        this.name = name
    }

    extendedMethod(){
        console.log('name: ', this.name)

        if(this instanceof Child){
            console.log(`type: ${this.type}`)
        }
    }
}

class Child extends Parent {
    constructor(name){
        super(name)
        this.type = 'extended'
    }
}

const parent = new Parent('parent')
parent.extendedMethod()
const child = new Child('child')
child.extendedMethod()