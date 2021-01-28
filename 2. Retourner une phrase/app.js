function retourneLaPhrase(str) {
  strToArrayOfLetters = str.split('')
  reverseArrayOfLetters = strToArrayOfLetters.reverse()
  arrayOfLettersToString = reverseArrayOfLetters.join('')

  //str.split('').reverse().join()
  return arrayOfLettersToString
}

console.log(retourneLaPhrase('Bonjour à tous'))
