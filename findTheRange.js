// Starting array
let arr = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

//one solution
let min = Math.min(...arr)
let max = Math.max(...arr)
 
console.log(min)
console.log(max)

/* devmountain solutions
/let array = [28, 43, -12, 30, 4, 0, -36]

let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
  if (smallest > array[i]) {
    smallest = array[i]
  } else if (largest < array[i]) {
    largest = array[i]
  }
}

console.log(smallest, largest) */ 