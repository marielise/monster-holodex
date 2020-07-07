const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeeded'); //it is called after 1s, and now resolve, contains a value
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise
  .then((value) => value + '!!!') //create a new resolve promise
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));
//only way to get the reject,is to catch
