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
