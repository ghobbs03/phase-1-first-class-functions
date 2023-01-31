function receivesAFunction(callback = () => console.log('Calling back!')) {
    returnsANamedFunction();
    callback();
}

function returnsANamedFunction() {
    return function innerName() {
        console.log("I'm named!")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I'm anonymous!")
    }
}