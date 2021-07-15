rightWristX = 0;
leftWristX = 0;
size = 0;
function setup(){
    canvas = createCanvas(450,340);
    canvas.position(800,167);
    video = createCapture(VIDEO);
    video.size(450,450);
    textSize(32);
    text("Varsha",170,165);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',getPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function getPoses(results){
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
    console.log("rightWristX = "+rightWristX);
    console.log("leftWristX = "+leftWristX);
    size = floor(rightWristX-leftWristX);
    console.log("size = "+size);
}