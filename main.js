
    function szamitas() {
        let szam1 = document.querySelector("input[name='szam1']"); //szam1 változó létrehozása, értéke a name='szam1' értéke lesz
        let szam2 = document.querySelector("input[name='szam2']"); //szám2 változó létrehozás, kiolvasása  
        let total = parseInt(szam1.value) + parseInt(szam2.value);   //total változó létrehozása, művelet elvégzése a két előző változó értékével
        
        let Szamla = document.querySelector("span.Szamla")  //változó létrehozása a Szamla összegének kiíratására
        Szamla.innerHTML = total;     //az .innerHTML módosítja a 'Szamla' értékét a 'total' aktuális értékével 
    }
    
    function szorzas() {
        var pizza = (1200);
        let darab = document.querySelector("input[name='darab']");
        let osszeg = pizza * parseInt(darab.value);
    
        //Beír adat ellenőrzése
         if (darab.value > 10) {                
             alert("Maximum 10 terméket vásárolhat!");
             return;
         }
         else if (darab.value < 1) {
                 alert("Kérem, legalább egy terméket jelöljön meg!");
                 return ;
                }
         
        let szorzat = document.querySelector("span.szorzat") //Fizetendő összeg értékének lekérése, változóba mentése.
        szorzat.innerHTML = osszeg;  //A HTML kód 'szorzat span' mező értékének kiíratása. 
        
    }
    /*function myFunction() {
        var x = document.getElementById("demo");
        x.style.fontSize = "25px";
        x.style.color = "red";} */
      