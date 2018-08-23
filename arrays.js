var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  element = 'foo';
  array.unshift("foo")
  addElementToBeginningOfArray(array, 'foo')
  return array
}
