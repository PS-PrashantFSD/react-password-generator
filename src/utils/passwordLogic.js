export class RandomPassword{

    //Numbers
    static getNumber(){
        return String.fromCharCode(Math.floor(Math.random() *10) + 48)
    }

    //UpperCase Alphabets
    static getUpperCase(){
        return String.fromCharCode(Math.floor(Math.random() *26) + 65)
    }

    //Lowercase Alphabets
    static getLowerCase(){
        return String.fromCharCode(Math.floor(Math.random() *26) + 97)
    }

    //Special Characters
    static getSymols(){
        let symbolsString = '~!@#$%^&*()_+{}[]<>?|';
        return symbolsString[Math.floor(Math.random() * symbolsString.length)]
    }


    static getPasswordObject(state){
        let passwordObject = {};
        for(let key of Object.keys(state)){
            if(typeof state[key] === 'boolean' && state[key]){
                passwordObject= {
                    ...passwordObject,
                    [key] : state[key]
                }
            }
        }
        return passwordObject;
    }

    static generatePassword(passwordObject, passwordLength){
        let password = '';
        for(let i=0; i<Number(passwordLength); i+=Object.keys(passwordObject).length){
            if(passwordObject.number) password += `${this.getNumber()}`;
            if(passwordObject.upper) password += `${this.getUpperCase()}`;
            if(passwordObject.lower) password += `${this.getLowerCase()}`;
            if(passwordObject.symbol) password += `${this.getSymols()}`;
        }
        return password;
    }
}