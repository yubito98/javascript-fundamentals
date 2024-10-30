class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    makeSound(){
        console.log("rar");
    }
}

class Perro extends Animal {
    constructor(name, type, race){
        super(name, type);
        this.race = race;
    }
}