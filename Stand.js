class Stand{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image= loadImage("platform.png")
    World.add(world,this.body);
    }
    display(){
    var angle=this.body.angle;
    strokeWeight(2.5);
    fill("silver");
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,300,20);
    pop();
    }
    }
    
    
    