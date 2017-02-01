"use strict";

    let mountaineers = []; //array to hold all my people
    const addPassengers = document.querySelector('.add-passenger');
    const wagonPassengers = document.querySelector('.people-info');
    const userForm = document.querySelector('.user-input');
    class Person {
      constructor (name, food, health) {
        this.name = name;
        this.food = food;
        this.heath = health;
        this.hunter = true;
        mountaineers.push(this);

      }

      eat() {
        this.food = (this.food-10);//take 10 away from food every time they eat
        return this.food;
      }

      hunt() {
        // Math.random() generates 0-20 food items
        if (this.hunter = true){
          let moreFood = Math.floor(Math.random() * 20) + 0;
          return moreFood;
        } else {
          return 0;
        }
      }

      buildPerson(){

      }

    }


    function getFormValues(fields) {
        const personObj = {
            name: fields[1].value,
            food: fields[2].value,
            health: fields[3].value,
          }
        return personObj;
      }

    userForm.addEventListener('submit', ()=> {
      event.preventDefault();
      const context = getFormValues(event.target);
      buildPerson(context);
      console.dir(event.target);
      userForm.reset();
    });


    const nacho = new Person('Nacho', 45, true);
    const chalupaBatman = new Person('Chalupa-Batman', 50, true);


    class Wagon {
      constructor (name, passengers, status) {
        this.name = name;
        this.passengers = mountaineers;
        this.status = status;
        this.add();
      }

      add() {
        let wagonPassengers = document.querySelector('.people-list');
        for (var i = 0; i < mountaineers.length; i++ ) {
          var passenger = document.createElement("li");
          passenger.innerHTML = mountaineers[i].name +  mountaineers[i].food + mountaineers[i].health;
          wagonPassengers.appendChild(passenger);
        }
      }

      checkFood(){
        let totalFood = 0;
        for (var i = 0; i < mountaineers.length; i++) {
          totalFood = totalFood + mountaineers[i].food;
        }
        return totalFood;
      }

      checkHealth() {
        //# of passengers who are sick (or dead?)
      }
    }

    const wagonForce1 = new Wagon("Wagon", mountaineers, true);
