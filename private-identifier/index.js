class Person {
    #level // it is required for private fields
    constructor(name, profession) {
        this.name = name
        this.profession = profession
        this.#level = this.calculateLevel()
    }

    get currentLevel(){
        return this.#level
    }

    calculateLevel(){
        switch (this.profession) {
            case 'student':
                return 1
            case 'teacher':
                return 10
            default:
                return 0
        }
    }

}

const user = new Person('test', 'student')
console.log(user.currentLevel)
