//var num = parseInt(gets())
var array = [8, 10, 8, 260, 4, 10, 10, undefined]

//for (let i = 1; i < num; i++) { array.push(parseInt(gets())) }

let sortedArray = array.sort((a, b) => a - b)

console.log(sortedArray)

let printValues = (currentValue, count) => console.log(`${currentValue} aparece ${count} vez(es)`)

function findRepitedArrayNumbers(array) {
  let currentValue = array[0]
  let count = 0;

  while (array.length) {
    if (array[0] == currentValue) {
        count++
        array.shift()
    } else {
      printValues(currentValue, count)
      currentValue = array[0]
      count = 0
    }
  }
}

findRepitedArrayNumbers(sortedArray)
