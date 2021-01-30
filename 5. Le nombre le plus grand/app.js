function plusGrandNb(arr) {
  const arrayWithLargestNumbers = []
  for (let i = 0; i < arr.length; i++) {
    const numberInArray = arr[i]
    arrayWithLargestNumbers.push(Math.max(...numberInArray))
  }
  return arrayWithLargestNumbers
}

console.log(
  plusGrandNb([
    [1, 5, 8, 3],
    [15, 47, 88, 26],
    [32, 35, 37, 39],
    [3000, 1001, 857, 1],
  ]),
)
