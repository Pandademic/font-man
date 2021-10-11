function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(350,350);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
 }