let numberToFind = 0;
let attempts = 0;

function refresh() {
    //random number

    numberToFind = parseInt(Math.random() * 100);

    console.log(numberToFind)
}

function verifyNumber() {

    let number = document.getElementById('number').value;

    if(number > 100 || number < 0){
        alert("number not valid");
        return;
    }
    
    if( number > numberToFind){
        attempts++;
        alert('number to be found is smaller');
    }
    else if(number < numberToFind)
    {
        attempts++;
        alert('number to be found is greater');  
    }
    else{
        alert('Congratulations you win on your third attempt !!')
    }

} 
refresh();