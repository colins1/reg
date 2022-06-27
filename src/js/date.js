export default class Validator {
    constructor (name) {
        this.name = name
    }

    validateUsername(name) {
        const reg = new RegExp('^[a-Z][^0-9]{4}[a-Z0-9-_]+[a-Z]$');
        if (reg.test(name) == true) {
            return name;
        } else {
            throw new Error('You created the name incorrectly, read the rules for creating a name');
        }
    }
  };

  //Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
  //Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
