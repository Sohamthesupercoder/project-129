var happierisplaying
var fadedisplaying;
var faded;
var happier;
var lefty;
var leftx;
var righty;
var rightx;
function preload(){
faded =loadSound("Piano Alan Walker Faded Cover by Ducci No Copyright.mp3");
happier =loadSound("marshmello.mp3");
}

function setup(){
canvas =createCanvas(700,500);
canvas.position(300,300);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function draw(){
image(video,0,0,700,500);
fill("red");
ellipse(leftx,lefty,40,40);
fill("red");
ellipse(rightx,righty,40,40);
if(lefty < 200){
    fadedisplaying="yes";
    happierisplaying="no";
}else if(righty < 200){
 fadedisplaying="no";
   happierisplaying="yes";
}

if(fadedisplaying  == "yes" && happierisplaying == "no"){
    happier.stop();
    faded.stop();
faded.play();
}else if(fadedisplaying  == "no" && happierisplaying == "yes"){
    faded.stop();
    happier.stop();
    happier.play();
}
}

function modelloaded(){
console.log("modelloaded"); 
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
rightx=results[0].pose.rightWrist.x;
righty=results[0].pose.rightWrist.y;
leftx=results[0].pose.leftWrist.x;
lefty=results[0].pose.leftWrist.y;
}
}