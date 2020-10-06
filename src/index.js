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

function decode(str) {
    const chunks = str.match(/\d{10}|[*]{10}/g).map((elem) => elem === '**********' ? ' ' : elem.match(/\d{2}/g)
    .map((inelem) => {
      if (inelem === '00') {
        return '';
      }
      if (inelem === '10') {
        return ('.');
      }
      if (inelem === '11') {
        return ('-');
      }
    }).join(''));
    console.log(chunks);
    let result = ''
    chunks.map((elem) => elem === ' ' ? result += ' ' : result += MORSE_TABLE[elem])
    return result;
}

module.exports = {
    decode
}