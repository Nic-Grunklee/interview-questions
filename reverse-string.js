//Reverse string

const string = "abrkaabcdefghijjxxx";

reverseString(string);

function reverseString(val) {
    let reverseString = '';

    for(let i = val.length - 1; i >=0; i--) {
        reverseString += val.charAt(i);
    }

    console.log(reverseString);
}