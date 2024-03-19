const bar=document.querySelector('#bar')
const sidebar=document.querySelector('.sidebar-menu')
const cross=document.querySelector('.cross');
const sign=document.querySelector('#sign')

bar.addEventListener('click' ,()=>{
    sidebar.style.left=0 +"px";
    
});


cross.addEventListener('click', ()=>{
    sidebar.style.left=-350 + "px";

})


