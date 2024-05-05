

const buttons = document.querySelectorAll('.buttons');

const playerButton = document.getElementById("playerButton");

const computerButton = document.getElementById('computerButton');


const result = document.getElementById('result');

const playerscore = document.getElementById('playerScore');

const computerscore = document.getElementById('computerScore');



const choices = ["rock" , "paper" , "scissor"];

let playersc = 0;

let computersc = 0;



buttons.forEach(button=>{
    button.addEventListener('click',event=>{

        let playerChoice = event.target.id;

        let computerChoice = choices[Math.floor(Math.random()*3)];

        let res = "IS TIGHT !";

        console.log(computerChoice);

        console.log(playerChoice);

        if(playerChoice === computerChoice){

            res = "IS TIGHT !"

        }
        else{
            switch (playerChoice){
                case "rock":
                res = (computerChoice === "paper")? "YOU LOOSE !" : "YOU WIN !";
                break;

                case "paper":
                res = (computerChoice === "scissor")? "YOU LOOSE !" : "YOU WIN !";
                break;

                case "scissor":
                res = (computerChoice === "rock")? "YOU LOOSE !" : "YOU WIN !";
                break;

                default:
                console.log('error');
                break;

            }
            

        }

        switch (res){
            case "YOU LOOSE !":
                result.style.color = "red";
                computersc++;
                break;

            case "YOU WIN !":
                result.style.color = "green";
                playersc++;
                break;

            case "IS TIGHT !":
                result.style.color = "black";
                break;

            
        }



        result.textContent = res;

        playerscore.textContent = `Player Score: ${playersc}`;

        computerscore.textContent = `Computer Score: ${computersc}`;




        



        
        
      
        
        
        playerButton.textContent = `Player: ${playerChoice}`;

        computerButton.textContent = `Computer: ${computerChoice}`;

        
      
        
    })
})