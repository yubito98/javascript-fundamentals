function Car(make, model,year, isRunning){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning || false;
    this.start = () =>{
        this.isRunning = true;
    };
    this.stop = () =>{
        this.isRunning = false;
    }
}

const mazda = new Car("Mazda","CX-30","2024", false);

console.log(mazda)

console.log(mazda.isRunning)

mazda.start()

console.log(mazda.isRunning)