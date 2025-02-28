
// accessing game elements
let rock=document.querySelector("#rock-button")
let paper=document.querySelector("#paper-button")
let scissor=document.querySelector("#scissor-button")

// disabling buttons before entry of number of rounds
// rock.disabled = true;
// paper.disabled = true;
// scissor.disabled = true;

// accessing input fields
// let noOfRounds=document.querySelector("#rounds")
// let startbutton=document.querySelector("#strt")
// let rounmsg=document.querySelector("#input")

// acessing scores
let p_score=document.querySelector("#player")
let c_score=document.querySelector("#comp")
let player_score=0
let computer_score=0

//accessing message
let msg=document.querySelector("#msg")

//accessing reset button
let reset=document.querySelector("#rst")
//adding functionality to start button
let rounds=null
// startbutton.addEventListener("click",() =>{
//     rounds=noOfRounds.value
//     console.log(rounds)
//     enableButtons()
//     noOfRounds.value=""
//     startbutton.classList.add("hide")
//     noOfRounds.classList.add("hide");
//     rounmsg.innerText=`${rounds} rounds left!`
//     msg.innerText="Select Rock/Paper/Scissors"
// })


rock.addEventListener("click",() =>{
    check("rock")
})
paper.addEventListener("click",() =>{
    check("paper")
})
scissor.addEventListener("click",() =>{
    check("scissor")
})    

const resetgame=()=>{
    player_score=0;
    computer_score=0;
    p_score.innerText=player_score;
    c_score.innerText=computer_score
    msg.innerText="Select Rock/Paper/Scissors !"
}
reset.addEventListener("click",resetgame)


const disableButtons=() =>{
    rock.disabled=true
    paper.disabled=true
    scissor.disabled=true
}

const enableButtons=() =>{
    rock.disabled=false
    paper.disabled=false
    scissor.disabled=false
}
const generate=()=>{
    cn=(Math.floor(Math.random()*205))%3
    // console.log(cn)
    if(cn==0){
        return "paper"
    }else if(cn==1){
        return "rock"
    }else{
        return "scissor"
    }
}


const check=(choice) =>{
    comp_choice=generate()
    // rounds--
    // rounmsg.innerText=`${rounds} rounds left!`
    if(choice=="paper"){
        if(comp_choice=="rock"){
            player_score++
            p_score.innerText=player_score
            msg.innerText=`Computer selected rock. You Won!`
        }else if(comp_choice=="scissor"){
            computer_score++
            c_score.innerText=computer_score
            msg.innerText=`Computer selected scissor. You lost!`
        }
        else{
            msg.innerText=`Computer selected paper. It's a draw!`
        }
    }else if(choice=="rock"){
        if(comp_choice=="scissor"){
            player_score++
            p_score.innerText=player_score
            msg.innerText=`Computer selected scissor. You Won!`
        }else if(comp_choice=="paper"){
            computer_score++
            c_score.innerText=computer_score
            msg.innerText=`Computer selected paper. You lost!`
        }
        else{
            msg.innerText=`Computer selected rock. It's a draw!`
        }
    }else{
        if(comp_choice=="paper"){
            player_score++
            p_score.innerText=player_score
            msg.innerText=`Computer selected paper. You Won!`
        }else if(comp_choice=="rock"){
            computer_score++
            c_score.innerText=computer_score
            msg.innerText=`Computer selected rock. You lost!`
        }
        else{
            msg.innerText=`Computer selected scissor. It's a draw!`
        }
    }
    // if(rounds<=0){
    //     startbutton.classList.remove("hide")
    //     noOfRounds.classList.remove("hide");
    //     rounmsg.innerText="Enter number of rounds:"
    //     disableButtons()
    //     if(player_score>computer_score){
    //         msg.innerText=`You have ${player_score} points and computer has ${computer_score} points. You Win!`
    //     }else if(player_score<computer_score){
    //         msg.innerText=`You have ${player_score} points and computer has ${computer_score} points. You Lose!`
    //     }
    //     else{
    //         msg.innerText=`You have ${player_score} points and computer has ${computer_score} points. It's a Draw!`
    //     }
    //     resetgame()
    // }
}