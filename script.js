function computerPlay(){
    let selections=["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * selections.length);
return selections[random];

}
function playRound(playerSelection, computerSelection) {
    // your code here!
    
    if(playerSelection==computerSelection){
        return("It's a Tie " +playerSelection+" tie with "+computerSelection)
    }
    else if (
        (playerSelection === "Rock" && computerSelection==="Paper")||
        (playerSelection === "Paper" && computerSelection==="Scissors")|| 
        (playerSelection === "Scissors" && computerSelection==="Rock")){
           
            return "Computer win " +computerSelection +" beats "+ playerSelection;
    }
    else if (
        (playerSelection === "Rock" && computerSelection==="Scissors")||
        (playerSelection === "Paper" && computerSelection==="Rock")||
        (playerSelection === "Scissors" && computerSelection==="Paper")){
         
            return "You win " +playerSelection +" beats "+ computerSelection;
        }
        

    }

  function readPlayerSelection(){
      let playerSelection = prompt("Inter your selection Rock ,Paper or Scissor");
      let firstLetter=playerSelection.charAt(0);
      let otherLetters= playerSelection.slice(1);
      return (firstLetter.toUpperCase()+ otherLetters.toLowerCase());
  }
  function Game(){
      let playerScores=0;
      let computerScores=0;
      for(let i=0;computerScores<5 && playerScores<5;i++){
        const playerSelection = readPlayerSelection();
        const computerSelection = computerPlay();
        let winner=(playRound(playerSelection, computerSelection));
        if(winner.includes("It's a Tie")){
            i--;
        }
        else if(winner.includes("You win")){
            playerScores+=1;

        }
        else {
            computerScores+=1;
        }
        console.log(winner+" ...your  Scores: "+playerScores+"   Computer Scors: "+computerScores);

      }
      if(playerScores==5){
      console.log("You are the Winner"+"...   Your Scores: "+playerScores+"   Computer Scors: "+computerScores);
      }
      else{
        console.log("Computer is  the Winner"+"...your Scores: "+playerScores+"   Computer Scors: "+computerScores);

      }

  }

