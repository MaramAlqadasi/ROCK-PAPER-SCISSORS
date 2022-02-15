let playerScores=0;
let computerScores=0;
function computerPlay(){
    let selections=["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * selections.length);
return selections[random];

}
function playAgain(){
    let body=document.querySelector('body');
    let rePlayButton=document.createElement('button');
    let optionContainer=document.querySelector('.optionContainer');
    rePlayButton.style.cssText="padding:1rem;font-size:2rem;font-weight:bold;background-color:#c6d45c;border-radius:30px;cursor:pointer;color:white;";
    rePlayButton.textContent="Play Again";
    body.removeChild(optionContainer);
    body.appendChild(rePlayButton);
    rePlayButton.addEventListener('click',()=>{
        return window.location.reload();
    });

}
function playRound(playerSelection, computerSelection) {
    let message=document.querySelector('.message');
    let p=document.createElement('p');
    p.style.cssText='font-size:2rem;font-wight:bold; ';
    let winnerMsg=document.createElement('p');
     winnerMsg.style.cssText='font-size:2rem;font-wight:bold; ';
    let result=document.querySelector('.result');
    
        if(playerSelection==computerSelection){
            p.textContent="It's a Tie " +playerSelection+" tie with "+computerSelection;
            message.appendChild(p); 
        }
        else if (
            (playerSelection === "Rock" && computerSelection==="Paper")||
            (playerSelection === "Paper" && computerSelection==="Scissors")|| 
            (playerSelection === "Scissors" && computerSelection==="Rock")){
                computerScores+=1;
                result.textContent=playerScores +" : "+computerScores;
                p.textContent= "Computer win " +computerSelection +" beats "+ playerSelection;
                message.appendChild(p); 
                  if(computerScores==5 ){
                    winnerMsg.textContent="Computer Win, press the button below to play again";
                    message.appendChild(winnerMsg);
                    playAgain() ;
                }
        }
        else if (
            (playerSelection === "Rock" && computerSelection==="Scissors")||
            (playerSelection === "Paper" && computerSelection==="Rock")||
            (playerSelection === "Scissors" && computerSelection==="Paper")){
                playerScores+=1;
                result.textContent=playerScores +" : "+computerScores;
                p.textContent= "You win " +playerSelection +" beats "+ computerSelection;
                message.appendChild(p);
                if(playerScores==5){
                    winnerMsg.textContent="You Win, press the button below to play again";
                    message.appendChild(winnerMsg);
                    playAgain()
                    

                }
                
            }
            setTimeout(function(){
                p.remove();
              }, 1000);
    }

  const computerSelection = computerPlay();
  const rock = document.querySelector(".rock");
  rock.addEventListener('click',() =>  { playRound("Rock",computerSelection);});
  
  const paper=document.querySelector('.paper');
  paper.addEventListener('click',() =>  { playRound("Paper",computerSelection);});

  const scissors=document.querySelector('.scissors');
  scissors.addEventListener('click',() =>  { playRound("Scissors",computerSelection);});

//   Game();


