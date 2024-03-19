

let signup=document.querySelector("#sign-up");
let signin=document.querySelector("#sign-in");

signin.addEventListener('click',()=>{
    signup.style.backgroundColor="rgba(186, 183, 183, 0.415)";
    signin.style.backgroundColor="cornflowerblue";
    
})

signup.addEventListener('click',()=>{
    signin.style.backgroundColor="rgba(186, 183, 183, 0.415)";
    signup.style.backgroundColor="cornflowerblue";
    
})