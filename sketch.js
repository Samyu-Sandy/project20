var cat,mouse;
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    cat1Img = loadAnimation("cat1.png");
    cat2Img = loadAnimation("cat2.png","cat3.png");
    cat3Img = loadAnimation("cat4.png");
    mouse1Img = loadAnimation("mouse1.png");
    mouse2Img = loadAnimation("mouse2.png","mouse3.png");
    mouse3Img = loadAnimation("mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,300);
    garden.addImage("garden",gardenImg);
    //create tom and jerry sprites here
   cat = createSprite(750,450,20,20);
   cat.addAnimation("cat sitting",cat1Img);
   cat.scale = 0.1;

   mouse = createSprite(275,450,20,20);
   mouse.addAnimation("mouse",mouse1Img);
   mouse.scale = 0.1;




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImg",cat3Img);
        cat.changeAnimation("catLastImg");

       mouse.addAnimation("mouseLastImg",mouse3Img);
        mouse.changeAnimation("mouseLastImg");
    }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("cat running",cat2Img);
    cat.scale = 0.15
    cat.changeAnimation("cat running"); 

    mouse.addAnimation("teasing mouse",mouse2Img);
    mouse.scale = 0.09;
    mouse.changeAnimation("teasing mouse"); 
}

}
