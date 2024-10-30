/*

DATA STRUCTURE

KEY/VALUE

OBJECT {
PROPERTY(key): VALUE
}
*/

let person = {
    name: "Yubor",
    age: 26,
    address:{
        country: "Colombia",
        cityt:"cartago"
    },
    greetings(){
        return  `Hi ${this.name}`
    },
    addNewProperty(property, value){
        return this[property] = value
    }
}


person.addNewProperty("gender", "male");

console.log(person)




