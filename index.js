// Write your solution in this file!


function updateDriverWithKeyAndValue(sourceObj, key, val) {
  let returnObj = {};
  return Object.assign(returnObj, sourceObj);
}

function destructivelyUpdateDriverWithKeyAndValue(sourceObj, key, val) {
  sourceObj[key] = val;
  return sourceObj;
}

function deleteFromDriverByKey(sourceObj, key) {
  let returnObj = sourceObj;
  delete returnObj[key];
}

function destructivelyDeleteFromDriverByKey(sourceObj, key) {
  delete sourceObj[key];
}