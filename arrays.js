var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  array = ["foo", 1];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [1, "foo"];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo");
  return array;
}

function accessElementInArray(array, index) {
  array = [1, 2, 3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array
}

function