console.log(hello);
var hello = "world";

// var hello;
// logs undefined
// hello= "world"

var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

// var needle
// function test() {
//   var neddle
//   neddle = "magnet"
//   logs "magnet"
// }
// needle = "haystack"
// test() test is called, the first console.log runs "magnet"

var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// var brendan
// function print() {
//   var brendan
//   brendan = "only okay";
//   logs "only okay"
// }
// brendan = "super cool"
// console.log runs and logs "super cool"

var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// var food
// function eat() {
//   var food
//   food = "half-chicken"
//   logs "half-chicken"
//   food = "gone"
// }
// food = "chicken";
// console.log runs and logs "chicken"

mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

// var mean
//mean()  mean is not a function, 'mean' is still undefined at this point
// console.log(food) food is not defined, the variable 'food' is also undefined at this point
//mean = function () {
//   var food
//   food = "chicken"
//   console.log(food) Logs "chicken"
//   food = "fish"  Assignment of the value "fish" to the variable 'food'
//   console.log(food)  Logs "fish"
//}
//console.log(food) food is not defined, the variable 'food' is in scope of the function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

//var genre
//console.log(genre) Logs 'undefined' as the variable 'genre' has been declared but not yet assigned a value
//genre = "disco"
//rewind() Function call to 'rewind'

//function rewind() {
//    var genre
//    genre = "rock"
//    console.log(genre) Logs "rock"
//    genre = "r&b"
//    console.log(genre) Logs "r&b"
//}
//console.log(genre) Logs "disco" as it is referring to the global variable 'genre'

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

//var dojo
//dojo = "san jose"
//console.log(dojo)  Logs "san jose"
//learn()  Function call to 'learn'
//function learn() {
//    var dojo
//    dojo = "seattle"
//    console.log(dojo)  Logs "seattle"
//    dojo = "burbank"
//    console.log(dojo)  Logs "burbank"
//}
//console.log(dojo)  Logs "san jose"

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

//function makeDojo(name, students) {
//    const dojo
//    dojo = {}
//    dojo.name = name
//    dojo.students = students

//    if (dojo.students > 50) {
//        dojo.hiring = true;
//    } else if (dojo.students <= 0) {
//        dojo = "closed for now" Trying to assign a new value to the constant 'dojo', you cannot reassign a new value to a constant variable.
//    }
//    return dojo Return the 'dojo' object
//}

//console.log(makeDojo("Chicago", 65))
//Logs
//{
//  name: "Chicago",
//  students: 65,
//  hiring: true
//}

//console.log(makeDojo("Berkeley", 0))
//Logs
//{
//  name: "Berkeley",
//  students: 0
//}
