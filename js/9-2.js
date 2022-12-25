class Pet{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    run =function (){
        alert(`${this.name} is running.`);
    }
}

class Cat extends Pet{
    constructor(name, color, breed){
        super(name, color);
        this.breed = breed;
    }
    viewInfo = function(){
        alert(`이름: ${this.name}, 품종: ${this.breed}, 색깔:${this.color}`);
    }
}
const cheez = new Cat("치즈", "yellow", "코숏");
cheez.viewInfo();
