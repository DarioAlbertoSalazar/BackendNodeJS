export function add(...values) {
    return values.reduce((el, acc) => el + acc);
  }
  
  export function substrac(...values) {
    return values.reduce((el, acc) => el - acc);
  }
  
  export function multiply(...values) {
    return values.reduce((el, acc) => el * acc);
  }
  
  export function divide(...values) {
    return values.reduce((el, acc) => el / acc);
  }