class Square{
    constructor(x,y,width,height){
    var options={
    restitution:0.4,
    friction:1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image= loadImage("square.png")
    World.add(world,this.body);
    this.visibility=255; 

    }
    display(){
        if(this.body.speed<3){
    var angle= this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
    
    pop();
}
else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    tint(255,this.visibility)
    rect(999,999,this.width,this.height);
    pop();
}
    }
}