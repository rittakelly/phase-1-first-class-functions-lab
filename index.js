// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice (2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

function fareDoubler(things) {
    const doubles = createFareMultiplier(2) 
    return doubles(things)
    
}

function fareTripler(stuff) {
    const triples = createFareMultiplier(3)
    return triples(stuff)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}