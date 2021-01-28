function conversionCelsiusToFareinheit(degreesCelsius) {
  const calculCelsiusToFareinheit = (degreesCelsius * 9) / 5 + 32

  if (typeof degreesCelsius === 'number') {
    return calculCelsiusToFareinheit
  } else {
    return console.log('Données en entrée non correctes.')
  }
}

// console.log(conversionCelsiusToFareinheit(50))

// ----------------- ÉNONCÉ -----------------

// Créer un algorithme qui sert à convertir des degrés Celsius
// en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous
// devez retourner "Données en entrée non correctes."
// Bonne Chance !

// Convertir un degrés Celsius en Fahrenheit
// La formule : Celsius * 9/5 + 32
