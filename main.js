function preload(){
}
function setup(){
    canvas = createCanvas(500,450);
    canvas.position(70,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 100, 80, 300, 300);
    tint(tint_color);

    stroke(247, 134, 206);
    fill(247, 134, 206);

    rect(63,37,375,18);
    rect(63,397,375,18);
    rect(27,73,18,315);
    rect(448,73,18,315);
    
    stroke(161, 66, 245);
    fill(161, 66, 245);

    circle(40,50,70);
    circle(460,50,70);
    circle(40,410,70);
    circle(460,410,70);

}
function take_snapshot(){
    save('filterpicture.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}