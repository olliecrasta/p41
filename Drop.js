class Drop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    update(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,600), y:random(0,100)})
        }
    }

    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius/4,this.radius);
    }
}