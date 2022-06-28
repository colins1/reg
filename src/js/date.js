export default class Validator {
    constructor (name) {
        this.name = name
    }
    //^[a-Z][0-9]{4}[a-Z0-9-_]+[a-Z]$
    validateUsername() {
        const re = /^[A-Za-z][a-z0-9-_]+[a-z]$/;
        const reNumber = /[0-9]{4}/;
        if (re.test(this.name) == true && reNumber.test(this.name) == false) {
            
            return this.name;
        } else {
            throw new Error('You created the name incorrectly, read the rules for creating a name');
        }
    }
  };

  //Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
  //Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
