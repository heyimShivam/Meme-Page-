// 55da4d9bb82f440ebeb3be9e3a594f54




function go(){
    let aujx = new XMLHttpRequest();
aujx.open("GET", "https://meme-api.herokuapp.com/gimme", true);

aujx.onload = function () {

    if (this.status == 200) {

        let obj = JSON.parse(this.responseText);
        print(obj);
    } else {
        console.log("something went wrong");
    }
}
    aujx.send();
}


function print(obj){
   
let tamplet="";

    
    tamplet=document.getElementById("meme").innerHTML+`<div class="card">
    <img class="card-img" src="${obj.preview[2]}" alt="Card image">
    </div>`;

   document.getElementById("meme").innerHTML=tamplet;
}


let i=0;
if(i==0){
   for(let k=0;k<5;k++){
       
       if(k==1){
        setTimeout(go,3000);
       }
       if(k==2){
        setTimeout(go,6000);
       }
       if(k==3){
        setTimeout(go,9000);
       }
       if(k==4){
        setTimeout(go,12000);
       }
       if(k==0){
        go();
       }
    
   }
    i=i+200;
}if(i!==0){
 setInterval(go,5000);
}