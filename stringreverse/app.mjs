export default class StringReverse {
  reverse(letra) {
    if (!letra) {
      return -1;
    } else {
      let reverseStr = letra.split("").reverse().join("").toLocaleLowerCase();
      return reverseStr;
    }
  }
}
let read = new StringReverse();

