function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperatrue, convert) {
  const input = parseFloat(temperatrue);
  if (isNaN(input)) return '';
  const ouput = convert(input);
  const rounded = Math.round(ouput * 1000) / 1000;
  return rounded.toString();
}

export {
  toCelsius,
  toFahrenheit,
  tryConvert
}