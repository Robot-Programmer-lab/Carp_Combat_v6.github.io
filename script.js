let count = 0;
let random_plus = 0;

function generate(){
    if (count > 10){
        count = count + 2;
    }
    else if (count > 50){
        count = count + 50;
    }
    else if (count > 1000){
        count = count + 100;
    }
    else if (count > 10000){
        count = count + 500;
    }
    else if (count > 500000){
        count = count + 10000;
    }
    else if (count > 1000000){
        count = count + 100000;
    }
    else if (count > 1000000000){
        count = count + 1000000;
    }
    else if (count > 100000000000){
        count = count + 10000000000;
    }
    else{
        count = count + 1;
    }
    document.getElementById("coins").textContent=count;
    //document.body.appendChild(button);
}

function pluscoin(){    
    if (count > 10){
        random_plus = Math.floor(Math.random() * (5 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 100){
        random_plus = Math.floor(Math.random() * (50 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 1000){
        random_plus = Math.floor(Math.random() * (150 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 10000){
        random_plus = Math.floor(Math.random() * (300 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 500000){
        random_plus = Math.floor(Math.random() * (500 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 1000000){
        random_plus = Math.floor(Math.random() * (1000 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 1000000000){
        random_plus = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else if (count > 100000000000){
        random_plus = Math.floor(Math.random() * (10000000 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }
    else{
        random_plus = Math.floor(Math.random() * (3 - 0 + 1)) + 0    
        count += random_plus;
        document.getElementById("plus_coin").textContent=random_plus;
    }    
    document.getElementById("coins").textContent=count;    
}