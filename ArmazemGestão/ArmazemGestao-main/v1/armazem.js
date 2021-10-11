const nome = "Armazém"; // declara uma constante e atribui o valor "Armazém" (um 'string', uma cadeia de carateres)

// Definir tipos (classes) de objetos que a app gerirá ("type of objects")
class Item {
    #quantidade;
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
    toString() {
        return `${this.itemCompleto} (º ${this.#quantidade})`;
    }
    get itemCompleto () {
        return `${this.codigo} ${tjis.nome}`;
    }
    set quantidade(valor){
        this.#quantidade = valor;
    }
}

class Espaço {
    constructor(corredor, secção, andar){
        this.corredor = corredor;
        this.secção = secção;
        this.andar = andar
    }
    
}

function Localização() {
    var item = item;
    var Espaço = Espaço
} // Sintax alternativa (anterior a ES6) para definir classes de objetos

Localização.prototype.imprimir = function() {
    return `O item ${this.item} encontra no espaço ${this.Espaço}`;
}