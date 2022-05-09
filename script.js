let quizEl=document.getElementById("quiz")
let questionEl=document.getElementById("question")
let outputEl=document.getElementById("output")
let o1El=document.getElementById("o1")
let o2El=document.getElementById("o2")
let o3El=document.getElementById("o3")

let i=1
let inputsarr=[]
let outputarr=[]
let checked=false
let correct=0
questionsarr=["What does the word 'suns' look like upside down?","snus","suns", "nothing","How many letters are in PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS?","45","44", "36","When did Rickroll start","2000","1909","2007"]
Quiz()

function Quiz(){

 if(i<4){
   quizEl.textContent="Question "+i+" out of 3"
   questionEl.textContent=questionsarr[(i-1)*4]
   o1El.innerText=questionsarr[(i-1)*4+1]
    o2El.innerText=questionsarr[(i-1)*4+2]
    o3El.innerText=questionsarr[(i-1)*4+3]
 } 
 if(i===4){
   Result() 
    } 
}

function Submit(){
 let input= document.getElementsByName("question");
 if(i<4){
 for (let j = 0; j<input.length; j++) {
if (input[j].checked) { 
inputsarr.push(input[j].value)
i++ 
checked=true
}
}
if(checked===false){
    outputEl.textContent="Please select an option"}
 else {outputEl.textContent=" "}
Quiz()  }
}


function Result(){
if(inputsarr[0]=="b"){
correct++
outputarr.push("correct") 
}
else {
outputarr.push("incorrect") }
if(inputsarr[1]=="a"){
correct++
outputarr.push("correct") 
}
else {
outputarr.push("incorrect") } 
if(inputsarr[2]=="c"){
correct++
outputarr.push("correct") 
}
else {
outputarr.push("incorrect") }
 
outputEl.innerText="Marks: "+correct+"/3"+"(1: "+outputarr[0]+ ",2: " +outputarr[1]+ ",3: " + outputarr[2]  
if(correct===3){
document.getElementById("rewards").style.display = "block"
}
else{ document.getElementById("notfullmarks").textContent="Get full marks for a reward"
}
}
