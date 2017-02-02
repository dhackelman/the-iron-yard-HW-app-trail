(function() {"use strict";

  const userForm = document.querySelector('.user-input');

  const mountaineerCreator = (function() {
    let mountaineers = []; //array to hold all my people

    class Person {
      constructor (name, food, health) {
        this.name = name;
        this.food = food;
        this.heath = health;
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

    }

    const nacho = new Person('Nacho', 45, 'good');
    const chalupaBatman = new Person('Chalupa-Batman', 50, 'good');

    function createNewMounty(context) {
      return new Person(context.name, context.food, context.health);
    }

    console.log(mountaineers);

    class Wagon {
      constructor (name, passengers, status) {
        this.name = name;
        this.passengers = mountaineers;
        this.status = status;
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

    function wagonAdd() {
      let wagonPassengers = document.querySelector('.people-list');
      wagonPassengers.innerHTML = "";
      if (mountaineers.length === 8) {
        alert("Too many passengers! Everyone died in a terrible crash! Start Over!");
        location.reload();
      } else if (mountaineers.length < 9 ) {
        for (var i = 0; i < mountaineers.length; i++ ) {
          let personInfo = "<p>" + "Name: " + " " + mountaineers[i].name + " "+" " +"Food: " + " "+ mountaineers[i].food +" " +"Health: "+ " " + mountaineers[i].health;
          const passenger = document.createElement("li");
          passenger.innerHTML = personInfo;
          wagonPassengers.appendChild(passenger);
        }
      }
    }

    const wagonForce1 = new Wagon("Wagon", mountaineers, true);

    return {
      create: createNewMounty,
      add: wagonAdd
    }

  })();


  function getData(fields) {
    const valuesObj = {
      name: fields[0].value,
      food: fields[1].value,
      health: fields[2].value
    }

    return valuesObj;
  }

  userForm.addEventListener('submit', () => {
    event.preventDefault();
    const context = getData(event.target);
    mountaineerCreator.create(context);
    mountaineerCreator.add();
    console.dir(event.target);
    userForm.reset();
  });

})();
