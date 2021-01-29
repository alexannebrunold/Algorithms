function factoriser(num) {
  for (let i = 0; i <= num; i++) {
    result = (i * i - 1) * i
  }
  return result
}

console.log(factoriser(5))
