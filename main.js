noseX=0;
noseY=0;
LWX=0;  //LeftWristX
RWX=0;
diffX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(350,350);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
}
function draw(){
    font=Text("Hullo!",noseX,noseY);
    font.size(diff,diff)
}
function modelLoaded(){
    console.log("PosenNet has arrived!")
}
function gotPoses(results){
     if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+" noseY="+noseY);
 
        LWX=results[0].pose.leftWrist.x;
        RWX=results[0].pose.rightWrist.x;
        diffX=floor(LWX-RWX)
        console.log("rwx:"+RWX+" Lwx:"+LWX+" diffrence:"+diff);
    }
    else {
        console.error('There are no results');
    }     
}
