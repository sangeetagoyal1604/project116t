nosex=0;
nosey=0;

function preload() {
   jo=loadImage('https://1ab7t83ossu73um951g2vaw3-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/abbce-mustache2.png'); 
}
function setup() {
canvas=createCanvas(400,400);
 webcam=createCapture(VIDEO); 
   webcam.size(300,300);
webcam.hide();
posenet=ml5.poseNet(webcam,modeloaded);
posenet.on('pose',gotresult);
function gotresult(result) {
    if (result.length>0) {
     console.log(result);
nosex=result[0].pose.nose.x;
        console.log("x="+result[0].pose.nose.x);
        nosey=result[0].pose.nose.y; 
        console.log("y="+result[0].pose.nose.y); 
    }
}
function modeloaded() {
    console.log("photoloaded");
}
}
function draw() {
 image(webcam,0,0,400,400); 
 fill(65, 105, 225);
 stroke(65, 105, 225);

 image(jo,nosex+14,nosey+55,50,50);
}
function result() {
    save('filter.png');
}
