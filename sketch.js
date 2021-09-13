var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg,orangeLeaf,orangeLeafImg,redLeaf,redLeafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg - loadImage('leaf.png')  ;        
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  spawnApples();
  spawnLeaf();

  drawSprites();

  function spawnApples()
  {
    if(frameCount%80 === 0 )
    {
    apple = createSprite(200,-400,50,50);
    apple.velocityY = 10;
    apple.addImage(appleImg);
    apple.scale = 0.05
    apple.x = Math.round(random(20,100));
    console.log('apple depth',apple.depth);
    console.log('rabbit depth',rabbit.depth);

    rabbit.depth = apple.depth + 1;
    
  }
  }
  function spawnLeaf()
  {
    if(frameCount%80===0)
    {
      leaf = createSprite(300,-400,50,50);
      leaf.velocityY = 10;
      leaf.addImage(leafImg);
      leaf.scale = 0.06;
      leaf.x = Math.round(random(20,100));
      console.log('leaf depth',leaf.depth);
      console.log('rabbit depth',rabbit.depth);

      rabbit.depth = leaf.depth +1;
    }

  }
} 