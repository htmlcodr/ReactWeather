function getTempCallback (location, callback) {
  callback(undefined, 25);
  callback('City Not Found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});


function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(20);
      reject('City Not Found!')
    }, 1000);

  });
}

getTempPromise('Philidelphia').then(function(temp) {
console.log('promise success', temp);
}, function (err) {
    console.log('promise error', err);
});

// http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=e9b797a8750c195833ac2ee6bddadc9d
