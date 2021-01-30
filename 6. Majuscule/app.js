function maj(str) {
  const arrayOfWords = str.split(' ')
  const newArray = []
  for (let i = 0; i < arrayOfWords.length; i++) {
    const uppercaseFirstLetterOfWord = arrayOfWords[i][0].toUpperCase()
    const exchangeFirstLetter = arrayOfWords[i].replace(
      arrayOfWords[i].charAt(0),
      uppercaseFirstLetterOfWord,
    )
    newArray.push(exchangeFirstLetter)
  }
  const arrayOfWordsToArray = newArray.join(' ')
  return arrayOfWordsToArray
}

console.log(maj("Les sanglots longs des violons de l'automne..."))
