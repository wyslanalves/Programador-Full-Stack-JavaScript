let spaceship = "Golias";
let velocity = 80;

console.log(velocity == 90);// false
console.log(spaceship == "Golias");// true
console.log(velocity == "80");// true
console.log(velocity === "80");// false
console.log(velocity != 80);// false
console.log(velocity != 70);// true
console.log(velocity != 80);// false
console.log(velocity !== 80);// true
console.log(velocity > 70);// true
console.log(spaceship > "Helmet");// false
console.log(velocity >= 90);// false
console.log(velocity >= 80);// true
console.log(spaceship >= "Golias");// true
console.log(velocity < 120);// true
console.log(spaceship < "Helmet");// true
console.log(velocity <= 130);// true
console.log(spaceship <= "Helmet");// true