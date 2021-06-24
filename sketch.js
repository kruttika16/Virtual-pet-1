//Create variables here
var dog, dogImg, dogImg1;
var database;
var foodS, foodStock;


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database()

  foodStock = database.ref("food");
  foodStock.on("value",readStock);
}



function draw() {  
  background("pink");

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImg(happyDogImg)
  }
  drawSprites();
  //add styles here

  fill("red");
  textSize(20);
  text("press UP_ARROW key to feed", 100,50);
  text("Food:"+foods,100,100);

}
function readStock(){
  foods = data.val();
}

function writeStock(){
  if(x<=0){
    x=0;
  }
  else{
  x = x-1;
  }

   database.ref("/").update({
     Food:x
   })
}



