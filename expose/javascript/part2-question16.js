// Question 16
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };

for(const key in statistics) {
    const value = statistics[key];
    // Only print if the property starts with 'r' or the value is odd
                        // Check if remainder is not equal to zero meaning the value is odd
    if(key.startsWith('r') || value % 2 !== 0) {
        console.log(value);
    }
}