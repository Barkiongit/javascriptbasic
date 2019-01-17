function ageTest(age) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (age >= 18) {
            return resolve();
        }else {
           return reject();
        }
      }, 2000);
    });
  }
  
  ageTest(15)
    .then(function() {
      console.log("Maior que 18");
    })
    .catch(function() {
      console.log("Menor que 18");
  });