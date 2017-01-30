(function() {
    "use strict";

    let mountaineers = []; //array to hold all my people

    class Person {
      constructor (name, food, health) {
        this.name = name;
        this.food = food;
        this.heath = health;
        this.hunter = true;

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

    }

    const nacho = new Person('Nacho', 45, true);
    const taco = new Person('Taco', 20, false);
    const chalupaBatman = new Person('Chalupa-Batman', 50, true);
    const barbie = new Person('Barbie', 10, false);
    console.log(nacho.eat()); //make sure that Nacho's food get's decremented
    console.log(nacho.hunt()); //randomly generate # to add to Nacho's food (eventually display food total of this.food + this.hunt (moreFood))
    console.log(mountaineers); //make sure all my Persons get printed to mountaineers

    class Wagon {
      constructor (name, passengers, status) {
        this.name = name;
        this.passengers = mountaineers;
        this.status = status;
        this.add();
      }

      add() {
        mountaineers.push(nacho);
        mountaineers.push(taco);
        mountaineers.push(chalupaBatman);
        mountaineers.push(barbie);
        if (mountaineers.length > 4) {
          alert('too many people!');
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

    const wagonForce1 = new Wagon("Wagon Force 1", mountaineers, true);
    console.log(wagonForce1);
    console.log(wagonForce1.checkFood());


})();
