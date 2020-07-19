function validateForm() {  
    // Termék egységára
           let pricePerPiece = 1200;   
    
                // Kiválasztom a mennyiséget és a message mező ár részét.  
        let totalinput = document.querySelector("form#order input[name=total-input]");
        let priceField = document.querySelector("form#order .message strong");   
    
                // Kiolvasom a bevitt mennyiséget és szorzom az egységárral.  
        let total = parseInt(totalinput.value);  
        let totalPrice  = total * pricePerPiece;   
    alert (totalPrice);
