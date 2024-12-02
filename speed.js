
function calculatePoints(speed) {
    const limit = 70; // Speed limit in km/s
    const points = 2; // Points for every 5 km/s over the limit

    if (speed <= limit) {//compares the speed and the speed limit
        speeding = "OK"; // No points if speed is within or below the limit
    }else  {

    // Calculate excess speed
    const excessSpeed = speed - limit;

    // Calculate points (2 points for every 5 km/s)
     speeding = Math.floor(excessSpeed / 5) * points;  //math.floor rounds off to make sure the speed is near whole number not points
     
     }if(speeding > 2){
        alert("LICENCE SUSPENDED! ")
     }

    return speeding;
    
}

// Example usage
// Replace with the driver's speed+
let speed = prompt("Please enter the current speed of the vehicle: ");//prompt entry of the vehicle's speed in a pop up massege box
calculatePoints(speed);
alert(`The driver speending  points is  ${speeding} points`);


