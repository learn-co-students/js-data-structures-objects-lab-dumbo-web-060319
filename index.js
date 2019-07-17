// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, k, val) {
  let newDriver = Object.assign({}, driver);
  newDriver[k] = val;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, k, val) {
  driver[k] = val;
  return driver;
}
function deleteFromDriverByKey(driver, k) {
  let newDriver = Object.assign({}, driver);
  delete newDriver[k];
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, k) {
  delete driver[k];
  return driver;
}
