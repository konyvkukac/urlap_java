/*  összeg = 0
CIKLUS AMÍG van még szám, ADDIG
szám= következő elem
összeg = összeg+szám
CIKLUS VÉGE */

var numArray = [1, 6, 4, 9, 54, 17, 62, 9, 2, 4, 3];
var total = 0;
for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
}
console.log(total);

/*
db = 0
CIKLUS AMÍG van még szám, ADDIG
        szám = következő elem
    HA igaz a feltétel szám-ra, AkKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
var numArray = [1, 6, 4, 9, 54, 17, 62, 9, 2, 4, 3];
var count = 0;
for (var i = 0; i < numArray.length; i++); {
    if (numArray[i] > 5) {
        count++;
    }
}
console.log(count);

