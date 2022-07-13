const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let morseArr = []

    for(let i = 0; i < expr.length; i += 10) {
      let substr = expr.substr(i, 10)
      if(substr === '**********') {
        morseArr.push(' ')
      } else {
        let letter = ''
        for(let j = 0; j < substr.length; j += 2) {
          substr[j]+substr[j + 1] === '10' ? letter += '.' : substr[j]+substr[j + 1] === '11' ? letter += '-' : null
        }
        morseArr.push(letter)
      }
    }

    let result = []
    morseArr.forEach(el => el === ' '? result.push(' ') : result.push(MORSE_TABLE[el]))

    return result.join('')
}

module.exports = {
    decode
}
