
function check(){
    
    const alphabet = {
        'A' : 'Alfa',
        'B' : 'Bravo',
        'C' : 'Charlie',
        'D' : 'Delta',
        'E' : 'Echo',
        'F' : 'Foxtrot',
        'G' : 'Golf',
        'H' : 'Hotel',
        'I' : 'India',
        'J' : 'Juliett',
        'K' : 'Kilo',
        'L' : 'Lima',
        'M' : 'Mike',
        'N' : 'November',
        'O' : 'Oscar',
        'P' : 'Papa',
        'Q' : 'Quebec',
        'R' : 'Romeo',
        'S' : 'Sierra',
        'T' : 'Tango',
        'U' : 'Uniform',
        'V' : 'Victor',
        'W' : 'Whiskey',
        'X' : 'X-ray',
        'Y' : 'Yankee',
        'Z' : 'Zulu',
        '1' : 'One',
        '2' : 'Two',
        '3' : 'Three',
        '4' : 'Four',
        '5' : 'Five',
        '6' : 'Six',
        '7' : 'Seven',
        '8' : 'Eight',
        '9' : 'Nine',
        '0' : 'Zero'
    }
    

    let text = combination.value;
    combination.value = combination.value.split('');

    console.log(combination.value);



    // for (let i = 0; i < combination.value.length; i++){
    //     decoding.innerHTML = `${alphabet[combination.value[i]]}`;
    // } 


    i = 0;

    for (combination.value in alphabet) {
        if (combination.value[i] = alphabet[i] ) {
            decoding.innerHTML = `${alphabet[text[0]]}`;
        }
        // console.log( alphabet[text[0]] );
    }


}


