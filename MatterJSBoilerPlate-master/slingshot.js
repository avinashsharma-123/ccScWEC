class slingshot{
    constructor(bodyA,ptb){
        var options={bodyA:bodyA,pointB:ptb,stiffness:0.5,length:1}
        this.body=Matter.Constraint.create(options)
        Matter.World.add(world,this.body)
        this.pointB=ptb
    }
    display(){
        if (this.body.bodyA!=null)
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    fly(){
        this.body.bodyA=null
    }
    attach(body){
        this.body.bodyA=body
    }
}