function add(...values) {
  return values.reduce((el, acc) => el + acc);
}

function substrac(...values) {
  return values.reduce((el, acc) => el - acc);
}

function multiply(...values) {
  return values.reduce((el, acc) => el * acc);
}

function divide(...values) {
  return values.reduce((el, acc) => el / acc);
}


module.exports = {add, substrac, multiply, divide}