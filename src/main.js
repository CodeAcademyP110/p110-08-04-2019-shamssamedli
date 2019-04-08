"use strict";

class Human {
    constructor(username, age)
    {
        this.username = username;
        this.age = age;
    }

    showInfo(){
        return `${this.username} ${this.age}`;
    }
}
const samir = new Human("Samir Dadash-zade", 28);
console.log(samir.showInfo());
