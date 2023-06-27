const getcolor=()=>{
    const rando=Math.floor(Math.random()*16777215);
    const hex='#'+rando.toString(16);
    document.body.style.backgroundColor =hex;
    document.getElementById("txt").innerText=hex;

}
let btn=document.getElementById("btn").addEventListener("click",
    getcolor
    
)