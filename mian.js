filter_refX = 0;
filter_refY = 0;

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function moustache()
{
    function preload()
    {
        filter_ref = loadImage('https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/696/0de0b0da-9cbc-4445-987e-963f844dc42f.png')
    }
}
function lipstick()
{
    function preload()
    {
        filter_ref = loadImage('https://s3.aws-k8s.generated.photos/ai-generated-photos/bg-removal-uploads/220/fe6da874-00e0-4ecd-a9cb-5905ca2a2699.png')
    }

}

function save()
{
    save("filtered_pic.jpg");
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(filter_ref, noseX, noseY, 30, 30);
}