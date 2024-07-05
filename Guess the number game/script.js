let random_number = Math.floor(Math.random()*100);
let a = random_number;
let i = 0;
let Chances = 10;

function Guess(){
    let b = Number(document.getElementById("mytext").value);
    let messageDiv = document.getElementById("message");
    let Chance = Chances - i - 1;
    i++;

    if(a===b)
        {
            messageDiv.innerHTML = `Your guess is correct!<br>Score:${100 - i}<br>Correct number is :- ${a}`;
        }
    else if(a>b)
        {
            messageDiv.innerHTML = `Your guess is incorrect!<br>The number is Greater.<br>Number of chances remaining :- ${Chance}`;
        }    
    else if(a<b)
        {
            messageDiv.innerHTML = `Your guess is incorrect!<br>The number is Smaller.<br>Number of chances remaining :- ${Chance} `;
        }
    if(i>=Chances && a!=b)
        {
            messageDiv.innerHTML = `Game over!<br>You have finished all your Chances.<br>The correct Number was :- ${a}`;
        }        

}

// const prompt = require("prompt-sync")();
// let random_number = Math.floor(Math.random()*100)
// let a = random_number
// let i,b,chance
// console.log(a)
// for(i=1;i<10;i++)
//     {
//          b = prompt("Enter your number :- ")
//          chance = i
//          if(a==b)
//             {
//                 console.log("your guess is correct ")
//                 console.log("Score :- ",100-i)
//                 console.log("correct number is :- ",a)
//                 break;
//             }

//         else if(a>b)
//             {
//                 console.log("your guess is incorrect")
//                 console.log("the number is greater")
//                 console.log("Number of chances remaining",10-i)
//             }
//         else if(a<b)
//             {
//                 console.log("your guess is incorrect")
//                 console.log("The number is smaller")
//                 console.log("Number of chances remaining",10-i)

//             }      
        
//     }
    

