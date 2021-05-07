class stone {
    constructor (x,y,width,height){
        var options={isStatic:true}
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        Matter.World.add(world,this.body)
        this.width=width
        this.height=height
        this.Image=loadImage("images/stone.png")
    }
    display(){
        imageMode(CENTER);
        image(this.Image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}