// Code your solution here
function findMatching(arrDrivers, matchDrivers){
return arrDrivers.filter( driver => driver.toLowerCase() === matchDrivers.toLowerCase());

}

function fuzzyMatch (arrDrivers, firstLetter) {
    return arrDrivers.filter (letters => letters.startsWith(firstLetter))
}

function matchName (arrDrivers, nameMatch) {
    return arrDrivers.filter (name => name.name === nameMatch)
}