var avow = require('avow');

// defining the function, setting up argument
function FizzBuzz (n) {
    var output = '';

    for (var i = 1; i <= n; i++) {
    // tells the loop where to start, how many times to loop, and to go up in number 
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
        }

        else if (i % 5 === 0) {
            output += 'Buzz';
        }
        
       else if (i % 3 === 0) {
            output +='Fizz';
        }

        else {
            output +='.';
        }
    }

//  outside for brackets so it doesn't print loop after the first run, return prints output 
    return output;

}
// calls the function and tells it how many times to run for n
FizzBuzz(15);



avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));