
let createbutton = document.getElementsByTagName("button");

// variable to make the differt id for differnt card
let variableforid = 0;

//  darg start event function 

function dragstarted(event){
    // console.log("dragstart");
    let dargedelement = event.target;
    event.dataTransfer.setData("id" , dargedelement.id );

 }
 
//  End End End

// Adding event to button and change the class name of input tag


// If we click out side hide the inpute tag
function inputBoxHide(event){
      if(event.target.className!="createbtnclass" && event.target.className!="show"){
        let openinput = document.getElementsByClassName("show");
       for(let i = 0; i<openinput.length;i++){
        openinput[i].className="hide";
         }
      }
   
}

let alldiv = document.querySelectorAll("section>div");
    for(let i = 0; i<alldiv.length;i++){

        alldiv[i].addEventListener("click" , inputBoxHide);
        
    }
        
    //end end end 

function creatinput(event){
    
    let creatinput = event.target.nextElementSibling;
    creatinput.className = "show";
    
}


for(let i = 0; i<createbutton.length;i++){
    createbutton[i].addEventListener("click" , creatinput);
}

// End End End


// Delete card function and event are adding dynaiclly indide inputhandel function 

function deletecard(refofbtn){
//    let refofdeletebtn = event.target;
   let refofdeletebtnparent = refofbtn.parentNode;
   refofdeletebtnparent.remove();
}

// End End End

// Handel Input.value in input tag and adding event to input tag


function handelinput(event){

    let taskname = event.target;
    // To avoid the empty task name
    if(taskname.value === "" && event.keyCode === 13 ){
        alert("Enter Task Name");
        console.log("empty");
        return;
    }
    // end end end
    if(event.keyCode === 13 ){
       let card = document.createElement("div");
       card.draggable = "true";
       card.className= "cardinside";
       card.id = `${"id"+variableforid}`;
       variableforid++;
       let taskvalue = taskname.value;
    //    here delete key ara added to delete the card from cardcontainer;
       card.innerHTML = `<b>${taskvalue}</b>
       <button class="deletebtnclass" onclick="deletecard(this)">Delete</button>`;
       let cardcontainer = taskname.nextElementSibling;
       cardcontainer.appendChild(card);
       taskname.value = "";
       taskname.className = "hide";


//    adding event listner for all the card inside 

       let cardeve = document.getElementsByClassName("cardinside");
       for(let i=0; i<cardeve.length ;i++){

        cardeve[i].addEventListener("dragstart" ,  dragstarted); 

       }
    }

}

let input = document.querySelectorAll("section > div> input");
for(let i = 0; i<input.length;i++){
    input[i].addEventListener("keyup" , handelinput);
}

// End End End

// droping event function and adding event card 


function droping(event){
    
    let onWhichElementDrop = event.target;
    // console.log(onWhichElementDrop);
    // console.log("cardThatdrag");
    let idOfDragElement = event.dataTransfer.getData("id");
    let cardThatdrag = document.getElementById(idOfDragElement);
    let DropONexitedCard = onWhichElementDrop.parentNode;
    if(onWhichElementDrop.className === "cards" || DropONexitedCard.className === "cards" ){
        

        if(onWhichElementDrop.className != "cards" && DropONexitedCard.className == "cards"){
            
           
            DropONexitedCard.appendChild(cardThatdrag); 
            return;
        }
        onWhichElementDrop.appendChild(cardThatdrag);
    }
    
}


let whereCardIsDrop = document.querySelectorAll("section>div");
for(let i = 0; i<whereCardIsDrop.length;i++){
    whereCardIsDrop[i].addEventListener("dragover" , (event) => {
        event.preventDefault()});
        whereCardIsDrop[i].addEventListener("drop", droping);
}

// End End End


