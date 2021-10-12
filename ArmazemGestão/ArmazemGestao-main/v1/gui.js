// NOTA INICIAL: este ficheiro fonte define a interação com a interface gráfica (GUI) da app; o "business object" da app está em hospital.js

import { armazem } from "./armazem.js"; // Refereri a um objeto declarado como exportado naquele outro ficheiro

const Localizações = document.getElementById("Localizações"); // Uma <table> no HTML

let tr; // Referirão a novos elementos HTML a inserir na página
let td;

for (const consulta of armazem.Localizações.values()) { // Criar uma iteração para obter todas as consultas
    tr = document.createElement("tr"); // Criar um <tr> a inserir na <table>
    consultas.appendChild(tr);
    for (const campo of Object.values(Localização)) { // Iterar em todos os campos de cada consulta
        td = document.createElement("td"); // E criar uma celula <td> para a linha <tr> acima criada
        td.textContent = campo instanceof Date ? `${campo.toLocaleString()}` : `${campo}`; // Converter em string e inserir na celula
        tr.appendChild(td);
    }
}