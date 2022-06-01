// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){
    // Sorting first the numbers in the array in ascending order
    ages.sort(function(a, b){return a-b});

    // Removing the duplicates in the array
    let uniqueAges = [...new Set(ages)];

    // We create an oldest ages array, then we use the for loop to get the last 2 elements which are the two highest numbers
    oldestAges = []
    for(i=uniqueAges.length-2; i<=uniqueAges.length-1; i++){
        oldestAges.push(uniqueAges[i])
    }
    console.log(`The oldest ages in [${ages}] are: [${oldestAges}]`)
}
twoOldestAges([1, 2, 10, 8])
console.log('=====')
twoOldestAges([78,23,67,56,96,12,5,23])

