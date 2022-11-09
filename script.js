//first select textbox by id
let textBox = document.getElementById('textbox');

// apply event listener input into textbox 
textBox.addEventListener('input', function () {
    let textValue = this.value;
    let char = textValue.length; //count char lenght
    document.getElementById('char').innerHTML = char; //characters are printed in output box

    textValue = textValue.trim(); //To trim starting and ending spaces
    let words = textValue.split(" "); // use split function to split array of words into spaces 

    let words_length = words.filter(function (elm) {
        return elm != "";   //filter array of words and return only those words that not blank
    })
    document.getElementById('word').innerHTML = words_length.length; //words are printed in output box


})


