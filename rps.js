
// accessing game elements
let rock=document.querySelector("#rock-button")
let paper=document.querySelector("#paper-button")
let scissor=document.querySelector("#scissor-button")

// disabling buttons before entry of number of rounds
rock.disabled = true;
paper.disabled = true;
scissor.disabled = true;

// accessing input fields
let noOfRounds=document.querySelector("#rounds")
let startbutton=document.querySelector("#strt")

//adding functionality to start button
let rounds=null
startbutton.addEventListener("click",() =>{
    rounds=noOfRounds.value
    console.log(rounds)
    rock.disabled=false
    paper.disabled=false
    scissor.disabled=false
    noOfRounds.value=""

})
// acessing scores
let p_score=document.querySelector("#player")
let c_score=document.querySelector("#comp")
player_score=0
computer_score=0

//accessing message
let msg=document.querySelector("#msg")

//accessing reset button
let reset=document.querySelector("#rst")

rock.addEventListener("click",() =>{
    check("rock")
})
paper.addEventListener("click",() =>{
    check("paper")
})
scissor.addEventListener("click",() =>{
    check("scissor")
})

reset.addEventListener("click",()=>{
    player_score=0;
    computer_score=0;
    p_score.innerText=player_score;
    c_score.innerText=computer_score
})

const disableButtons=() =>{
    rock.disabled=true
    paper.disabled=true
    scissor.disabled=true
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
    rounds--
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
    if(rounds<=0){
        disableButtons()
    }
}