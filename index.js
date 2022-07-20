// getFirstLetter('test') === 't' ;
// getFirstLetter('9-test') === '0-9';
// getFirstLetter("'/symbol") === 's';

const checkIsNumber = (str) => {
    const regExp = RegExp('^[0-9]+$');
    return regExp.test(str);
}

const checkIsLetter = (str) => {
    const regExp = RegExp('^[a-zA-Z]+$');
    return regExp.test(str);
}

const getFirstLetter = (str) => {

    for (let letter of str) {
        const isLetter = checkIsLetter(letter);
        if (isLetter) {
            console.log(letter)
            return
        }

        const isNumber = checkIsNumber(letter);
        if (isNumber) {
            console.log('0-9')
            return
        }
    }
}

getFirstLetter('test')