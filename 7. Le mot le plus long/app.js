function trouverLongueurMax(str) {
  const arrayofWords = str.split(' ')
  let lengthOfMostLongestWord = 0
  let mostLongestWord

  for (let i = 0; i < arrayofWords.length; i++) {
    let currentWord = arrayfWords[i]

    if (lengthOfMostLongestWord <= arrayofWords[i].length) {
      currentWord = arrayofWords[i]
      lengthOfMostLongestWord = arrayofWords[i].length
      mostLongestWord = word
    }
  }

  return mostLongestWord
}

console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."))
