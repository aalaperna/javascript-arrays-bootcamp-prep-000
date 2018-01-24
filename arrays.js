var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  chocolateBars.unshift(element)
}

function addElementToEndOfArray (array, element) {
  return chocolateBars
}

function destructivelyAddElementToEndOfArray (array, element) {
  return chocolateBars
}