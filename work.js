let choices= document.querySelectorAll(".choice");
let usscore=0;
let ccscore=0;
let usc= document.querySelector("#us");
let csc= document.querySelector("#cs");
let msg= document.querySelector("#p");
  
  const gencchoice= ()=>{
       let arr=["rock", "paper","scissors"]
     let option= Math.floor(Math.random()*3);

       return arr[option];
  }
  
 const showwin= (uschoice,cchoice,uwin)=>{
              if(uwin){
                usscore++;
                  console.log("You Won!!","Your",uschoice,"beats",cchoice);
                  usc.innerHTML= usscore;
                  msg.innerHTML= `You Won!! your ${uschoice} beats ${cchoice}`;
                  msg.style.backgroundColor= "green";
              }
              else{
                ccscore++;
                  console.log("You lost",` ${cchoice} beats Your ${uschoice}`);
                  csc.innerHTML = ccscore;
                  msg.innerHTML= `You Lost!!  ${cchoice} beats Your ${uschoice}`;
                  msg.style.backgroundColor= "red";
              }
 }
 const drawgame=()=>{
       console.log("Game is draw play again");
 }
 const pgame= (uschoice) => {

       const cchoice= gencchoice();
       console.log("Computer Choice is ",cchoice); 
       let uwin= true;
      if(cchoice === uschoice){
        drawgame();
      }
    
      
    else{
           if(uschoice=="rock"){
                  if(cchoice=="paper"){
                     uwin=false;
                  }
                  else{
                      uwin=true;
                  }
           }
          else if(uschoice=="paper"){
            if(cchoice=="scissors"){
               uwin=false;
            }
            else{
                uwin=true;
            }
     }
     else {
        if(cchoice=="rock"){
           uwin=false;
        }
        else{
            uwin=true;
        }
    }

    }
    showwin(uschoice,cchoice,uwin);

 }



 choices.forEach((choice) => {
     console.log(choice);
    choice.addEventListener("click", () => {
      const uschoice = choice.getAttribute("id");
      console.log("Your choice is ",uschoice);
      pgame(uschoice);
    });
  });