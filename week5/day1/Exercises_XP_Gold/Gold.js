
//Exercise 1 : Promise.all()

   const promise1 = Promise.resolve(3);
   const promise2 = 42;
   const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 3000, 'foo');
});

   Promise.all([promise1, promise2, promise3])
     .then(values => {
      console.log(values); 
  })
     .catch(error => {
      console.error(error);
  });

// expected output: Array [3, 42, "foo"]


// Exercise 2 : Analyse Promise.all()


function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// ghadi tkon result [2,4,6] hit ga3 les promesses resolve
