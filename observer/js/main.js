//data die veranderd onthouden
//zijn kinderen informeren als iets veranderd
//kids kunnen er 0 zijn, of 1 tot 100000
class Subscriber{
    constructor(number, ) {
        console.log("ik wordt aan gemaakt met " + number)
        this.number = number;
        this.Observers = [];
        console.log("mijn this.number is nu " + this.getState())
    }

    updateState(newState) {
        console.log("mijn nummer is nu " + this.getState())
        this.number = newState;
        console.log("ik update mijn nummer ")
        console.log("mijn nummer is nu " + this.getState())
        this.notify();
        
    }
    getState() {
        return this.number;
    }

    notify() {
        console.log("ik informeer");
        for (let i = 0; i < this.Observers.length; i++){
            this.Observers[i].update();
        }
    }

    attach(Observer) {
        this.Observers.push(Observer);
    }

}

class Observer{
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(this.name + " :ik ben geupdate!");
    }
}

let SUB__1 = new Subscriber(2);

let Observer__1 = new Observer("Observer 1");
SUB__1.attach(Observer__1);

let Observer__2 = new Observer("Observer 2");
SUB__1.attach(Observer__2);
