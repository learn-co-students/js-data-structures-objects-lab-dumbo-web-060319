let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    // let newdriver = Object.assign({}, driver);
    let newdriver = {...driver};
    // let keysArray = Object.keys(newdriver);
    // for(i =0; i < keysArray.length; i++){
    //     if (keysArray[i] === key){
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}