/*
import {generateList, generateItem as generateListItem} from "./modules/list.js";
import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";
//import generateTable from "./modules/table.js";

let ul = generateList(document.body);
generateListItem(ul, "images/photo1.jfif");
generateListItem(ul, "images/photo2.jfif");
generateListItem(ul, "images/photo3.jfif");

let ul2 = generateList(document.body);
generateListItem(ul2, "images/photo3.jfif");

let table = generateTable(document.body);
let tr1 = generateTableRow(table);
generateTableItem(tr1, "images/photo1.jfif");
generateTableItem(tr1, "images/photo2.jfif");
let tr2 = generateTableRow(table);
generateTableItem(tr2, "images/photo3.jfif");
generateTableItem(tr2, "images/photo2.jfif");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, "images/photo1.jfif");
List.generateItem(ul, "images/photo2.jfif");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "images/photo3.jfif");
Table.generateItem(tr, "images/photo1.jfif");