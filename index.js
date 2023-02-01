function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation >= 42) {
        const distInBlocks=pickUpLocation - 42;
        return distInBlocks;
    }
    else{
        const distInBlocks=42-pickUpLocation;
        return distInBlocks;
    }
      
}


function distanceFromHqInFeet(someValue) {
   const distInBlocks= distanceFromHqInBlocks(someValue);
   return distInBlocks * 264

}

function distanceTravelledInFeet(start, destination) {
    let blocksTravelled; 
    if (start>destination){
        blocksTravelled = start-destination 
    }
    else{
        blocksTravelled= destination-start
    }
    
    const totalDistance= blocksTravelled * 264
    return totalDistance
}
function calculatesFarePrice(start, destination){
    const totalDistance = distanceTravelledInFeet(start, destination)
    if (totalDistance <= 400){
        return 0
    }
    else if (totalDistance > 400 && totalDistance <= 2000){
        return (totalDistance -400) * .02
    }
    else if (totalDistance > 2000 && totalDistance <= 2500){
        return 25
    }
    else return "cannot travel that far"
}