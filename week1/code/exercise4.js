var cars = 100;
var spaceInACar = 4.0;
var drivers = 30;
var passengers = 90;
var carsNotDriven = cars - drivers;
var carsDriven = drivers;
var carpoolCapacity = carsDriven * spaceInACar;
var averagePasengersPerCar = passengers / carsDriven;
console.log("There are", cars, "cars available.");
console.log("There are only", drivers, "Drivers available.");
console.log("There will be", carsNotDriven, "empty today");
console.log("We have", passengers, "to carpool today");
console.log("We need to put about", averagePasengersPerCar, "in each car.");