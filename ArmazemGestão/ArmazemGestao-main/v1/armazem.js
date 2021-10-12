export default armazem = { 
    nome: "Armazém"
};
// Definir tipos (classes) de objetos que a app gerirá ("type of objects")
class Item {
    //Tipo de Item
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
    toString() {
        return `${this.corredor} ${this.secção}  ${this.andar}`;
    }
}

function Localização(Item, Espaço, quantidade) {
    this.Item = Item;
    this.Espaço = Espaço
    this.quantidade = quantidade
} 

Localização.prototype.imprimir = function() {
    return `O item ${this.Item} encontra no espaço ${this.Espaço} com ${this.quantidade} unidades`;
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

const Localização1 = new Localização(Mesa, Espaço1, 2); 
const Localização2 = new Localização(Mesa, Espaço2, 2); 
const Localização3 = new Localização(Cadeira, Espaço3, 8); 
const Localização4 = new Localização(Mesa, Espaço4, 2); 
const Localização5 = new Localização(Mesa, Espaço5, 1); 
const Localização6 = new Localização(Candeeiro, Espaço6, 5); 
const Localização7 = new Localização(Candeeiro2, Espaço6, 3); 

const Espaços = []  
const Itens = new Map(); 
const Localizações = new Set(); 

Espaços.push(Espaço1);
Espaços.push(Espaço2);
Espaços.push(Espaço3);
Espaços.push(Espaço4);
Espaços.push(Espaço5);
Espaços.push(Espaço6);

Itens.set(Cadeira.codigo, Cadeira);
Itens.set(Mesa.codigo, Mesa);
Itens.set(Candeeiro.codigo, Candeeiro);
Itens.set(Candeeiro2.codigo, Candeeiro2);

Localizações.add(Localização1);
Localizações.add(Localização2);
Localizações.add(Localização3);
Localizações.add(Localização4);
Localizações.add(Localização5);
Localizações.add(Localização6);
Localizações.add(Localização7);

Object.defineProperties(armazem, { // Método estático para redefinir objetos existentes
    Espaços: { value: Espaços, writable: false }, // Evitar a alteração deste campo (o que não impede a alteração dos campos do campo)
    Itens: { value: Itens, writable: false },
    Localizações: { value: Localizações, writable: false }
});
