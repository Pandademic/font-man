noseX=0;
noseY=0;
LWX=0;  //LeftWristX
RWX=0;
diffX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,300);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
}
function draw(){
    textSize(diffX);
    text('Hullo!',noseX-100,noseY-100);
}
function clearText(){
    remove();
    window.location="index.html"
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
        diffTemp=floor(LWX-RWX)
        if(diffTemp >= 400) {
            diffX=diffTemp-350;
        }
        if(diffTemp >= 300){
            diffX=diffTemp-250;

        }
        if(diffTemp >= 200){
            diffX=diffTemp-150;
            
        }
        if(diffTemp >= 150){
            diffX=diffTemp-50;
            
        }
        console.log("difftemp:"+diffTemp)
        console.log("rwx:"+RWX+" Lwx:"+LWX+" diffrence:"+diffX);
        oldLWX=LWX;
    }
    else {
        console.error('There are no results');
    }     
}
