const nome = "Armazém"; // declara uma constante e atribui o valor "Armazém" (um 'string', uma cadeia de carateres)

// Definir tipos (classes) de objetos que a app gerirá ("type of objects")
class Item {
    //Itens, não um item especifico mas um conjunto de itens
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
    }
    toString() {
        return `${this.itemCompleto} (º ${this.#quantidade})`;
    }
    get itemCompleto () {
        return `${this.codigo} ${this.nome}`;
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
} 

Localização.prototype.imprimir = function() {
    return `O item ${this.item} encontra no espaço ${this.Espaço}`;
}

const Cadeira = new Item("A0001", "Cadeira preta"); 
const Mesa = new Item("A0002", "Mesa madeira"); 
const Candeeiro = new Item("A0003", "Candeeiro de rua"); 
const Candeeiro2 = new Item("A0004", "Candeeiro de casa de banho"); 

const Espaço1 = new Espaço("1", "1","1"); 
const Espaço2 = new Espaço("1", "1", "2"); 
const Espaço3 = new Espaço("1", "2", "1"); 
const Espaço4 = new Espaço("2", "1","1"); 
const Espaço5 = new Espaço("2", "1", "2"); 
const Espaço6 = new Espaço("2", "2", "1"); 

const Localização1 = new Localização(Mesa, Espaço1); 
const Localização2 = new Localização(Mesa, Espaço2); 
const Localização3 = new Localização(Cadeira, Espaço3); 
const Localização4 = new Localização(Mesa, Espaço4); 
const Localização5 = new Localização(Mesa, Espaço5); 
const Localização6 = new Localização(Candeeiro, Espaço6); 
const Localização7 = new Localização(Candeeiro2, Espaço6); 