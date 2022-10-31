//Multiplayer
var aa=document.getElementById("multiplayer"),bb=document.getElementById("computer");
let vsComp = false;
aa.addEventListener("click",()=>{
document.getElementById("first").style.display = "none";
document.getElementById("footer1").style.display = "none";
document.getElementById("second").style.display = "block";
next("second");
}
);

function next(id){
setTimeout(()=>{
document.getElementById(id).style.display = "none";
document.getElementById("game").style.display = "block";
},8000);

}
//VScomputer
bb.addEventListener("click",()=>{
vsComp=true;
document.getElementById("first").style.display = "none";
document.getElementById("footer1").style.display = "none";
document.getElementById("second").style.display = "block";
next("second");
});

//The game







//Variables
const game_board= [[0,0,0],
                  [0,0,0],
                  [0,0,0]
                  ];
var jj=1;
var player=2;
var a=document.getElementById("a"),b=document.getElementById("b"),c=document.getElementById("c"),
d=document.getElementById("d"),e=document.getElementById("e"),f=document.getElementById("f"),
g=document.getElementById("g"),h=document.getElementById("h"),i=document.getElementById("i"),
k=document.getElementById("restart");


//Event Listerners
a.addEventListener("click",()=>{
let w=switxh(a);
w==-2?game_board[0][0]=5:game_board[0][0]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp ){
setTimeout(computer,150);
}
});


b.addEventListener("click",()=>{
let w=switxh(b);
w==-2?game_board[0][1]=5:game_board[0][1]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

c.addEventListener("click",()=>{
let w=switxh(c);
w==-2?game_board[0][2]=5:game_board[0][2]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

d.addEventListener("click",()=>{
let w=switxh(d);
w==-2?game_board[1][0]=5:game_board[1][0]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

e.addEventListener("click",()=>{
let w=switxh(e);
w==-2?game_board[1][1]=5:game_board[1][1]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

f.addEventListener("click",()=>{
let w=switxh(f);
w==-2?game_board[1][2]=5:game_board[1][2]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

g.addEventListener("click",()=>{
let w=switxh(g);
w==-2?game_board[2][0]=5 : game_board[2][0]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

h.addEventListener("click",()=>{
let w=switxh(h);
w==-2?game_board[2][1]=5 : game_board[2][1]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});

i.addEventListener("click",()=>{
let w=switxh(i);
w==-2?game_board[2][2]=5 : game_board[2][2]=2;
jj++;
if(jj>=6){
setTimeout(ref,150);
}
if(jj%2==0 &&vsComp){
setTimeout(computer,150);
}
});
//Events completed


//my function
function ref(){
let sum1=15;
let sum2=6;
for(var ii=0;ii<3;ii++){
if(sum(game_board[ii])==sum1||sum(game_board[ii])==sum2){
document.querySelectorAll('button.ab').forEach(elem => {
  elem.disabled = true;
});
alert("Game Won");
return;
}
if(sum(column(game_board,ii))==sum1 || sum(column(game_board,ii))==sum2)
{
document.querySelectorAll('button.ab').forEach(elem => {
  elem.disabled = true;
});
alert("Game Won");
return;
}

}
var diag1=dia1(game_board),diag2=dia2(game_board);
if(sum(diag1)==sum1 ||sum(diag1)==sum2){
document.querySelectorAll('button.ab').forEach(elem => {
  elem.disabled = true;
});
alert("Game won");
return;
}
if(sum(diag2)==sum1 ||sum(diag2)==sum2){
document.querySelectorAll('button.ab').forEach(elem => {
  elem.disabled = true;
});
alert("Game won");
return;
}
if(jj==10){
alert("Game ends as a draw");
}

}
//others
//summation function
function sum(list){
var total=0;
for(var ii=0; ii<list.length;ii++){
total+=list[ii];
}
return total;
}

//get column function
function column(array,col){
var column=[];
for(var ii=0;ii<array.length;ii++){
column.push(array[ii][col]);
}
return column;
}

//diagonals
//1
function dia1(array){
var diagonal=array.reverse().map((a, i) => a[i]);
array.reverse();
return diagonal;
}

//2
function dia2(array){
var diagonal=array.map((a, i) => a[i]);
return diagonal;
}
//draw function
function tie(){
if(jj==9){
alert("game ended as a tied");
}
}

function switxh(z){
if(player==1){
z.innerHTML="O";
z.disabled=true;
player=2;
return -1;
}
else if(player==2){
z.innerHTML="X";
z.disabled=true;
player=1;
return -2;
}
}


//function 001
function computer(){

var s=[e,b,d,i,c,g,f,a,h];
//Defence




//Attack

i7=defender();
if(i7){
defense(s);
}

}








function move(o){
setTimeout(function(){
o.click();
},1000);
}

function empty(list){
for(let ii=0;ii<list.length;ii++){
if(list[ii]==0){
return ii;
}
}
}


function space(){
return;

}








//Defender function

function defender(){
let sum1=10;
let sum2=4;
for(var ii=0;ii<3;ii++){
if(sum(game_board[ii])==sum1||sum(game_board[ii])==sum2){
//find the empty spot and play it
if(ii==0){
var r1=[a,b,c];
defense(r1);
return;
}
if(ii==1){
var r2=[d,e,f];
defense(r2);
return;
}
if(ii==2){
var r3=[g,h,i];
defense(r3);
return;
}

}
if(sum(column(game_board,ii))==sum1 || sum(column(game_board,ii))==sum2){
//find the empty spot and play it
if(ii==0){
var c1=[a,d,g];
defense(c1);
return;
}
//
if(ii==1){
var c2=[b,e,h];
defense(c2);
return;
}
//
if(ii==2){
var c3=[c,f,i];
defense(c3);
return;
//

}

}
var diag1=dia1(game_board),diag2=dia2(game_board);
if(sum(diag1)==sum1 ||sum(diag1)==sum2){
//Find the empty spot and play it
var d1=[a,e,i];
defense(d1);
return;
}
if(sum(diag2)==sum1 ||sum(diag2)==sum2){
//Find the empty spot and play it
var d2=[c,e,g];
defense(d2);
return;
}
}
return true;
}
//defender function 

function defense(list){
for(let jj1=0;jj1<list.length;jj1++){
if(list[jj1].disabled==false){
move(list[jj1]);
return;
}
}
}


