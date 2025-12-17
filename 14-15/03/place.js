function place() {
    let a = parseInt(elementA.value); 
    
    if (a > 40) { 
        result = "Боковое";
    }
    else if (a < 40 && a % 2 === 0) { 
        result = 'Купе, нижнее'; 
    }
    else {
        result = 'Купе, верхнее';
    }
    
    document.getElementById('result').value = result;
}

let result;
const elementA = document.getElementById('a');
const elementVerify = document.getElementById('verify')
elementVerify.addEventListener('click', verify);
