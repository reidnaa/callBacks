function findWaldo(arr, found) {
  arr.forEach(function(value, i){
    if (value === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! at line " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);