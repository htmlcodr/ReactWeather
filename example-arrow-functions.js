var names = ['one', 'two', 'three'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('WHat'));

// better way
var person = {
  name: 'Andreas',
  greet: function () {
      names.forEach((name) => {
        console.log(this.name + ' says hi to ' + name)
      });
  }
};

// old way
var personTwo = {
  name: 'Andreas',
  greet: function () {
      names.forEach(function (name) {
        console.log(this.name + ' says hi to ' + name)
      });
  }
};


person.greet();
personTwo.greet();

function add (a, b) {
  return a + b;
}
console.log(add(10, 11));

var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(10, 11));

var addExpression = (a, b) => a + b;
console.log(addExpression(10, 11));
