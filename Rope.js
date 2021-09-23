class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA=pointA
        this.pointB=pointB
        
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB}
        }
        rope1=Matter.Constraint.create({
            bodyA:roof,
            bodyB:ball1,
            length:100,
            stiffness:0.1
        })
    
        rope2=Matter.Constraint.create({
            bodyA:roof,
            bodyB:ball2,
            length:100,
            stiffness:0.1
        })
        
        rope3=Matter.Constraint.create({
            bodyA:roof,
            bodyB:ball3,
            length:100,
            stiffness:0.1
        })
    
        rope4=Matter.Constraint.create({
            bodyA:roof,
            bodyB:ball4,
            length:100,
            stiffness:0.1
        })
    
        rope5=Matter.Constraint.create({
            bodyA:roof,
            bodyB:ball5,
            length:100,
            stiffness:0.1
        })
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);
       
    }
}