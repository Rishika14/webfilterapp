upperlipsx=0;
upperlipsy=0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, upperlipsx, upperlipsy, 50, 25);
}

function take_snapshot() {
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log("PoseNet is Initialized");
}
function gotPoses(results) 
{
    if(results.length > 0)
    {
    console.log(results);
    upperlipsx=results[0].pose.nose.x-25;
    upperlipsy=results[0].pose.nose.y+5;
    console.log("upperlips x = " + results[0].pose.nose.x);
    console.log("upperlips y = " + results[0].pose.nose.y);
}
}