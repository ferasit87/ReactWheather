function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('philadelphia' , function (err, temp) {
    if (err) {
      console.log('error', err);
    }else{
      console.log('success' , temp);
    }
});


function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
      setTimeout(function () {
      resolve(79);
      reject('City not found');

      }, 1000);

  });
}

getTempPromise('philadelphia').then(function (temp){
  console.log('promise success',temp);
}, function(err){
  console.log('Promise Error', err);
});


function addPromise(a, b) {
  return new Promise( function (resolve, reject){
      if (typeof a == 'number' && typeof b === 'number') {
        resolve(a+b);
      }
      reject("Cannot adding");
  });
}

addPromise(5,'d').then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
})
