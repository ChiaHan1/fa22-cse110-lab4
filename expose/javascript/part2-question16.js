let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// for each car in statistics
for (car in statistics) {
    // check if the first character of the property is 'r' 
    // and if the value of the property is odd
    if (car[0] === 'r' || statistics[car] % 2) {
        // print out the value of the property if 
        // one or more conditions are true
        console.log (statistics[car]);
    }
}