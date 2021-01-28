function conversionCelsiusToFareinheit(degreesCelsius) {
  const calculCelsiusToFareinheit = (degreesCelsius * 9) / 5 + 32

  if (typeof degreesCelsius === 'number') {
    return calculCelsiusToFareinheit
  } else {
    return console.log('Données en entrée non correctes.')
  }
}
