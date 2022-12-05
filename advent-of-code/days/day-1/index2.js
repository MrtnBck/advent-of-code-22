import {sumArr} from "./index.js"

function findThreeLargestNumbers(array) {
    return [...array].sort((a, b) => a - b).slice(-3);
  }

const threeLargest = findThreeLargestNumbers(sumArr)

let topTotal = 0
threeLargest.forEach(number =>{
    topTotal = topTotal + number
})
console.log("result for task2: " + topTotal)
