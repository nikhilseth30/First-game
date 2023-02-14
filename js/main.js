const choices = document.querySelectorAll(".choice")
const score = document.querySelector("#score")
const result = document.querySelector("#result")
const restart = document.querySelector("#restart")
const modal = document.querySelector(".model")
// console.log(modal)

const scoreboard = {
    player : 0,
    computer : 0
}

// event listener
// choices.forEach(choice => choice.addEventListener("click",playGame))
choices.forEach(function(choice){
    choice.addEventListener("click",playGame)
})

window.addEventListener("click",clearModal)

function playGame(e){
  restart.style.display = "inline-block"
  const playerChoice = e.target.id
  const computerChoice = getComputedChoice()
  let winner = getWinner(playerChoice,computerChoice)
  showWinner(winner, computerChoice);
  

}

function getComputedChoice(){
    const randomNumber = Math.random()*100
    if(randomNumber<33)
    return 'rock'
    else if (randomNumber>33 && randomNumber<=66)
    return "paper"
    else
    return "scissors"
}

function getWinner (p,c){
    if (p===c)
    return 'draw'
    else if (p==='rock'){
        if(c==='paper')
        return 'computer'
        else
        return 'player'

    }
    else if (p==='paper'){
        if(c==='scissors'){
            return 'computer'
        }else
        return 'player'
    }
    else if (p==='scissors'){
        if(c==='rock'){
            return 'computer'
        }else
        return 'player'
   
}
}

function showWinner(winner,computerChoice){
    if(winner === 'player'){
        scoreboard.player++
        result.innerHTML=`
        <h1 class="text-win">You Win</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'/>
    `
    }else if(winner==='computer'){
    scoreboard.player++
        result.innerHTML=`
        <h1 class="text-lose">You Lose</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'/>
    `
    }else {
            result.innerHTML=`
            <h1 class="text-draw">It's a Draw</h1>
            <i class='fas fa-hand-${computerChoice} fa-10x'/>
        `
        }
        score.innerHTML=`
        <p>Player : ${scoreboard.player}</p>
        <p>Computer : ${scoreboard.computer}</p>
        `

        modal.style.display = "block";

}

function clearModal(e){
    if(e.target == modal){
        modal.style.display="none"
    }
}
