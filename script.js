function computerPlay(){
    let selections=["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * selections.length);
return selections[random];

}
function playRound(playerSelection, computerSelection) {
    // your code here!
    let playerScores =0;
    let computerScores = 0;
    if(playerSelection==computerSelection){
        console.log("Computer's Scores : " + computerScores + "  Player's Scors : " + playerScores );
        return("It's Tie " +playerSelection+" tie with "+computerSelection)
    }
    else if (
        (playerSelection === "Rock" && computerSelection==="Paper")||
        (playerSelection === "Paper" && computerSelection==="Scissors")|| 
        (playerSelection === "Scissors" && computerSelection==="Rock")){
            computerScores +=1;
            console.log("Computer's Scores : " + computerScores + "  Player's Scors : " + playerScores );
            return "Computer win " +computerSelection +" beats "+ playerSelection;
    }
    else if (
        (playerSelection === "Rock" && computerSelection==="Scissors")||
        (playerSelection === "Paper" && computerSelection==="Rock")||
        (playerSelection === "Scissors" && computerSelection==="Paper")){
            playerScores +=1;
            console.log("Computer's Scores : " + computerScores + "  Player's Scors : " + playerScores );
            return "You win " +playerSelection +" beats "+ computerSelection;
        }
        

    }

  function readPlayerSelection(){
      let playerSelection = prompt("Inter your selection Rock ,Paper or Scissor");
      let firstLetter=playerSelection.charAt(0);
      let otherLetters= playerSelection.slice(1);
      return (firstLetter.toUpperCase()+ otherLetters.toLowerCase());
  }

  
  const playerSelection = readPlayerSelection();
  const computerSelection = computerPlay();
 // console.log(game(playRound()));
  console.log(playRound(playerSelection, computerSelection));