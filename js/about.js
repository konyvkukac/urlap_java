// Adatbázis 
let users = [
    { Név: "Minta Géza", email: "mintageza@valami.hu", Lakcim: "Nekeresd" },
    { Név: "Winnetou", email: "winnetou@valami.hu", Lakcim: "Wildwest" },
    { Név: "Old Shatterhand", email: "oldshatterhand@valami.hu", Lakcim: "Pecos River" },
    { Név: "Búvár Kund", email: "buvarkund@valami.hu", Lakcim: "Dunakanyar" },
    { Név: "Szélkötő Kalamóna", email: "kalamona@valami.hu", Lakcim: "Tejillatú Puszta" },
    { Név: "Hüvelyk Matyi", email: "hüvelykmatyi@valami.hu", Lakcim: "Égigérő Fa" },
];


/*
//Táblázat létrehozása, egy oszlop létrehozása

let userTable = document.querySelector("#userTable tbody");
for (let k in users) {                      // users tömb bejárása
    let tr = document.createElement("tr");  // táblázat sorainak létrehozása
    let td = document.createElement("td");  // cella a soron belül
    td.innerHTML = parseInt(k) + 1;         // cella tartalmának létrehozása 
    tr.appendChild(td);                     // cella hozzáadása gyerekként sorhoz
    userTable.appendChild(tr);              // sor hozzáadása  userTable-hoz
}; */

let userTable = document.querySelector("#userTable tbody");

let createTd = (html, parent) => {          // cellák létrehozása külön ciklussal
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

for (let k in users) {
    let tr = document.createElement("tr");
    createTd(parseInt(k) + 1, tr);
    for (let value of Object.values(users[k])) {
        createTd(value, tr);
    }
    userTable.appendChild(tr);
};
/*
Minta

let table = document.querySelector("#demoTable");
for ( let i = 0; i < users.length; i++ ) {
  let tr = document.createElement("tr");
  for ( let data of Object.values(users[i]) ) {
    let td = document.createElement("td");
    td.innerHTML = data;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
A helyes táblázathoz két egymásba ágyazott ciklus kell.
Az egyikben létrehozod a sorokat, a másikban a cellákat a sorokon belül.
 Amikor elkészíted a fenti példát a saját gépeden, használd a Google Chrome beépített debug eszközét ahogy tanultuk.
 Állítsd meg minden sorban a ciklusokat és nézd végig a változók pillanatnyi értékét.
*/