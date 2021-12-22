class Arr {
  static newMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(cb(arr[i]));
    }
    return newArray;
  }

  static newFilter(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }

  static newForeach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i]);
    }
  }
  
}



let numbers = [1, 2, 3, 4];

console.log(Arr.newMap(numbers, (number) => number * 3));
console.log(Arr.newFilter(numbers, (number) => number % 2 === 0))

Arr.newForeach(numbers, (number) => console.log(number))