// accessing game elements
let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let scissor=document.querySelector("#scissors")

// acessing scores
let p_score=document.querySelector("#player")
let c_score=document.querySelector("#comp")

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
}