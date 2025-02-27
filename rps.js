// accessing game elements
let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissor=document.querySelector("#scissors")

// acessing scores
let p_score=document.querySelector("#player")
let c_score=document.querySelector("#comp")
player_score=0
computer_score=0

//accessing message
let msg=document.querySelector("#msg")

rock.addEventListener("click",() =>{
    check("rock")
})
paper.addEventListener("click",() =>{
    check("paper")
})
scissor.addEventListener("click",() =>{
    check("scissor")
})
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
    // console.log(choice)
    comp_choice=generate()
    // console.log(comp_choice)
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
    }
}