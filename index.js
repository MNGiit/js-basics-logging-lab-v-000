const driver = 'bob';



console.log()
invokes console.log() with the string "this code was called" ‣
AssertionError: expected false to be true
    at Context.<anonymous> (test/indexTest.js:18:66)expect(spy.calledWithExactly('this code was called')).to.be.true;
invokes console.log() with the `driver` variable ‣
AssertionError: expected false to be true
    at Context.<anonymous> (test/indexTest.js:22:49)expect(spy.calledWithExactly('bob')).to.be.true;
invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument ‣
AssertionError: expected false to be true
    at Context.<anonymous> (test/indexTest.js:26:80)expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
