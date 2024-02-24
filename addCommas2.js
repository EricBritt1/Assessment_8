
/*
Still wrong but, neater and easier to read version than addCommas.js
Gave it a shot with my current understanding!
*/
function addCommas2 (number) {
    const number_str = `${number}`;
    let pad_length = 1;
    let string = '';
        for (let i = (number_str.length - 1); i > -1; i--) {
            if (i !== (number_str.length -1 ) && i !== 0 && i % 3 === 0) {
                string = string.padStart( pad_length ,',')
                pad_length++
                string = string.padStart(pad_length, number_str[i])
                pad_length++
            }
            else { 
            string = string.padStart(pad_length, number_str[i])
            pad_length++
            }
        }
        return string
};

/*
ChatGPT version which is far simpler and easier to read

- Declares numberStr just like me
- Decalres new variable that holds empty string like mine

- In the for statement, TWO variables are declared.
    - i (iterator)
    - count to keep track of how many numbers are placed in formattedNumber before we'll need a comma.
- if checks if count is greater than zero, because we don't want to place a comma A zero due to the modulo condition, AND modulo condition is fulfilled then add formatted number to comma then set formatted number as the value of combining the two. Handles the comma issue we had.

otherwise

just add formattedNumber to numberStr[i] and set formattedNumber to the sum of those two.

function addCommas(number) {
    const numberStr = `${number}`;
    let formattedNumber = '';
    
    for (let i = numberStr.length - 1, count = 0; i >= 0; i--, count++) {
        if (count > 0 && count % 3 === 0) {
            formattedNumber = ',' + formattedNumber;
        }
        formattedNumber = numberStr[i] + formattedNumber;
    }
    
    return formattedNumber;
}
*/