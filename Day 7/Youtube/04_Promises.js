let promise = new Promise((resolve, reject) => {
  let x = 1 + 1;
  if (x == 2) {
    resolve("Success!!");
  } else {
    reject("Failed!");
  }
});
// To Execute Code
promise
  .then((message) => {
    console.log("This is in the then " + message);
  })
  .catch((message) => {
    console.log("This is in catch " + message);
  });

const userLeft = true;
const userWatchingCatMeme = false;
/**  
//   CallBack

function watchTutorialCallback(callbackOne, callbackTwoError) {
  if (userLeft) {
    callbackTwoError({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    callbackTwoError({
      name: "User Watching Cat meme",
      message: ":)",
    });
  } else {
    callbackOne("Thumb up and subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log("Success: " + message);
  },
  (err) => {
    console.log(err.name + " " + err.message);
  }
);
 */
// Clean code with Promise
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat meme",
        message: ":)",
      });
    } else {
      resolve("Thumb up and subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((err) => {
    console.log(err.name + " " + err.message);
  });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((msg)=>{
    console.log(msg);
})
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((msg)=>{
    console.log(msg);
})