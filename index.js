

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2",
 "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let inputpass1 = document.getElementById("password-input1");
    let inputpass2 = document.getElementById("password-input2");

    function generateRandomPassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    function generatePass() {
        let passwordLength = 15; 
        let password1 = generateRandomPassword(passwordLength);
        let password2 = generateRandomPassword(passwordLength);
        
        inputpass1.textContent = password1;
        inputpass2.textContent = password2;
    }