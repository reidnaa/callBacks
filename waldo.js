function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(i) {
  console.log("Found him!" + " at Index "+ i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);