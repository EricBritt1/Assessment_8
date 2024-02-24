// This one is hard! I hard coded instead of thinking abstract!

/*
Documentation of first attempt:
    - Whenever i is = 3 a comma should be placed before the next str[i] is placed. The problem with this is that if given a string of numbers
        let number_str = 34567 (ideally we want 34,567 as answer)

        then the if statement would function like this
    -   345,67 (Incorrect)

        We can't reverse the string either
    -  let reverse_str = 76543
    -  765,43 (Incorrect)

    Brainstorming:
    - One idea is to prepend text to the beginning of the string. This will allow us to begin with the end of string without reversing string and running into same issue

    - let string = 1234
    - let empty_str = '';
    - let pad_length = 1 (after each iteration we must add to pad_length)
    - Following the iterations
        empty_str.padStart(pad_length, string[i])
    empty_str = '4';
    pad_length++


    

function addCommas(number) {
 let string = '';
 const number_str = `${number}`
 console.log(number_str.includes('-'))

if(number_str.includes('-') !== true) {
for(let i = 0; i < number_str.length; i++) {
    if(i !== 0 && i % 3 === 0 && i !== (number_str.length-1)) {
        string += ',' 
        string += number_str[i]
    }
    else {
        string += number_str[i]
    }
}
}

if(number_str.includes('-') === true) {
for(let i = 0; i < number_str.length; i++) {
    if( i > 3) {
    if(i !== 0 && i % 3 === 0 && i !== (number_str.length-1)) {
        string += ',' 
    }
}
    else if (i < 3) {
        if(i !== 0 && i % 2 === 0 && i !== (number_str.length-1)) {
        string += ',' 
    }
}
    string += number_str[i]
}
}

    return string
};

console.log(addCommas(2345667))
*/




/*
1st step - convert number into string
2nd step - add commas after every three consecutive digits
3rd step - handle special case symbols (excluding bonus)
*/

/*
Unexpected problems we've run into:
- Number length. If e
*/
module.exports = addCommas;