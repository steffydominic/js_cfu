
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

// let password=document.getElementById("password__results");

//  function toUpperCase() {
//     const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const password = "";
//  for (let i = 0; i <= Array.length; i++) {
//    const randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password__results").value = password;
//  }

const caps =document.getElementById("uppercase");



function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }

    function generateX() {
        const  = [];
        if (upperEl.checked) {
        xs.push(getUppercase());
        }jibiubui
    }

    