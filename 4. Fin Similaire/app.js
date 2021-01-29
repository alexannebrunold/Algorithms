function finSimilaire(str, fin) {
  const lastLettersOfCurrentWord = str.slice(-fin.length)
  return lastLettersOfCurrentWord === fin ? 'La fin est similaire' : 'La fin ne correspond pas'
}

console.log(finSimilaire('ours', 'rs'))
