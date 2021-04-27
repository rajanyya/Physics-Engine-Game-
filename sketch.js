
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
const Engine= Matter.Engine;

var engine,world;

var ball,ground;
var stand1,stand2;
var slingShot;

function preload(){}
function setup(){
engine=Engine.create();
world=engine.world;
createCanvas(900,400)
ground=new Ground();
stand1=new Stand(380,300,270,10);

//floor one
square1= new Square(280,275,30,40);
square2= new Square(310,275,30,40);
square3= new Square(340,275,30,40);
square4= new Square(370,275,30,40);
square5= new Square(400,275,30,40);
square6= new Square(430,275,30,40);
square7= new Square(460,275,30,40);
square8= new Square(490,275,30,40);

//floor two
square9= new Square(315,235,30,40);
square10= new Square(345,235,30,40);
square11= new Square(375,235,30,40);
square12= new Square(405,235,30,40);
square13= new Square(435,235,30,40);
square14= new Square(465,235,30,40);
//floor three
square15= new Square(350,195,30,40);
square16= new Square(380,195,30,40);
square17= new Square(410,195,30,40);
square18= new Square(440,195,30,40);
//floor four
square19= new Square(385,155,30,40);
square20= new Square(415,155,30,40);
//floor five
square21= new Square(400,115,30,40);


ball= Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new SlingShot(this.ball,{x:200,y:200});
}
function draw(){
background("white")
Engine.update(engine);

strokeWeight(2);
stroke(15);
stand1.display();


stroke(15);
fill("blue")
square1.display();
square2.display();
square3.display();
square4.display();
square5.display();
square6.display();
square7.display();
square8.display();
stroke(15)
fill("pink")
square9.display();
square10.display();
square11.display();
square12.display();
square13.display();
square14.display();
fill("turquoise")
square15.display();
square16.display();
square17.display();
square18.display();
stroke(15)
fill("purple")
square19.display();
square20.display();
fill("gold")
square21.display();

textSize(20);
text("drag the line and hit to your target",575,250);
ellipse(ball.position.x,ball.position.y,20);
slingShot.display();
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY});
}
function mouseReleased(){
slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(this.ball);
    }
}

