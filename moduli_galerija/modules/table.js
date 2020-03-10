//import {generateImage} from "./general.js";
import generateImage from "./general.js";

let generateTable = parent => {
    let table = document.createElement('table');
    table.style.border = "1px solid black";
    parent.appendChild(table);
    return table;
}

let generateTableRow = parent => {
    let tr = document.createElement('tr');
    tr.style.padding = "10px";
    parent.appendChild(tr);
    return tr;
}

let generateItem = (parent, src) => {
    let td = document.createElement('td');
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export {generateTable, generateTableRow, generateItem};
export default generateTable;



