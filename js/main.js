let level = 0,
  buttonEasy = document.querySelector('#easy'),
  buttonHard = document.querySelector('#hard'),
  tamName = document.querySelector('#tamName'),
  tamagotchiHappiness,  tamagotchiFood,  tamagotchiClean,
  tamHappiness = document.querySelector('#tamHappiness'),
  tamFood = document.querySelector('#tamFood'),
  tamClean = document.querySelector('#tamClean'),
  time = 0;

tamName.innerHTML = prompt("Tamagotchi's name");

buttonEasy.addEventListener('click', function () {
	level = 0;
});

buttonHard.addEventListener('click', function () {
	level = 1;
});

function randomInt(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(level === 0) {
	tamagotchiHappiness = randomInt(50, 100);
	tamagotchiFood = randomInt(50, 100);
	tamagotchiClean = randomInt(50, 100);
} else {
	tamagotchiHappiness = randomInt(50, 70);
	tamagotchiFood = randomInt(50, 70);
	tamagotchiClean = randomInt(50, 70);
}

tamHappiness.innerHTML = tamagotchiHappiness;
tamFood.innerHTML = tamagotchiFood;
tamClean.innerHTML = tamagotchiClean;


class Tamagotchi {
	constructor(happiness, food, clean) {
	    this.happiness = parseInt(happiness);
	    this.food = parseInt(food);
	    this.clean = parseInt(clean);
	}

  	statisticsValue() {
	    if(level === 0) {
	    	this.happiness -= 3;
	    	this.food -= 3;
	    	this.clean -= 3;
	    } else {
	    	this.happiness -= 5;
	    	this.food -= 5;
	    	this.clean -= 5;
	    }
	  }

  	eat() {
	    if(this.food >= 100) {
	    	this.clean -= 20;
	    } else {
	    	this.food += 30;
	    	this.clean -= 20;
	    }
	}

  	wash() {
	    if(this.clean >= 100) {
	    	this.happiness -= 20;
	    } else {
	    	this.happiness -= 20;
	    	this.clean += 40;
	    }
  	}

  	run() {
	    if(this.happiness >= 100) {
	    	this.food -= 10;
	    } else {
	    	this.happiness += 15;
	    	this.food -= 10;
	    }
  	}
}

gameTamagotchi = new Tamagotchi(tamHappiness.innerHTML, tamFood.innerHTML, tamClean.innerHTML);
console.log(gameTamagotchi);

//Tamagochi's actions

(function() {
	time = 0;
	setInterval(function () {
  		time += 0.001;
	}, 1)
})();

(function() {
	setInterval(function () {
	    gameTamagotchi.statisticsValue();
	    tamHappiness.innerHTML = gameTamagotchi.happiness;
	    tamFood.innerHTML = gameTamagotchi.food;
	    tamClean.innerHTML = gameTamagotchi.clean;
	}, 3000)
	if(gameTamagotchi.happiness <= 0 || gameTamagotchi.food <= 0 || gameTamagotchi.clean <= 0) {
	    alert('You forgot about him and tamagotchi died!!!');
	    alert('He lived ' + time.toFixed(1) + 's');
	    location.reload();
	}
})();

document.querySelector('#eat').addEventListener('click', function () {
  gameTamagotchi.eat();
  if(gameTamagotchi.food <= 0 || gameTamagotchi.clean <= 0) {
    alert('You forgot about food and tamagotchi died!!!');
    alert('He lived ' + time.toFixed(1) + 's');
    location.reload();
  } else {
    tamFood.innerHTML = gameTamagotchi.food;
    tamClean.innerHTML = gameTamagotchi.clean;
  }
});

document.querySelector('#wash').addEventListener('click', function () {
  gameTamagotchi.wash();
  if(gameTamagotchi.happiness <= 0 || gameTamagotchi.clean <= 0) {
    alert('You forgot about wash and tamagotchi died!!!');
    alert('He lived ' + time.toFixed(1) + 's');
    location.reload();
  } else {
    tamHappiness.innerHTML = gameTamagotchi.happiness;
    tamClean.innerHTML = gameTamagochi.clean;
  }
});

document.querySelector('#run').addEventListener('click', function () {
  gameTamagotchi.run();
  if(gameTamagotchi.happiness <= 0 || gameTamagotchi.food <= 0) {
    alert('You forgot about run and tamagotchi died!!!');
    alert('He lived ' + time.toFixed(3) + 's');
    location.reload();
  } else {
    tamHappiness.innerHTML = gameTamagotchi.happiness;
    tamFood.innerHTML = gameTamagotchi.food;
  }
});



